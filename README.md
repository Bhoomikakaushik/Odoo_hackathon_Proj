# 🚀 SkillBridge: Odoo Hackathon Project

## 📝 Overview
SkillBridge is a full-stack web application designed to connect users based on skills they offer and seek, with robust admin management and authentication. Built for a hackathon, this project demonstrates modern web development practices using Node.js, Express, MongoDB, React, and Vite. The platform is ideal for showcasing collaborative skills, backend/frontend architecture, and RESTful API design

---

## 📚 Table of Contents
- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [🏗️ Architecture](#architecture)
- [⚡ Setup & Installation](#setup--installation)
- [🔗 Backend API Endpoints](#backend-api-endpoints)
- [🎨 Frontend Structure](#frontend-structure)
- [📖 Usage Guide](#usage-guide)
- [🤝 Contributing](#contributing)
- [📝 License](#license)

---

## ✨ Features
- 🔒 **User Authentication:** Secure signup and login for admins and users.
- 🛡️ **Admin Management:** Add, remove, and ban admins; view admin skills.
- 🔍 **Skill Search:** Search for users by skills offered or wanted.
- 👤 **Profile Management:** Users can manage their profiles and skill sets.
- 📄 **Pagination:** Efficient browsing of user lists.
- 💎 **Modern UI:** Responsive, attractive interface built with React and Vite.
- 🌐 **RESTful API:** Well-structured endpoints for all major operations.
- 🏷️ **Role-Based Access:** Middleware for authentication and authorization.

---

## 🛠️ Tech Stack
- 🖥️ **Frontend:** React, Vite, CSS
- ⚙️ **Backend:** Node.js, Express
- 🗄️ **Database:** MongoDB (Mongoose ODM)
- 🔑 **Authentication:** bcryptjs
- 🧹 **Linting:** ESLint
- 🧩 **Other:** Modern JavaScript (ES6+), modular architecture

---

## 🏗️ Architecture
```
Odoo_hackathon_Proj/
├── oddo_backend/
│   ├── src/
│   │   ├── app.js                # Express app entry point
│   │   ├── controllers/         # Route logic (admin, user, skill search)
│   │   ├── middlewares/         # Auth middleware
│   │   ├── models/              # Mongoose models
│   │   └── routes/              # API route definitions
│   └── package.json             # Backend dependencies
├── oddo_front/
│   ├── src/
│   │   ├── components/          # React components (Homepage, Login, Navbar, SignUp)
│   │   ├── assets/              # Images and icons
│   │   ├── App.jsx              # Main React app
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── public/                  # Static assets
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.js           # Vite config
│   └── README.md                # Frontend readme
└── package.json                 # Root dependencies
```

---

## ⚡ Setup & Installation
### Prerequisites
- 🟢 Node.js (v16+ recommended)
- 📦 npm or yarn
- 🍃 MongoDB (local or cloud)

### 1️⃣ Clone the Repository
```powershell
git clone https://github.com/Rudraksha-007/Odoo_hackathon_Proj.git
cd Odoo_hackathon_Proj
```

### 2️⃣ Install Dependencies
#### 🛠️ Backend
```powershell
cd oddo_backend
npm install
```
#### 🎨 Frontend
```powershell
cd ../oddo_front
npm install
```

### 3️⃣ Configure Environment
- 📝 Create a `.env` file in `oddo_backend/` with your MongoDB URI and any secrets:
  ```env
  MONGODB_URI=mongodb://localhost:27017/skillbridge
  JWT_SECRET=your_jwt_secret
  PORT=5000
  ```

### 4️⃣ Run the Application
#### 🛠️ Start Backend
```powershell
cd oddo_backend
npm start
```
#### 🎨 Start Frontend
```powershell
cd ../oddo_front
npm run dev
```
- 🌐 Frontend runs on `http://localhost:5173` (default Vite port)
- 🛡️ Backend runs on `http://localhost:5000` (or as configured)

---

## 🔗 Backend API Endpoints
### 👑 Admin Endpoints
- `POST /api/admin/signup` — Register a new admin
- `POST /api/admin/login` — Admin login
- `DELETE /api/admin/remove` — Remove admin by email
- `PATCH /api/admin/ban` — Set admin ban status
- `GET /api/admin/skills` — View all admin skills

### 👤 User Endpoints
- `POST /api/user/signup` — Register a new user
- `POST /api/user/login` — User login
- `GET /api/user/profile` — Get user profile
- `PATCH /api/user/profile` — Update user profile

### 🔍 Skill Search
- `GET /api/skills/search?query=...` — Search users by skill

### 🛡️ Middleware
- `auth.js` — Protects routes, checks JWT tokens

---

## 🎨 Frontend Structure
- 🏠 **Homepage:** Skill search, user list, pagination
- 🔑 **Login/Signup:** Forms for authentication
- 🧭 **Navbar:** Navigation bar
- 👤 **Profile:** User profile management
- 📱 **Responsive Design:** Mobile-friendly layouts
- 🖼️ **Assets:** Custom images and icons for branding

---

## 📖 Usage Guide
1. 📝 **Sign Up:** Register as a user or admin.
2. 🔑 **Login:** Access your dashboard.
3. 🔍 **Search Skills:** Use the homepage to find users by skills.
4. 👤 **Profile Management:** Update your skills and profile info.
5. 👑 **Admin Actions:** (If admin) manage other admins, ban users, view skills.
6. 🚪 **Logout:** Securely end your session.

---

## 🤝 Contributing
We welcome contributions! For hackathon participants:
- 🍴 Fork the repo and create a feature branch.
- 🧩 Follow the modular structure for new features.
- 📝 Write clear commit messages.
- 📬 Submit a pull request with a detailed description.

---

## 📝 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🏅 Resume Highlights
- 🖥️ **Full-stack development:** Node.js, Express, React, MongoDB
- 🔗 **RESTful API design:** Secure, scalable endpoints
- 🔒 **Authentication & Authorization:** JWT, bcryptjs
- 🎨 **Modern UI:** Vite, React, CSS
- ⚡ **Hackathon-ready:** Fast setup, modular codebase
- 🤝 **Team collaboration:** Clear structure for multi-developer workflow

---

## 📬 Contact & Credits
- 👤 **Project Lead:** Rudraksha-007
- 🐙 **GitHub:** [Odoo_hackathon_Proj](https://github.com/Rudraksha-007/Odoo_hackathon_Proj)
- 🏆 **Hackathon Team:** dikshaWagh , 
Sahilkukreja30, Bhoomikakaushik

---

## 📸 Screenshots
Add screenshots of the UI, API responses, and architecture diagrams here for extra resume impact.

---

## ❓ FAQ
**Q: Can I use this project in my resume?**
A: ✅ Yes! This project demonstrates full-stack skills, API design, authentication, and modern UI development.

**Q: How do I deploy this project?**
A: 🚀 Use services like Heroku, Vercel, or Netlify for deployment. Update environment variables for production.

**Q: How do I add new features?**
A: 🧩 Follow the modular structure, add new controllers/routes/components as needed, and update documentation.

---

> 🌟 **Showcase this project in your resume to highlight your skills in full-stack development, RESTful APIs, authentication, and modern web UI!**
