# 🎨 Draw Project — Canvas Drawing Application

Draw Project is a browser-based drawing application built using **HTML, CSS, and Vanilla JavaScript**.  
It allows users to draw freely on a full-screen canvas, adjust brush size, choose colors, and clear the canvas instantly.

This project focuses on understanding the **HTML5 Canvas API**, mouse event handling, and building an interactive frontend experience without relying on any external libraries or frameworks.

---

## 🔗 Live Demo

🌐 Live Project:  
https://bhavanish-mantri.github.io/Draw-project/

---

## 📌 Project Motivation

The main goal of this project was to strengthen frontend fundamentals by working directly with the HTML5 `<canvas>` element.

The project helped in:
- Understanding how the canvas works internally  
- Converting real-time user input into visual output  
- Handling mouse interactions smoothly and efficiently  
- Building a clean and minimal user interface  
- Practicing structured and readable JavaScript code  

Rather than focusing on heavy UI design, the emphasis was placed on **core logic and canvas rendering**.

---

## ✨ Features

- Freehand drawing using mouse input  
- Full-screen responsive canvas  
- Adjustable brush size using increase and decrease controls  
- Color picker for choosing custom brush colors  
- Clear canvas button to reset the drawing area  
- Smooth stroke rendering using circles and connecting lines  
- Simple, minimal, and distraction-free interface  
- No external libraries or frameworks used  

---

## 🛠️ Technologies Used

- **HTML5** – Used for page structure and the canvas element  
- **CSS3** – Used for layout, styling, and responsiveness  
- **JavaScript (Vanilla)** – Used for drawing logic, event handling, and state management  

---

## 📂 Project Structure

```
Draw-project/
├── index.html
├── style.css
├── script.js
└── README.md
```
---

## ⚙️ How the Application Works

- The canvas dynamically resizes to fit the browser window  
- Mouse events detect when drawing starts (`mousedown`), continues (`mousemove`), and stops (`mouseup`)  
- Circles are drawn at the cursor position to ensure smooth strokes  
- Lines connect the previous and current cursor positions to avoid gaps  
- Brush size and color changes apply instantly while drawing  
- The clear button wipes the canvas without reloading the page  

This approach creates a natural and smooth drawing experience.

---

## 🧠 Key Concepts Covered

- HTML5 Canvas API  
- Mouse event handling in JavaScript  
- Coordinate tracking and stroke smoothing  
- Responsive canvas resizing  
- DOM manipulation  
- Separation of UI logic and drawing logic  

---

## 🚀 Future Enhancements

This project is intentionally kept simple but can be expanded further.  
Planned or possible future improvements include:

- Touch and stylus support for mobile devices  
- Undo and redo functionality  
- Saving drawings as PNG or JPEG files  
- Multiple brush styles (pen, marker, spray)  
- Brush opacity and transparency control  
- Keyboard shortcuts for tools  
- Dark mode user interface  
- Multi-layer drawing support  

---

## 📘 What I Learned

- How to work with the Canvas rendering context  
- Translating mouse movement into real-time visuals  
- Managing state in a JavaScript application  
- Writing clean and maintainable frontend code  
- Structuring small projects professionally  

---

## 🧪 Known Limitations

- Drawings are not saved after refreshing the page  
- Touch input is not supported in the current version  
- Undo/redo functionality is not implemented yet  

These limitations are intentional and planned to be addressed in future updates.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.  
Feel free to fork this repository and submit a pull request if you’d like to enhance the project.

---

## 📄 License

This project is **free to use, modify, and distribute** for both personal and commercial purposes.
