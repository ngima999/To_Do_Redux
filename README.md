# TO-DO-Redux

## Overview

This is a simple To-Do List application built with React and Redux. It allows users to add, delete, and fetch tasks asynchronously using Redux for state management. The project demonstrates key concepts such as Redux reducers, actions, middleware (Redux Thunk), and Redux DevTools integration.

## Features

- **Add Task:** Users can add tasks to the list.
- **Delete Task:** Users can remove a task from the list.
- **Fetch Tasks:** Tasks can be fetched from an API (JSONPlaceholder).
- **Redux State Management:** Uses Redux to manage the application state.
- **Middleware Integration:** Implements Redux Thunk for handling asynchronous actions.
- **Redux DevTools Support:** Enables debugging with Redux DevTools.

## Technologies Used

- **React** (Functional Components, Hooks)
- **Redux** (State Management)
- **Redux Thunk** (Middleware for Async Actions)
- **Tailwind CSS** (Styling)
- **FontAwesome & React Icons** (UI Enhancements)

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/ngima999/TO-DO-Redux.git
   ```

2. **Navigate to the project directory**
   ```sh
   cd TO-DO-Redux
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   npm start
   ```

The app will be available at **http://localhost:3000/**.

## Project Structure

```
TO-DO-Redux/
│── src/
│   ├── Components/
│   │   ├── Todo.jsx  # Main To-Do Component
│   ├── store.jsx  # Redux Store, Reducer, Actions
│   ├── App.jsx  # Root Component
│   ├── index.js  # Entry Point
│── public/
│── package.json
│── README.md
```

## Usage

### Adding a Task:
- Enter a task in the input field.
- Click the "Add Task" button to add it to the list.

### Deleting a Task:
- Click the trash icon next to a task to remove it from the list.

### Fetching Tasks from API:
- Click the "Fetch Tasks" button to load tasks from the API.

## Redux Implementation

- **Actions:** Defined in `store.jsx` (ADD_TASK, DELETE_TASK, FETCH_TASK).
- **Reducer:** Manages state changes based on actions.
- **Store:** Configured with Redux Thunk and DevTools.
- **Selectors & Dispatch:** Used in `Todo.jsx` to interact with the Redux store.

## API Integration

- Uses `https://jsonplaceholder.typicode.com/todos?_limit=3` to fetch sample tasks.
- Asynchronous requests handled using Redux Thunk.
