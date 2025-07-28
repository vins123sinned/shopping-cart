# Shopping Cart

A responsive mock shopping cart application built with React, featuring routing via React Router, unit testing with Vitest, and other modern development tools. This is a classic single page application (SPA) React project that not only focuses on the core concepts but also how to link and route to other pages while staying on the same website.

React Router is the backbone of this project, handling not only the routing but also passing of context, displaying the correct elements, and handling bad urls among other stuff. As for the project itself, it was created through dividing and conquerering of components back into the finished site you see today. Each component is also organized into their own folder with the .jsx file itself and the .test.jsx and .module.css file alongside them (if applicable). All in all, this shopping cart is built from simple foundational React concepts which then sprouts into a full fledge website when put back together.

Built with React, React Router, and Vite. Tested with Vitest with React Testing Library. Styled with CSS Modules.

<img width="1920" height="875" alt="Desktop homepage image" src="https://github.com/user-attachments/assets/dc8cadf6-2251-4a0d-907e-112decb87e53" />

<p align="center">
  <a href="https://soft-parfait-65d3f1.netlify.app/">
    View live site
  </a>
</p>

## Installation Instructions
- Clone the repository to your local computer:

```bash
git clone git@github.com:your-username/shopping-cart.git
```
- Navigate into the directory

```bash
cd shopping-cart
```

- Install all dependencies

```bash
npm install
```

- Start the development server

```bash
npm run dev
```

- Now visit [http://localhost:5173](http://localhost:5173) in your browser and you're all set! Enjoy!

To test the code, simply run

```bash
npm test
```

or 

```bash
npm test src/components/Component/component.test.jsx
```

Simply replace the component with the specific file you're trying to test!

## Features
<p align="center">
  <img width="664" height="878" alt="Tablet homepage image" src="https://github.com/user-attachments/assets/c4591207-012f-4136-8d26-a07d7a084a8b" />
</p>
<p align="center">
  Tablet design
</p>

- Responsive design for mobile, tablet, and desktop screens
- SPA routes to different sections of the site, all while you never really leave the page itself!
- Fully fledged homepage, products page, and cart page
- Sleek website design rivaling that of real designer sites
- Custom error page for bad urls
- Personal polishes and styling when hovering over interactable elements
- Real time updating of cart items (can be seen on Navbar)
- Simple checkout functionality whenever you're ready to buy
- And all the important functionalities you ever need for a shopping cart site

## To-Do List
This is a list of new features or polishes that I might add when I come back to this project in the future

- Animations on first page load
- Subtle yet important polishes such as little effects when clicking an interactable element

## Technologies Used
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vite.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
