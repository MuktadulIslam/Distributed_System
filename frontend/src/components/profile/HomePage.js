import React, { useEffect, useState } from 'react'
import { getAllPostByService } from '../../services/postService.js';

export default function HomePage(props) {
    let loadFirstTime = true;
    const user = props.user;
    const [allPost, setAllPost] = useState([]);

    const getAllPostFromService = async () => {
        const posts = await getAllPostByService(user.username)
        setAllPost(posts)
    }

    useEffect(() => {
        if (loadFirstTime) {
            getAllPostFromService()
            loadFirstTime = false;
        }
    }, []);

    const getPostTime = (postDate) => {
        const postTime = new Date(postDate);
        const now = new Date();
        const timeDiff = now - postTime;

        const minutes = Math.floor(timeDiff / (1000 * 60));
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));

        // Format the date based on the elapsed time
        if (minutes < 1) {
            return <span style={{ color: 'blue' }}>Just now</span>;
        } else if (minutes < 60) {
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (hours < 24) {
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else {
            return `${postDate.toDateString()}`;
        }

    }
    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">

                            {allPost && allPost.length > 0 ?
                                allPost.map((post) => (
                                    <div key={post.postID} className="card mb-5" style={{ borderRadius: '15px' }}>
                                        <div className="card-body p-4">
                                            <h3 className="mb-3">{post.authorName}</h3>
                                            <p className="small mb-0">
                                                <i className="far fa-star fa-lg"></i> <span className="mx-2">|</span>
                                                Created <strong>{getPostTime(post.postTime)}</strong>
                                            </p>
                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-start align-items-center">
                                                <p>{post.article}</p>
                                            </div>
                                        </div>

                                        {post.image_url !== 'null' ?
                                            (<>
                                                <img alt='post image' src={post.image_url}
                                                    style={{
                                                        width: '100%',
                                                        border: '2px solid black'
                                                    }} />
                                            </>)
                                            : null
                                        }
                                    </div>
                                )) : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
