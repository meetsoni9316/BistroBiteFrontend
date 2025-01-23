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
  <title>Responsive Blog Layout</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <h1>My Blog</h1>
  </header>
  <div class="container">
    <main class="main-content">
      <h2>Welcome to My Blog</h2>
      <p>
        <img src="https://via.placeholder.com/150" alt="Post Thumbnail" class="thumbnail">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor turpis ut sapien dignissim, vel aliquam elit consequat. Integer eget augue id erat tincidunt aliquet. 
      </p>
      <p>More placeholder content for testing the layout.</p>
    </main>
    <aside class="sidebar">
      <div class="recent-posts">
        <h3>Recent Posts</h3>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
          <li>Post 4</li>
          <li>Post 5</li>
          <li>Post 6</li>
        </ul>
      </div>
    </aside>
  </div>
</body>
</html>
