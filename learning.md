# React Bundlers – Notes

## What is a Bundler?
A **bundler** is a tool that takes multiple files (JavaScript, CSS, images, etc.) and bundles them into optimized files that browsers can understand.

---

## Types of Bundlers
There are multiple types of bundlers available:

- **Webpack**
- **Parcel**
- **Vite**

---

## npm and Yarn
- **npm** does **NOT** stand for *Node Package Manager*.
  - It is just called **npm**.
- We can also use **Yarn** instead of npm as a package manager.
- Bundlers like **Parcel** or **Vite** work with both npm and Yarn.

---

## React and Bundlers
- React **by default uses Webpack** (especially with Create React App).
- In this project, we are using **Parcel** as the bundler instead of Webpack.

---

## What Does Parcel Do?
Parcel provides many features out of the box:

### 1. HMR (Hot Module Replacement)
- Automatically updates the application when code is saved.
- No need to manually refresh the browser.

### 2. File Watcher Algorithm
- Watches for file changes in the project.
- Triggers rebuilds instantly.

### 3. Bundling
- Combines JavaScript, CSS, and assets into optimized bundles.

### 4. Minification
- Removes unnecessary spaces and characters.
- Reduces file size for faster loading.

### 5. Code Cleaning
- Removes unused code (tree shaking).
- Optimizes the final output.

### 6. Development and Production Builds
- Separate algorithms for:
  - **Development** (fast, readable)
  - **Production** (optimized, minified)

### 7. Super Fast Build Algorithm
- Uses caching and parallel processing.
- Much faster than traditional bundlers.

### 8. Image Optimization
- Automatically optimizes images.
- Reduces image size without losing quality.

### 9. Caching During Development
- Reuses unchanged modules.
- Improves rebuild speed.

### 10. Compression
- Compresses files for better performance.

### 11. Browser Compatibility
- Makes code compatible with older browsers automatically.

---

## Additional Features
- Supports **HTTPS** in development mode.
- Automatically assigns a **port number** for the development server.

---

## Summary
Parcel is a **zero-configuration, fast, and powerful bundler** that improves development speed and optimizes production builds efficiently.


## Commands :-

1. npm init
2. npm install react 
3. npm install react-dom
4. npm install parcel / npm install -D  parcel
5. npx parcel index.html/ npx parcel build index.html