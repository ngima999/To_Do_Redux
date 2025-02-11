// Import necessary Redux functions and middleware
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; // Enables Redux DevTools for debugging
import { thunk } from 'redux-thunk'; // Middleware to handle async actions

/* eslint-disable no-case-declarations */

// Define action types as constants
const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';
const FETCH_TASK = 'task/fetch';

// Define the initial state of the store
const initialState = {
    task: [],  // Array to hold tasks
    isLoading: false,  // Flag for loading state (not used in the current code)
};

// Reducer function to update the state based on dispatched actions
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: // Handles adding a new task
            return {
                ...state, 
                task: [...state.task, action.payload], // Add new task to the existing list
            };
        case DELETE_TASK: // Handles deleting a task by index
            return {
                ...state, 
                task: state.task.filter((_, index) => index !== action.payload),  // Remove task at the specified index
            };
        case FETCH_TASK: // Handles fetching tasks from an API
            return {
                ...state, 
                task: [...state.task, ...action.payload], // Append fetched tasks to the existing list
            };
        default:
            return state; // Return current state if no matching action is found
    }
}

// Create the Redux store and apply middleware (thunk) and DevTools for debugging
export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)));

console.log(store); // Logs the store object
console.log('Initial State: ', store.getState()); // Logs the initial state of the store

// Action Creator to add a new task
export const addTask = (data) => {
    return {
        type: ADD_TASK, 
        payload: data, // Task data to be added
    };
};

// Action Creator to delete a task by index
export const deleteTask = (index) => {
    return {
        type: DELETE_TASK, 
        payload: index, // Index of the task to be deleted
    };
};

// Async Action Creator to fetch tasks from an API
export const fetchTask = () => {
    return async (dispatch) => {
        try {
            // Fetch a limited number of tasks from a placeholder API
            const respond = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
            const task = await respond.json();
            console.log(task);

            // Dispatch action to update store with fetched tasks (only task titles are stored)
            dispatch({ type: FETCH_TASK, payload: task.map((task) => task.title) });
        } catch (error) {
            console.log(error); // Log any errors
        }
    };
};

