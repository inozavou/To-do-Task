# Task Management Web App

### Live Demo

[View Deployed App](https://todo-task-webapp.netlify.app/)

---

## Overview

This is a React-based Task Management Web App that allows users to create, manage, pin, and remove tasks.
The project demonstrates modern React features such as [Context API], [useReducer], and component-based design. It is styled with CSS Modules and custom layouts for a clean and responsive UI.

---

## Features

- Add New Tasks – Create tasks with a title, description, priority, due date, and an icon.
- Remove Tasks – Delete tasks easily when no longer needed.
- Pin/Unpin Tasks – Keep important tasks in a dedicated pinned section.
- Task State Management – Powered by useReducer for predictable state updates.
- Context API – Provides global state management without prop drilling.
- CSS Modules – Ensures modular and scoped styling for maintainability.
- Due Dates & Priorities – Assign deadlines and levels of importance to tasks.
- Form Reset & Toggle – Clear and reopen the task creation form dynamically.

---

## Tools & Technologies

- React 18+ (components, hooks, context)
- Context API + useReducer for state management
- CSS Modules for component-level styling
- Google Fonts (Quicksand) for typography
- Netlify for deployment

---

## Project Structure

```
src
 ┣ components     # Reusable UI components (Title, TaskList, PinnedList)
 ┣ contexts       # Task context provider (useReducer + Context API)
 ┣ App.js         # Main app layout
 ┣ App.css        # Global styles (with CSS Modules approach)
```

---

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm start
   ```

4. Open in browser at `http://localhost:3000`

---

## Deployment

The app is deployed on Netlify and can be accessed here: [https://todo-task-webapp.netlify.app/](https://todo-task-webapp.netlify.app/)

---

## Learning Highlights

- How to manage global state with Context API + useReducer.
- How to use CSS Modules for scoped styling.
- Best practices in structuring React applications.
- Deployment process with Netlify.

---
