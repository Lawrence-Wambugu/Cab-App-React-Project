# 🚖 Pick and Go

**Pick and Go** is a single-page React application that allows users to book cab rides from a list of available cabs. The app features a dynamic UI, component-based architecture, and a mock REST API powered by JSON Server. Developed as a collaborative group project at Moringa School.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (with Create React App), Tailwind CSS
- **Backend:** JSON Server (mock REST API)
- **Deployment:** Netlify (frontend), Render (backend)
- **Version Control:** GitHub

---

## 📁 Project Structure

pick-and-go/ ├── public/ │ └── index.html ├── src/ │ ├── components/ │ │ ├── Navbar.js │ │ ├── Home.js │ │ ├── MapView.js │ │ ├── AddCabForm.js │ │ ├── RidePage.js │ │ └── Footer.js │ ├── App.js │ ├── index.js │ └── App.css ├── db.json # JSON Server database ├── tailwind.config.js ├── package.json └── README.md

yaml
Copy
Edit

---

## 👥 Team & Component Contributions

| Team Member         | Role           | Contributions                                                                 |
|---------------------|----------------|-------------------------------------------------------------------------------|
| **Lawrence Wambugu**| Scrum Master   | Project setup, `MapView.js`, `RidePage.js`, API integration, Deployment       |
| **Claire Kariuki**  | Developer      | Designed `AddCabForm.js`, worked on form handling and POST request logic      |
| **Joel Nganga**     | Developer      | Created `Navbar.js`, helped with app routing and styling                      |
| **Laetitia Kamangu**| Developer      | Developed `Home.js`, added hero section, assisted with responsive layout      |
| **Carren Shihemi**  | Developer      | Implemented `Footer.js`, contributed to `RidePage.js`, and mobile responsiveness |

---

## 🚗 Key Features

- 🔍 **View Available Cabs**: Users can view cabs in a map-style layout with real-time availability
- 🛎️ **Book a Ride**: Click-to-book functionality for available cabs only
- ➕ **Add New Cab**: Form for adding cabs to the system (admin feature)
- 🌗 **Hover UI Effects**: Enhances interactivity with visual feedback
- 📱 **Responsive Design**: Works across desktop and mobile screens

---

## 🧑‍💻 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pick-and-go.git
   cd pick-and-go
Install dependencies

bash
Copy
Edit
npm install
Run the frontend

bash
Copy
Edit
npm start
Run the backend with JSON Server

bash
Copy
Edit
npx json-server --watch db.json --port 4000
🌐 Deployment
Frontend on Netlify: https://react-cab-app.netlify.app/

Backend Options: Deploy on Render, Cyclic, or run locally

📬 Contact
Email: wambugulawrence@gmail.com

Phone: +254 727 277 127

📄 License
This project is licensed under the MIT License – feel free to use, modify, and distribute as needed.

🙌 Acknowledgements
Thanks to Moringa School and our instructors for guidance and support throughout the development of this project.
