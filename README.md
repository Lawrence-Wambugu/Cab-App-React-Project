# Cab-App-React-Project
# Pick and Go - Cab Booking React App

An intuitive cab booking single-page application (SPA) built with React, json-server, and Tailwind CSS.

## 🚕 Overview
Pick and Go makes it easy for users to:
- View available cabs
- Book a cab
- Track booking status live

## 💻 Tech Stack
- React (create-react-app)
- json-server (mock backend API)
- Tailwind CSS (styling)

## 📂 Project Structure
```
pick-and-go/
├── public/
│   └── index.html
├── src/
│   │   ├── NavBar.js
│   │   ├── CabList.js
│   │   ├── CabBookingForm.js
│   │   ├── CabStatus.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── package.json
└── db.json
```

## 🧑‍🤝‍🧑 Team Roles
- **Lawrence Wambugu (Scrum Master):** Project coordination, reviews & deployment.
- **Laetitia Kamangu:** Developed CabList component and GET request logic.
- **Claire Kariuki:** Developed CabBookingForm component and POST logic.
- **Carren Shihemi:** Implemented CabStatus component for live booking updates.
- **Joel Nganga:** Created NavBar, Footer and assisted with layout and routing.

## 🧪 Setup & Installation
1. Clone the repository
```
git clone https://github.com/your-username/pick-and-go.git
```
2. Install dependencies
```
npm install
```
3. Run Tailwind in development
```
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
```
4. Start json-server for mock API
```
npx json-server --watch db.json --port 3000
```
5. Start the React development server
```
npm start
```

## 🎯 Features
- Browse available cabs
- Book cabs using the form
- Live booking status updates
- Fully responsive UI with Tailwind CSS

## 📝 License
MIT License.

---
Made with 💙 by Lawrence, Laetitia, Claire, Carren, and Joel.

