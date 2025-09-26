![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Built with Node.js](https://img.shields.io/badge/Node.js-Built-informational)
![Blockchain: NEAR](https://img.shields.io/badge/Blockchain-NEAR-informational)
![Status: In Development](https://img.shields.io/badge/Status-In_Development-informational)

# 🌾 Lovtiti Agro Mart 

**Lovtiti Agro Mart** is a decentralized marketplace connecting African farmers—crop growers, livestock keepers, aquaculture experts—with buyers using Hedera blockchain. Our mission is to eliminate middlemen, ensure fair pricing, and build trust through traceable transactions.

## 🚀 Features
- Farmer identity verification
- Produce traceability
- Secure payments via HBAR
- Token rewards for loyalty
- Mobile-first design for accessibility

## 🛠️ Tech Stack
- Hedera Hashgraph
- React Native (Frontend)
- Node.js + Express (Backend)
- Firebase (Authentication & Database)
- IPFS (Optional for image storage)

## 📦 Getting Started

To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/mgat/Lovitti-Agro-Mart.git

# Navigate into the project directory
cd Lovitti-Agro-Mart

## 🗺 Architecture Overview
### 🔹 Frontend
- Built with **React.js**
- Handles user interactions, product browsing, and marketplace UI
- Communicates with backend APIs and smart contracts via Web3.js

### 🔹 Backend
- Built with **Node.js** and **Express**
- Manages business logic, user authentication, and API endpoints
- Interfaces with MongoDB and blockchain smart contracts

### 🔹 Blockchain Layer
- Powered by **NEAR Protocol** or **Hashgraph**
- Handles secure transactions, smart contracts, and decentralized identity
- Ensures transparency and trust between buyers and sellers

### 🔹 Database
- Uses **MongoDB**
- Stores user profiles, product listings, transaction logs, and reviews

## 🗂 Folder Structure Overview

Lovitti-Agro-Mart/
├── frontend/               # React.js frontend application
│   ├── public/             # Static assets
│   └── src/                # React components, pages, and styles
│       ├── components/     # Reusable UI components
│       ├── pages/          # Route-based pages
│       └── assets/         # Images, icons, etc.

├── backend/                # Node.js + Express backend
│   ├── controllers/        # Business logic for API endpoints
│   ├── models/             # Mongoose schemas for MongoDB
│   ├── routes/             # Express route handlers
│   ├── middleware/         # Auth and validation middleware
│   └── server.js           # Entry point for backend server

├── contracts/              # Solidity smart contracts
│   ├── LovittiToken.sol    # Custom token contract
│   └── Marketplace.sol     # Core marketplace logic

├── config/                 # Environment and deployment configs
│   └── .env                # Environment variables

├── scripts/                # Deployment and utility scripts
│   └── deploy.js           # Hardhat deployment script

├── README.md               # Project documentation
├── package.json            # Project metadata and dependencies
└── LICENSE                 # MIT License

## 🔐 How HARAR & HBAR Work Together in a Transaction
Imagine a buyer named Amina wants to purchase tomatoes from a farmer named Kofi. Here’s how Lovitti Agro Mart uses HARAR and HBAR to make that transaction seamless and trustworthy:

---

🅷 History of Product (HARAR)
- Amina views the entire lifecycle of the tomatoes: harvest date, handling process, and previous transactions.
- This history is stored immutably on the Hedera Hashgraph using HBAR to anchor the data.

🅰 Availability of Product (HARAR)
- Real-time inventory shows how many crates are available.
- Updates are written to the blockchain using HBAR microtransactions, ensuring accuracy and transparency.

🆁 Reviews and Ratings (HARAR)
- Amina checks feedback from other buyers.
- Each review is timestamped and stored on-chain, secured by HBAR to prevent tampering.

🅰 Authentication of Product (HARAR)
- Kofi’s tomatoes carry a digital certificate verified by Lovitti’s smart contract.
- The certificate is validated using HBAR-powered smart contract calls, confirming origin and legitimacy.

🆁 Real-Time Updates (HARAR)
- Amina receives live updates: payment confirmation, dispatch time, and delivery tracking.
- Each update is logged on the Hedera network using HBAR, creating a transparent audit trail.

---

💸 Role of HBAR in Lovitti Agro Mart

- Transaction Fees: Every blockchain interaction—whether storing data or executing smart contracts—is paid for using HBAR.
- Smart Contract Execution: HARAR logic is embedded in smart contracts that run on Hedera, powered by HBAR.
- Security & Speed: HBAR ensures fast, low-cost, and secure transactions—ideal for agricultural micro-payments.

---

🌍 Why This Matters

By combining HARAR’s transparency with HBAR’s blockchain power, Lovitti Agro Mart creates a marketplace where:
- Farmers are trusted
- Buyers are informed
- Every transaction is secure, traceable, and fair

# Install dependencies
npm install

# Start the development server
npm run dev

## 📍 Target Users
- Smallholder farmers across Africa
- Restaurants, retailers, and households
- NGOs and cooperatives

## 🎯 Goals
- Empower farmers with digital tools
- Reduce food waste and fraud
- Promote fair trade and transparency

## 📽️ Demo Video
[Watch on YouTube](## 📽️ Demo Video

Watch the Lovtiti Agro Mart introduction on YouTube:  
👉 [Lovtiti Agro Mart– Empowering African Farmers with Blockchain 🌍🌾](https://youtube.com/shorts/C6lBP8DBQ6k?si=jNyXDb96iVu5fGAZ)

## 🤝 Join Us
We’re looking for developers, designers, and agricultural experts to help build this vision. Let’s collaborate!
