# Distributed System Project (Mini LinkedIn)
This project presents a robust and versatile mini LinkedIn clone powered by Docker, Node.js, MongoDB, Minio, React, and Nginx. It is a comprehensive and self-contained web application, designed for users to create profiles, connect, post content, and stay updated with real-time notifications.

The main target of this project is to build a disributed application which will a highly scalable for production-related purposes.

## Key Features

This version of the app supports the following features:

✅ Registering user

✅ Login user

✅ Authenticating User using JWT Token

✅ Making Post along with `Image`

✅ Uploading & Showing images from `Minio`

✅ Real-time Notifications.

✅ Notification Cleaner (clear already read notifications every 30 minutes)


# How to Run Locally
You can run it by using directly or by using docker.

## Without Using Docker
To run the app without using docker, first you need to install,
1. NodeJS (v20.5.1)
2. React (v18.2.0)
3. MongoDB (v7.0.2)
4. Minio
5. Nginx

### Installation For Ubuntu
#+begin_src bash
wget https://dl.minio.io/server/minio/release/linux-amd64/minio
chmod +x minio
#+end_src
add the nginx-server/nginx.conf to the system nginx.conf

### Run
#+begin_src bash
MINIO_ROOT_USER=minioadmin MINIO_ROOT_PASSWORD=minioadmin ./minio server ./MinioPostServer --console-address ":9001"
node Distributed_System/backend/user_server/app.js
node Distributed_System/backend/posts_server/app.js
node node Distributed_System/backend/notification_server/app.js
#+end_src
