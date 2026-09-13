## About the project.....

# 🧱 Dev Stack Builder

## 📌 About the Project

Dev Stack Builder is a web application where users can explore different technologies used in modern software development and build their own technology stack.

Users can view technology details such as category, difficulty level, rating, and description. They can also add technologies to their personal stack and remove them whenever they want.

The website is designed to be simple, clean, responsive, and easy to use.

---

## 🌐 About This Website

Dev Stack Builder is basically a website where developers or learners can explore different development technologies and create a custom stack for their projects.

For example, a user can select React for frontend, Node.js for backend, PostgreSQL for database, and other tools to create their own development stack.

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JavaScript (ES6+)
- JSON
- Vite

---

## ✨ Features

### 1. Explore Technologies

Users can explore different technologies with useful information such as:

- Technology name
- Category
- Description
- Difficulty
- Rating
- Technology icon
- Badge

### 2. 🧰 Build Your Own Stack

Users can add technologies to the **Your Stack** section and create their own development stack.

### 3. Interactive Notifications

The website uses React-Toastify to show notifications when users:

- Add a technology
- Try to add a duplicate technology
- Remove a technology
- Remove all technologies

---

## 📱 Responsive Design

The website is responsive and works across:

- Mobile devices
- Tablets
- Desktop screens

---

Question ans---------------------

1.What is JSX, and why is it used in React?
JSX is HTML-like code used in React to create UI easily.

2.What is the difference between props and state?
Props are data passed to a component. State is data managed inside a component.

3.What does the useState hook do, and where did you use it in this project?
useState stores changeable data. I used it to manage the selected technology stack.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after a component loads. I used it to load data from the JSON file.

5. Why does every item in a .map() list need a unique key prop?
   It helps React identify each item and update the list correctly.

6.What is conditional rendering?
Conditional rendering means showing something based on a condition.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data through props. A child sends data back using a function passed through props.
