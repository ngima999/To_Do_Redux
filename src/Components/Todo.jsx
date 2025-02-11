import { useSelector, useDispatch } from "react-redux"; 
import { useState } from "react"; 
import { addTask, deleteTask, fetchTask } from "../store"; 
import { MdDeleteForever } from "react-icons/md"; 


export const Todo = () => {
    const [task, setTask] = useState(''); // Local state to store input task
    const tasks = useSelector((state) => state.task); // Access tasks from the Redux store

    const dispatch = useDispatch(); // Hook to dispatch actions to Redux store

    // Function to handle form submission (adding a task)
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevents the default form refresh behavior
        dispatch(addTask(task)); // Dispatch action to add task to Redux store
        setTask(''); // Clear input field after submitting
    };

    // Function to fetch tasks from API (asynchronous action)
    const handleFetchTask = () => {
        dispatch(fetchTask()); // Dispatch async action to fetch tasks
    };

    // Function to delete a task based on its index
    const handleTaskDelete = (index) => {
        dispatch(deleteTask(index)); // Dispatch action to remove task from Redux store
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                {/* Heading Section */}
                <h1 className="text-2xl font-bold text-gray-700 flex items-center gap-2 mb-4">
                    <i className="fa-regular fa-pen-to-square text-blue-500"></i>
                    To-do List
                </h1>
                
                {/* Task Input Form */}
                <div className="mb-4">
                    <form onSubmit={handleFormSubmit}>
                        <input 
                            type="text" 
                            id="input-box" 
                            placeholder="Add your task" 
                            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={task} // Controlled input bound to state
                            onChange={(e) => setTask(e.target.value)} // Update state on input change
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                            Add Task
                        </button>
                    </form>
                </div>
                
                {/* Fetch Tasks Button (loads tasks from API) */}
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition" onClick={handleFetchTask}>
                    Fetch Tasks
                </button>
                
                {/* List of Tasks */}
                <ul id='list-container' className="space-y-2">
                    {tasks.map((task, index) => {
                        return (
                            <li key={index} className="flex items-center justify-between">
                                <span>{task}</span>
                                {/* Delete Task Button */}
                                <button className="text-red-500 hover:text-red-600 transition" onClick={() => handleTaskDelete(index)}>
                                    <i className="fa-regular fa-trash"></i>
                                    <MdDeleteForever className="inline-block ml-1" />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
