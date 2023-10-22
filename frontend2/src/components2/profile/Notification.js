import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { getAllNotificationByService,deleteNitificationByService } from '../../services/notificationService';

export default function Notification(props) {
	let loadFirstTime = false;
	const user = props.user;
	const [allNotifications, setAllNotifications] = useState([]);

	const getallNotifications = async () => {
		const notifications = await getAllNotificationByService(user.email, user.username);
		setAllNotifications(notifications);
		console.log(allNotifications)
	}


	useEffect(() => {
		if (!loadFirstTime) {
			getallNotifications();
			loadFirstTime = true;
		}
	}, []);


	const removeNotification = async (event, postID) => {
		event.preventDefault();
		await deleteNitificationByService(user.username,user.email, postID);
	}

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
			<div className="container mt-4">
				<h4>Notifications</h4>
				<ListGroup>
					{allNotifications && allNotifications.length > 0 ?
						allNotifications.map(notification => (
							<ListGroupItem key={notification.postID}>
								<div className="d-flex justify-content-between align-items-center">
									<div><strong>{notification.authorName}</strong> added a post  ({getPostTime(notification.postTime)})</div>
									<div>
										<button onClick={(e) => removeNotification(e, notification.postID)}>View The Post</button>
									</div>
								</div>
							</ListGroupItem>
						))
						: null
					}
				</ListGroup>
			</div>
		</>
	);
};
