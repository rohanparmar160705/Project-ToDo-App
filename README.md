# Project-ToDo-App

## 📌 Overview
**Project-ToDo-App** is a simple and interactive **React.js** application that helps users track their project tasks. It categorizes tasks into three sections:
- **To Do** 📝
- **Doing** 🚀
- **Done** ✅

Tasks are stored in **localStorage**, ensuring persistence even after page reloads.

---

## 🚀 Features
- 📌 **Add tasks** with relevant details.
- 🔄 **Update task status** by moving between "To Do", "Doing", and "Done".
- ❌ **Delete tasks** when no longer needed.
- 🔄 **Data Persistence** using `localStorage`.

---

## 🛠️ Technologies Used
- **React.js** ⚛️
- **CSS** 🎨
- **Local Storage** 🗄️

---

## 📂 Folder Structure
```
Project-ToDo-App/
│── src/
│   ├── components/        # Contains all React components
│   ├── App.jsx            # Main Application file
│   ├── App.css            # Styling for App
│   ├── Header.jsx         # Header Component
│   ├── Header.css         # Styling for Header
│   ├── Tag.jsx            # Tag Component
│   ├── Tag.css            # Styling for Tag
│   ├── TaskCard.jsx       # Task Card Component
│   ├── TaskCard.css       # Styling for TaskCard
│   ├── TaskColumn.jsx     # Task Column Component
│   ├── TaskColumn.css     # Styling for TaskColumn
│   ├── TaskForm.jsx       # Task Form Component
│   ├── TaskForm.css       # Styling for TaskForm
│   ├── index.css          # Global styles
│   ├── main.jsx           # Entry point of the application
│── public/
│── README.md
│── package.json
```

---

## 📦 Installation & Usage
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/rohanparmar160705/Project-ToDo-App.git
cd Project-ToDo-App
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the App
```sh
npm start
```
> The app will open at `http://localhost:3000/`

---

## 🔧 Future Improvements
- ✨ Drag & Drop support for task management.
- 🎨 Dark mode for better UI experience.
- 📅 Due date & priority levels for tasks.

---

## 📜 License
This project is **MIT Licensed**.

---

## 🙌 Contribution
Feel free to **fork** this repo, make changes, and submit a **pull request**. 🚀

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

