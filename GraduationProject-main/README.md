# Tech Store

A modern and responsive e-commerce web application built with React.js.

The project provides a complete shopping experience where users can browse products, view product details, add products to their cart, manage quantities, and log in using a simple LocalStorage-based authentication system.

---

## About The Project

Tech Store is a Single Page Application (SPA) developed using React.

The main goal of this project is to practice and demonstrate important React concepts and modern frontend development techniques.

The application consumes product data from the DummyJSON API and provides users with an interactive shopping experience.

---

## Features

### Home Page

The home page contains:

- Responsive navigation bar
- Hero section
- Product categories
- Featured products
- Call-to-action sections
- Contact section
- Responsive design

### Products

Users can:

- View available products
- Browse products in a responsive grid
- See product images
- See product names
- See prices
- View product ratings
- Open individual product details
- Add products to the cart

### Product Details

Each product has its own details page.

The page displays:

- Product image
- Product title
- Product description
- Product price
- Product category
- Product rating
- Product stock
- Brand
- Add to cart functionality

### Shopping Cart

The cart allows users to:

- Add products
- Remove products
- Increase product quantity
- Decrease product quantity
- View total product quantity
- Calculate the total price
- Store cart data in LocalStorage

Cart data remains available after refreshing the page.

### Login System

The project includes a simple authentication system using LocalStorage.

Users can:

- Log in
- Store user information locally
- Stay logged in while navigating the application
- Log out

This authentication system is intended for learning purposes and is not a secure production authentication system.

### Navigation

The application uses React Router DOM for navigation.

Main routes include:

```text
/
├── Home
├── Products
├── Product Details
├── Categories
├── Cart
├── Contact
└── Login
```

Navigation happens without reloading the entire page because the application is a Single Page Application.

---

## UI and UX

The project focuses on providing a clean, modern, and responsive user experience.

Design features include:

- Responsive layout
- Mobile-friendly navigation
- Fixed navbar
- Product cards
- Clear buttons and actions
- Consistent spacing
- Modern typography
- Hover effects
- Responsive grids
- Clear visual hierarchy

The primary project color is:

```text
#874dc3
```

---

## Responsive Design

The application is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

Tailwind CSS responsive utilities are used to adapt the layout to different screen sizes.

---

## Technologies Used

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3

### Styling

- Tailwind CSS

### Routing

- React Router DOM

### API

- DummyJSON

### Browser Storage

- LocalStorage

### Development Tools

- Vite
- npm
- Git
- GitHub

---

## API

The project uses DummyJSON to retrieve product information.

API base URL:

```text
https://dummyjson.com
```

### Get All Products

```text
GET /products
```

Example:

```text
https://dummyjson.com/products
```

This endpoint is used to retrieve the available products.

### Get Single Product

```text
GET /products/{id}
```

Example:

```text
https://dummyjson.com/products/1
```

This endpoint is used to retrieve information about a specific product.

### Get All Categories

```text
GET /products/categories
```

Example:

```text
https://dummyjson.com/products/categories
```

This endpoint is used to retrieve the available product categories.

### Get Products By Category

```text
GET /products/category/{category}
```

Example:

```text
https://dummyjson.com/products/category/smartphones
```

This endpoint is used to retrieve products from a specific category.

### Search Products

```text
GET /products/search?q={query}
```

Example:

```text
https://dummyjson.com/products/search?q=phone
```

This endpoint can be used to search for products.

### Product Pagination

DummyJSON supports pagination using query parameters.

Example:

```text
GET /products?limit=10&skip=10
```

This can be used to implement pagination or a load-more feature.

---

## Project Structure

The project follows a component-based React structure.

