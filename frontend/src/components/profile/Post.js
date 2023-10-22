import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import constant from '../../messageConstant';
import { makePostByService } from '../../services/postService';

export default function Post(props) {
	const [articleText, setArticleText] = useState('');
	const [imagePreview, setImagePreview] = useState(null);
	const [imageFile, setImageFile] = useState(null);
	const user = props.user;
	const [photo, setPhoto] = useState('')

	const handleImageChange = (event) => {
		const image = event.target.files[0];
		setImageFile(image)

		if (image) {
			const reader = new FileReader();
			reader.onload = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(image);
		}
	};


	const removeImage = (event) => {
		event.preventDefault();
		setImagePreview(null);
		setImageFile(null);
		document.getElementById('imageInput').value = '';
	}

	const post = async (event) => {
		event.preventDefault();
		const postData = {
			authorName: user.username,
			authorEmail: user.email,
			article: articleText,
			image: imageFile
		}

		makePostByService(postData)
	};

	useEffect(() => {

	}, [photo]);



	return (
		<>
			<div className="container mt-5">
				<h2>Make a Post</h2><br />
				<div className="mb-3">
					<label htmlFor="articleTextarea" className="form-label"><h5>Enter Article:</h5></label>
					<textarea
						className="form-control"
						id="articleTextarea"
						rows="6"
						placeholder="What's on your mind?"
						onChange={(e) => setArticleText(e.target.value)}
					></textarea>
				</div>

				{imagePreview && (
					<div className="mb-3">
						<div className="form-label">
							<h5>Image Preview:
								<div className="btn btn-danger btn-sm" title="Remove my profile image" onClick={removeImage}><i className="bi bi-trash"></i></div>
							</h5>
						</div>
						<div className='row'>
							<img src={imagePreview} alt="Preview" className="img-thumbnail" style={{ width: '50%' }} />
						</div>
					</div>
				)}

				<div className="mb-3">
					<label htmlFor="imageInput" className="form-label"><h5>Choose an image:</h5></label>
					<input
						type="file"
						className="form-control"
						id="imageInput"
						accept="image/*"
						onChange={handleImageChange}
					/>
				</div>

				<div style={{ paddingBottom: '100px' }}>
					<button className="btn btn-primary" onClick={post}>Post</button>
				</div>
			</div>
		</>
	);
}

