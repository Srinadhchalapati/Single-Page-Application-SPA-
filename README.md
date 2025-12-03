# ShopSmart Advanced – SPA with External API Integration

ShopSmart Advanced is a **Single Page Application (SPA)** built with **React + Vite** that consumes the **FakeStore API** to display products, show detailed information, and provide advanced features like:

- Client-side routing
- Dark/Light theme toggle
- Favorites with localStorage
- Search, filter, and sort
- Reusable components
- Global state with Context API

This project is designed to demonstrate front-end skills: **SPA architecture, API integration, routing, state management, and clean UI/UX.**

---

## 🚀 Tech Stack

- **React** (with Hooks)
- **Vite** (build tool & dev server)
- **React Router DOM** – SPA routing
- **Fetch API** – HTTP requests
- **Context API + localStorage** – global state (favorites, theme)
- **Plain CSS** – responsive layout & theming

---

## 🌐 API Used

**FakeStore API** – https://fakestoreapi.com

Endpoints used:

- Get all products: `GET /products`
- Get product by ID: `GET /products/:id`
- Get categories: `GET /products/categories`

This API provides product data with fields like:
`id`, `title`, `price`, `description`, `category`, `image`, `rating`.

---

## 📁 Project Structure

```bash
shopsmart_spa_advanced/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ context/
   │  ├─ FavoritesContext.jsx
   │  └─ ThemeContext.jsx
   ├─ hooks/
   │  └─ useFetch.js
   ├─ components/
   │  ├─ Navbar.jsx
   │  ├─ Button.jsx
   │  ├─ Loader.jsx
   │  ├─ ErrorMessage.jsx
   │  ├─ ProductCard.jsx
   │  ├─ SearchBar.jsx
   │  └─ Select.jsx
   ├─ pages/
   │  ├─ Home.jsx
   │  ├─ ProductsList.jsx
   │  ├─ ProductDetail.jsx
   │  └─ FavoritesPage.jsx
   └─ styles/
      └─ global.css