```text
src/
│
├── assets/
│   └── images/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Categories.jsx
│   ├── Cart.jsx
│   ├── Contact.jsx
│   └── Login.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

The exact structure may change as the project develops.

---

## React Concepts Used

### Components

The application is divided into reusable React components.

Example:

```jsx
export default function Navbar() {
  return <nav>...</nav>;
}
```

### Props

Props are used to pass data from parent components to child components.

Example:

```jsx
<ProductCard product={product} />
```

### useState

`useState` is used to manage dynamic data such as:

- Products
- Cart
- Login state
- Form inputs
- UI state

Example:

```jsx
const [products, setProducts] = useState([]);
```

### useEffect

`useEffect` is used for operations such as:

- Fetching API data
- Reading LocalStorage
- Updating data when dependencies change

Example:

```jsx
useEffect(() => {
  fetchProducts();
}, []);
```

### React Router

React Router DOM is used to create different pages and navigate between them without refreshing the browser.

Example:

```jsx
<Link to="/products">Products</Link>
```

### Array Methods

The project uses JavaScript array methods such as:

```javascript
map();
filter();
reduce();
find();
```

For example, calculating the cart total:

```javascript
const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
```

---

## LocalStorage

LocalStorage is used to persist data in the browser.

The project uses LocalStorage for:

```text
cart
user
login state
```

Example:

```javascript
localStorage.setItem("cart", JSON.stringify(cart));
```

Reading data:

```javascript
const cart = JSON.parse(localStorage.getItem("cart")) || [];
```

---

## Application Flow

The general application flow is:

```text
User
  |
  v
React Application
  |
  +-- Navbar
  |
  +-- Home
  |
  +-- Products
  |     |
  |     v
  |   DummyJSON API
  |
  +-- Product Details
  |
  +-- Cart
  |     |
  |     v
  |   LocalStorage
  |
  +-- Categories
  |
  +-- Contact
  |
  +-- Login
        |
        v
     LocalStorage
```

---

## Cart Flow

When a user adds a product:

```text
Product
   |
   v
Add To Cart
   |
   v
Check Existing Cart
   |
   +-- Product exists
   |      |
   |      v
   |   Increase quantity
   |
   +-- Product does not exist
          |
          v
       Add product
          |
          v
      LocalStorage
```

---

## Authentication Flow

The current authentication system is designed for educational purposes.

```text
Login Page
    |
    v
Enter Credentials
    |
    v
Validate User
    |
    v
Store User Data
    |
    v
LocalStorage
    |
    v
User Logged In
```

Logout:

```text
Logout
  |
  v
Remove User Data
  |
  v
LocalStorage
  |
  v
User Logged Out
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tech-store.git
```

### 2. Navigate to the Project

```bash
cd tech-store
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build For Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Environment Variables

Currently, the project does not require private API keys.

If environment variables are added in the future, create:

```text
.env
```

Example:

```env
VITE_API_URL=https://dummyjson.com
```

Then access it in React using:

```javascript
import.meta.env.VITE_API_URL;
```

---

## Testing

The project can be manually tested by checking the following functionality.

### Authentication

- Login with valid information
- Login with invalid information
- Logout
- Refresh the page while logged in

### Products

- Load products
- Open product details
- Navigate between products
- Check product information
- Browse product categories
- Search for products

### Cart

- Add a product
- Add the same product multiple times
- Increase quantity
- Decrease quantity
- Remove a product
- Check total price
- Refresh the page and verify cart persistence

### Responsive Design

Test the application on:

- Mobile
- Tablet
- Laptop
- Desktop

---

## Known Limitations

This project is primarily educational, so there are some limitations.

### Authentication

The login system uses LocalStorage and is not suitable for real-world secure authentication.

### API

DummyJSON is a demo API, so product data is provided for development and learning purposes.

### Backend

There is currently no custom backend or database.

The project is primarily frontend-focused.

---

## Future Improvements

Possible future improvements include:

- Real authentication system
- Backend API
- Database integration
- User registration
- User profile
- Product search
- Product filtering
- Product sorting
- Wishlist
- Checkout page
- Payment integration
- Order history
- Dark mode
- Loading skeletons
- Better error handling
- Toast notifications
- Form validation
- Protected routes
- Admin dashboard
- Product management
- Pagination
- Infinite scrolling

---

## Learning Objectives

This project was created to practice building a real-world React application.

The main learning objectives are:

1. Understand React component architecture.
2. Work with React state.
3. Use `useState`.
4. Use `useEffect`.
5. Understand component lifecycle.
6. Pass data using props.
7. Work with API requests.
8. Build SPA navigation.
9. Use React Router DOM.
10. Store data using LocalStorage.
11. Build reusable components.
12. Create responsive layouts.
13. Work with Tailwind CSS.
14. Practice JavaScript array methods.
15. Build a complete frontend project.

---

## Author

Mostafa Ahmed Farouk

---

## License

This project was created for educational and learning purposes.

You are free to use the code for learning, experimentation, and personal projects.

---

## Acknowledgements

- React.js
- React Router DOM
- Tailwind CSS
- DummyJSON
- Vite

---

## Project Status

```text
Development
```

The project is currently under development and new features may be added over time.
