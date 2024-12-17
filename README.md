# 📢 Pitch Me a Coin

**Pitch Me a Coin** is a crowdfunding platform that empowers creators to bring their ideas to life. It allows creators to pitch their request and receive financial support from backers around the world. The platform ensures transparency, security, and ease of use for both creators and supporters.

---

## 🚀 **Features**
- **Creator Dashboard**: Manage your campaigns, track support, and view statistics.
- **Secure Payments**: Payments are processed through **Razorpay** for fast and secure transactions.
- **Project Insights**: View total revenue, orders, and new connections at a glance.


---

## 📸 Screenshots

Here are some screenshots of the *Pitch Me A Coin* platform in action:

### Home Page
Logged Out
![Home Page](/public/screenshots/Homepage1.png)
Logged In
![Home Page](/public/screenshots/Homepage.png)

### Dashboard
![Dashboard](/public/screenshots/Dashboard1.png)

### Payment Page
![Payment Page](/public//screenshots/Yourpage.png)

### Payment Integraiton
![Payment](/public/screenshots/Payment.png)

---

## 🛠️ **Tech Stack**
**Frontend:**
- **Next.js**: Fast, server-side rendering, and dynamic page routing.
- **React.js**: Interactive, component-based UI.
- **Tailwind CSS**: Customizable and responsive design.

**Backend:**
- **Node.js**: Server-side runtime.
- **Next.js**: Backend logic and API routes.

**Database**
- **MongoDB**: Database to store user and project data.
- **Mongoose**
  
**Payment Gateway:**
- **Razorpay**: Secure and seamless payment processing.

**Authentication**
- **NextAuth.js**

---

## ⚙️ **Environment Variables**
To run this project, you will need to set up the following environment variables in a `.env` file at the root of your project.

**MongoDB Database**\
`MONGO_URI=your-mongodb-url-here`

**Razorpay Payment Keys**\
`KEY_ID=your-razorpay-key-id KEY_SECRET=your-razorpay-key-secret`

**App Configuration**\
`NEXT_PUBLIC_BASE_URL=http://localhost:3000`


> **Note:** Replace `your-mongodb-url-here`, `your-razorpay-key-id`, and `your-razorpay-key-secret` with your actual environment variables.

---

## 🛠️ **Installation and Setup**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/pitch-me-a-coin.gi
   ```
2. **Navigate to the Project Directory**

    ```bash
    cd pitch-me-a-coin
    ```
3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Set Up Environment Variables**\
    Create a .env file at the root of the project and configure it with the required values listed in the Environment Variables section.

5. **Run the Development Server**

    ```bash
    npm run dev
    ```

6. **View in the Browser**\
    Open your browser and go to:

    ```arduino
    http://localhost:3000
    ```



