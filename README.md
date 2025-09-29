<p align="center">
  <img src="Agro-Tech%20Company%20Logo%20Rustic%20and%20Unique.png" alt="Lovtiti Agro Mart Logo" width="200"/>
</p>

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Built with Node.js](https://img.shields.io/badge/Node.js-Built-informational)
![Blockchain: NEAR](https://img.shields.io/badge/Blockchain-NEAR-informational)
![Status: In Development](https://img.shields.io/badge/Status-In_Development-informational)

# 🌾 Lovtiti Agro Mart 

## 🔗 Live Demo
[Click here to preview Lovtiti Agro Mart](https://your-demo-link.com)

## ❗ Problem Statement
African farmers face post-harvest losses, limited market access, and unfair pricing due to middlemen. Lovtiti Agro Mart solves this by offering a decentralized platform that connects farmers directly to buyers using Hedera blockchain.


💔 Why This Matters

In many rural communities, farmers work tirelessly for months — planting, watering, and hoping. But when harvest time comes, they often face heartbreaking losses. Crops rot in the field because buyers never show up. Livestock is sold at unfair prices just to survive. Fishermen return with full nets but no market. Beekeepers watch their honey spoil without access to buyers.

These stories aren’t rare — they’re daily realities. Lovitti Agro Mart was born from this pain. It’s a platform built to restore hope, dignity, and income to the people who feed our continent.

## 🌍 Project Vision

** Lovitti Agro Mart was born from the heartbreak of harvests lost and hopes crushed. Across Africa, farmers, fisherfolk, beekeepers, and livestock keepers pour their lives into the land and sea — only to be met with unfair prices, spoiled goods, and no access to buyers. Lovitti is our answer.

It’s a decentralized marketplace where every producer — from cassava growers to catfish farmers — can connect directly with buyers, backed by blockchain and powered by Hedera. With HARAR guiding every transaction, we bring history, availability, reviews, authentication, and real-time updates into the hands of those who need it most.

Lovitti isn’t just a platform. It’s a movement to restore dignity, income, and control to the people who feed our continent.

👥 Team Members

- Mary Josephine Gatogoh – Team Lead & Project Strategist  
Visionary founder guiding the project from concept to execution, with a focus on impact and inclusion.

- Shia – UI/UX Designer  
Responsible for crafting intuitive and culturally resonant user interfaces that reflect the heart of African agriculture.

- Padmore Edusei – Frontend Developer  
Built the digital storefront using React.js, ensuring smooth user interaction and wallet integration.

- Carita – Backend Developer  
Architected the server-side logic and database integration for secure, scalable performance.

- Captain AI – Backend Developer  
Supported backend development with route structuring, authentication, and system stability.

- Gurpratap – Smart Contract Developer  
Engineered Hedera-powered smart contracts to enable secure, traceable, and trust-based transactions.

## 🚀 Features
- Farmer identity verification
- Produce traceability
- Secure payments via HBAR
- Token rewards for loyalty
- Mobile-first design for accessibility

## 📸 Screenshots

Screenshots are located in the `/screenshots` folder and include:

| Screen | Description |
|--------|-------------|
| 01_homepage.png | Landing page showcasing platform branding |
| 02_farm_registration.png | Farmer onboarding via USSD or web |
| 03_product_listing.png | Product listing interface |
| 04_buyer_dashboard.png | Buyer interaction and purchase flow |
| 05_smart_contract.png | Smart contract transaction confirmation |
| 06_backend_test.png | Backend route test via Postman |
| 07_ui_mockups.png | UI/UX design samples |
| 08_mobile_view.png | Mobile responsiveness |
| 09_team_page.png | Team member profiles |
| 10_repo_structure.png | GitHub repo layout and organization |

## ⚙️ How It Works
1. Farmers register via USSD or web.
2. They list products with location and quantity.
3. Buyers browse listings and place orders.
4. Smart contracts handle secure payments.
5. Farmers receive direct payouts — no middlemen.

## 🛠️ Tech Stack
- Hedera Hashgraph
- React Native (Frontend)
- Node.js + Express (Backend)
- Firebase (Authentication & Database)
- IPFS (Optional for image storage)

## 🧪 Testing Instructions
To test locally:
1. Clone the repo
2. Run `npm install`
3. Start frontend: `npm start`
4. Backend: `node server.js`
5. Use Postman to test `/api/products` and `/api/farmers`

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

💸 Role of HBAR in Lovitti Agro Mart

- Transaction Fees: Every blockchain interaction—whether storing data or executing smart contracts—is paid for using HBAR.
- Smart Contract Execution: HARAR logic is embedded in smart contracts that run on Hedera, powered by HBAR.
- Security & Speed: HBAR ensures fast, low-cost, and secure transactions—ideal for agricultural micro-payments.

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

## 🚀 Roadmap
- Add multilingual support for rural communities
- Integrate weather and crop advisory services
- Launch mobile app version
- Partner with local cooperatives and NGOs

## 📽️ Demo Video
Take a closer look at how Lovtiti Agro Mart is changing the game for African farmers. This short video captures the heart of our mission — connecting hardworking farmers directly to buyers, cutting out middlemen, and using blockchain to bring fairness and transparency to the agricultural market.

👉 Watch the Demo

Every frame reflects our commitment to empowering communities, reducing waste, and building a future where farmers thrive.

Watch the Lovtiti Agro Mart introduction on YouTube:  
👉 [Lovtiti Agro Mart– Empowering African Farmers with Blockchain 🌍🌾](https://youtube.com/shorts/C6lBP8DBQ6k?si=jNyXDb96iVu5fGAZ)


