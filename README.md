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
</head>
<body style="margin: 0; font-family: Arial, sans-serif; line-height: 1.6; background: #f4f4f4;">

  <!-- Header -->
  <header style="position: sticky; top: 0; background: #333; color: white; padding: 15px 0; text-align: center; font-size: 1.5rem; z-index: 10; width: 100%;">
    <h1>My Blog</h1>
  </header>

  <!-- Container -->
  <div style="width: 90%; margin: 20px auto; overflow: hidden;">

    <!-- Main Content -->
    <main style="float: left; width: 70%; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color: #333; margin-bottom: 15px;">Welcome to My Blog</h2>
      <p style="margin-bottom: 20px;">
        <img src="https://via.placeholder.com/150" alt="Post Thumbnail" style="float: left; margin-right: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor turpis ut sapien dignissim, vel aliquam elit consequat. Integer eget augue id erat tincidunt aliquet. Praesent at urna metus. Aliquam erat volutpat. Nam ut purus ac nunc elementum vehicula nec id sapien.
      </p>
      <p style="margin-top: 20px; color: #555;">More placeholder content for testing the layout. This area can be filled with engaging blog posts, news, or other content!</p>
    </main>

    <!-- Sidebar -->
    <aside style="float: left; width: 30%; padding: 20px; background: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-left: 20px;">
      <div style="height: 400px; overflow: auto; padding: 10px; border: 1px solid #ddd; background: #f9f9f9; border-radius: 4px;">
        <h3 style="color: #333; margin-bottom: 10px; text-align: center;">Recent Posts</h3>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 1</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 2</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 3</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 4</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 5</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 6</li>
        </ul>
      </div>
    </aside>

  </div>

  <!-- Responsive Design -->
  <style>
    @media screen and (max-width: 768px) {
      main, aside {
        float: none;
        width: 100%;
        margin: 0 0 20px 0;
      }
      img {
        float: none;
        display: block;
        margin: 0 auto 20px;
      }
    }
  </style>

</body>
</html>




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Blog Layout</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif; line-height: 1.6; background: #f4f4f4;">

  <!-- Header -->
  <header style="position: sticky; top: 0; background: #333; color: white; padding: 15px 0; text-align: center; font-size: 1.5rem; z-index: 10; width: 100%;">
    <h1>My Blog</h1>
  </header>

  <!-- Container -->
  <div style="width: 90%; margin: 20px auto; overflow: hidden;">

    <!-- Main Content -->
    <main style="float: left; width: 70%; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color: #333; margin-bottom: 15px;">Welcome to My Blog</h2>
      <p style="margin-bottom: 20px;">
        <img src="https://via.placeholder.com/150" alt="Post Thumbnail" style="float: left; margin-right: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor turpis ut sapien dignissim, vel aliquam elit consequat. Integer eget augue id erat tincidunt aliquet. Praesent at urna metus. Aliquam erat volutpat. Nam ut purus ac nunc elementum vehicula nec id sapien.
      </p>
      <p style="margin-top: 20px; color: #555;">More placeholder content for testing the layout. This area can be filled with engaging blog posts, news, or other content!</p>
    </main>

    <!-- Sidebar -->
    <aside style="float: left; width: 30%; padding: 20px; background: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-left: 20px;">
      <div style="height: 400px; overflow: auto; padding: 10px; border: 1px solid #ddd; background: #f9f9f9; border-radius: 4px;">
        <h3 style="color: #333; margin-bottom: 10px; text-align: center;">Recent Posts</h3>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 1</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 2</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 3</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 4</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 5</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #555;">Post 6</li>
        </ul>
      </div>
    </aside>

  </div>

  <!-- Responsive Design -->
  <style>
    @media screen and (max-width: 768px) {
      main, aside {
        float: none;
        width: 100%;
        margin: 0 0 20px 0;
      }
      img {
        float: none;
        display: block;
        margin: 0 auto 20px;
      }
    }
  </style>

</body>
</html>

<footer style="background: #333; color: white; text-align: center; padding: 20px 10px; margin-top: 20px; font-size: 1rem;">
  <p style="margin: 0;">&copy; 2025 My Blog. All rights reserved.</p>
  <div style="margin-top: 10px;">
    <a href="#" style="color: #00bcd4; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
    <a href="#" style="color: #00bcd4; text-decoration: none; margin: 0 10px;">Terms of Use</a>
    <a href="#" style="color: #00bcd4; text-decoration: none; margin: 0 10px;">Contact Us</a>
  </div>
  <style>
    @media screen and (max-width: 768px) {
      footer {
        font-size: 0.9rem;
        padding: 15px 5px;
      }
      footer a {
        display: block;
        margin: 5px 0;
      }
    }
  </style>
</footer>

