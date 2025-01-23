# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Right-to-Left</title>
  <style>
    /* Flex Container Styling */
    .flex-container {
      display: flex;
      flex-direction: row-reverse; /* Align items from right to left */
      justify-content: flex-start; /* Ensure items stay aligned to the right */
      gap: 10px; /* Space between items */
      padding: 20px;
      background: #f4f4f4;
      border: 2px solid #ccc;
      border-radius: 8px;
    }

    /* Flex Items Styling */
    .flex-item {
      background: #00bcd4;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      font-size: 1.2rem;
      flex: 1; /* All items take equal width */
    }

    /* Responsive Design */
    @media screen and (max-width: 768px) {
      .flex-container {
        flex-direction: column-reverse; /* Stack items vertically from bottom to top */
      }
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>
