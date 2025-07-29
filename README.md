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

## Lessons Learned
As with every project before, I came away learning far more than I originally anticipated. I not only grew more comfortable with new technologies and concepts, but I also reinforced my React skills through hands-on experience. 
While reading and learning are important for growth, hands-on practices are just as invaluable. Implementing SPAs using React Router and writing tests with Vitest and React Testing Library gave me the real-world experience to move beyond concepts to real, tangible knowledge. 

Projects like this mock shopping cart application help bring my abstract ideas to life. It was daunting seeing the complexities of the project's outlines and expectations, but through dividing and conquering and starting small anything is possible. Not only did this project boost my confidence, but it also deepened my understanding as to why React's core concepts were created the way they were. Components especially shone here and their reusability and decoupled logic made this project easy to follow along and build.

There were naturally many setbacks and obstacles while trying to complete this project but every problem and its triumph taught me more than easy and mundane code ever could. Of those setbacks and problems I would like to go through three notable lessons I've encountered and what I've learned from them. The first of which is the scoping of your projects.

### Scoping
As new concepts are learned and applied, it's inevitable that projects are going to get more and more complex. For a while, I was able to coast on the simplicity of the project and easily finish them without much effort or thinking. However, this project is a single page application with many different moving parts. In order to finish in a timely manner, I had to bust out a piece of paper and write out a plan for my structure, components, and designs. My website needed the right amount functionality and polish, or otherwise I'd stall for days stressing over small details that didn't really matter. Missing the forest for the trees could be a big obstacle for future projects, so being able to learn this early was a blessing in disguise.

### React Folder Structure
A hidden benefit of React components that popped out to me was how compatible it is with file organization. One of the most popular way to organize the file structure of a component is to group it's JSX, test, and styling together. It might seem obvious, but it makes your code more readable and maintainable. Components by nature are reusable and self-contained pieces of code. Every single piece of logic related to a component is defined in their own easy to find area, making updating and growing your project seamless. For projects that are growing in complexity, components play a big part in writing clean code. React components encourage maintainability and readability, it's what they were made for after all.

### Single Page Applications
One last lesson I would like to share would be React Router and single page applications (SPAs). Reading about SPAs online, it was always seemed a little mystical and out of reach. I knew how single page applications worked as opposed to server side rendering (SSR), but I never really got *how* to implement it into code. SSR came out of the box, but SPAs needed to be configured and installed. It felt like something hard to implement, but React Router made it intuitive and easy to understand. It's all JavaScript under the hood, but the simplistic and minimal setup of React Router helped me to focus on what's important: rendering as a single page application. React Router abstracted all of the mundane coding, and that left me to focus on how to route, show elements, and set up a SPA in general. Demystifying the enigmatic concept of SPAs helped me realize that I knew more than I originally thought, and it just simply takes a bit of experience writing with them to be comfortable using the new concepts!

### Conclusion
Every single new topic read is a step closer to becoming a better programmer. Every practice and repetition makes me a better programmer. As with every single skill in life, it's deliberate practice that makes us more skilled. Although this project took me a bit longer than I'd like, I never regretted a second I spent working on it. There's still a lot more to learn, but I'm ready to continue to learn and grow not just as a programmer but as a person too. Thanks for reading and I'll see ya.
