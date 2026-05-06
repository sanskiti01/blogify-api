# 🚀 Blogify API

A powerful RESTful API for a blogging platform built with modern technologies. This API supports user authentication, post management, image uploads, and payment integration.

---

## 📌 Features

* 🔐 User Authentication (JWT-based)
* 📝 CRUD Operations for Blog Posts
* 📸 Image Uploads using Cloudinary
* 💳 Payment Integration with Stripe
* 📦 Order Management System
* ☁️ MongoDB Atlas Cloud Database
* ⚡ Scalable and Modular Architecture

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose
* **Authentication:** JWT (JSON Web Tokens)
* **File Storage:** Cloudinary
* **Payment Gateway:** Stripe
* **Cloud Database:** MongoDB Atlas

---

## 📋 Prerequisites

Make sure you have:

* Node.js installed
* MongoDB Atlas account
* Cloudinary account
* Stripe account

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/blogify-api.git

# Navigate into the project
cd blogify-api

# Install dependencies
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
# Server
PORT=3000

# Database
MONGO_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

---

## ▶️ Running the Project

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint             | Description   | Auth |
| ------ | -------------------- | ------------- | ---- |
| POST   | `/api/auth/register` | Register user | ❌    |
| POST   | `/api/auth/login`    | Login user    | ❌    |

---

### 📝 Posts

| Method | Endpoint         | Description     | Auth |
| ------ | ---------------- | --------------- | ---- |
| GET    | `/api/posts`     | Get all posts   | ❌    |
| GET    | `/api/posts/:id` | Get single post | ❌    |
| POST   | `/api/posts`     | Create post     | ✅    |
| PUT    | `/api/posts/:id` | Update post     | ✅    |
| DELETE | `/api/posts/:id` | Delete post     | ✅    |

---

### 📸 Upload

| Method | Endpoint      | Description  | Auth |
| ------ | ------------- | ------------ | ---- |
| POST   | `/api/upload` | Upload image | ✅    |

---

### 💳 Payments

| Method | Endpoint                              | Description     | Auth |
| ------ | ------------------------------------- | --------------- | ---- |
| POST   | `/api/payments/create-payment-intent` | Create payment  | ✅    |
| POST   | `/api/payments/confirm-payment`       | Confirm payment | ✅    |

---

### 📦 Orders

| Method | Endpoint                | Description       | Auth |
| ------ | ----------------------- | ----------------- | ---- |
| POST   | `/api/orders`           | Create order      | ✅    |
| GET    | `/api/orders/my-orders` | Get user orders   | ✅    |
| GET    | `/api/orders/:id`       | Get order details | ✅    |

---

## 📁 Project Structure

```
blogify-api/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── utils/
│── .env
│── server.js
│── package.json
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

**Your Name**
GitHub: https://github.com/sanskriti01

---
