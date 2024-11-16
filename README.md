# Calculator App

Welcome to **Calculator App**, a simple yet elegant web-based calculator that performs basic arithmetic operations with a touch of style and functionality! This project combines HTML, CSS, and JavaScript to deliver an intuitive and responsive user experience.

---

## Features

- **Interactive User Interface**
    
    Sleek and minimalist design for seamless calculations.
    
- **Keyboard Support**
    
    Control the calculator using your keyboard for faster input.
    
- **Basic Operations**
    
    Perform addition, subtraction, multiplication, division, and percentage calculations.
    
- **Clear and Delete Functions**
    
    Easily reset the screen or delete the last entry.
    
- **Responsive Design**
    
    Looks great on devices of all sizes.
    

---

## Project Structure

- **HTML (`index.html`)**: The foundation of the calculator, defining the structure and layout.
- **CSS (`style.css`)**: Handles the styling, giving the calculator its polished look.
- **JavaScript (`script.js`)**: The brain behind the calculator, implementing functionality.

---

## How It Works

### HTML Structure

The HTML defines three key areas:

1. **Screen**: Displays the entered numbers and results.
2. **Controls**: Contains buttons for numbers, operations, and special functions.
3. **Footer**: Includes copyright information and a GitHub link.

### CSS Styling

The CSS (linked externally) ensures the interface is visually appealing, responsive, and consistent across devices.

### JavaScript Functionality

The JavaScript file (`script.js`) brings life to the calculator with:

1. **Dynamic Button Generation**
    
    Buttons are created dynamically based on predefined values for flexibility.
    
2. **Operation Handling**
    
    Functions like `add`, `subtract`, `multiply`, and `divide` compute results, while `operate` coordinates these operations based on user input.
    
3. **Input Validation**
    
    Logic prevents invalid input, such as multiple operators in a row or division by zero.
    
4. **Keyboard Interaction**
    
    Keypress events replicate button clicks, enabling smooth keyboard-based usage.
    

---

## Getting Started

### Prerequisites

To run this project, you'll need:

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript (optional, for customization)

### Running Locally

1. **Clone the Repository**
    
    ```bash
    git clone https://github.com/thegranduke/calculator-app.git
    ```
    

  **Navigate to the Project Folder**

```bash
cd calculator-app
```

  **Open in a Browser**Double-click `index.html` or open it in your favorite browser.

---

## 🎮 Usage

1. **Enter Numbers**
    
    Click on the number buttons or type them using your keyboard.
    
2. **Select an Operation**
    
    Click or type an operator (`+`, `-`, `*`, `÷`, `%`).
    
3. **See Results**
    
    Press `=` to compute the result, or use `%` for percentage calculations.
    
4. **Clear or Delete**
    - Press **Clear** to reset the calculator.
    - Press **Delete** to remove the last character.
5. **Keyboard Shortcuts**
    - Numbers: Type directly.
    - Operators: Use keys like `+`, ``, ``, `/`.
    - `Backspace`: Deletes the last character.
    - `Delete`: Clears the entire screen.

---

## Advanced Features

- **Decimal Support**
    
    Handles decimal inputs and displays precise results.
    
- **Overflow Prevention**
    
    Limits input length to maintain screen readability.
    
- **Error Messages**
    
    Displays "lmao" for division by zero—because we all need a little humor in life!
