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


## By Using Docker
1. Install docker in your machine.
2. Download or copy the [Distributed_System/docker-compose.yml](https://github.com/MuktadulIslam/Distributed_System/blob/main/docker-compose.yml) file.
2. Run the code from the folder where you downloaded or made a copy of that file.
    ```bash
    docker-compose  up -d
    ```
Now your  Mini-Linkedin website is running at "http://localhost/"

### Note:
Your User Database is running on "mongodb://localhost:6001/" </br>
Your Post Database is running on "mongodb://localhost:6002/" </br>
Your Notification Database is running on "mongodb://localhost:6003/" 


## Without Using Docker
To run the app without using docker, first you need to install,
1. NodeJS (v20.5.1)
2. React (v18.2.0)
3. MongoDB (v7.0.2)
4. Minio
5. Nginx

### Installation & Setup For Ubuntu
1. Install Nginx:

    ```bash
    sudo apt update
    sudo apt install nginx
    ```

2. Add the nginx code (Open the new trminal and run the command. Then add the code in that from the Distributed_System/nginx-server/nginx.conf):

    ```bash
    sudo gedit /etc/nginx/sites-available/default
    ```

3. Install Minio:

    ```bash
    sudo apt update
    wget https://dl.minio.io/server/minio/release/linux-amd64/minio
    chmod +x minio
    ```

4. Install [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/):

    ```bash
    sudo apt-get install gnupg curl
    curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
        sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
        --dearmor
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo mongodb.org/apt/ubuntu jammy mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
    sudo apt-get update
    sudo apt-get install -y mongodb-org
    mongod --version
    ```

### Run
```bash
    MINIO_ROOT_USER=minioadmin MINIO_ROOT_PASSWORD=minioadmin ./minio server ./MinioPostServer --console-address ":9001"
    node Distributed_System/backend/user_server/app.js
    node Distributed_System/backend/posts_server/app.js
    node node Distributed_System/backend/notification_server/app.js
```
