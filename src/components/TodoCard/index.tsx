import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AddNewTaskModal from "../AddNewTaskModal";
import TaskItem from "../Task";
import Tasks from "../../api/tasks.json";
import { Task } from "../../utils/types";

const TodoCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");
    const [inputError, setInputError] = useState(false);

    const idForNewTask = () => {
        const length = Tasks.length;
        const lastTask = Tasks[length - 1];
        return lastTask.id + 1;
    };

    const addTask = () => {
        // Add task here
        if (newTaskTitle.length > 0) {
            setInputError(false);
            const newTask: Task = {
                id: idForNewTask(),
                title: newTaskTitle,
                completed: false,
            };
            Tasks.push(newTask);
            setNewTaskTitle("");
        } else {
            setInputError(true);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="mx-2 my-14 w-[40rem] pb-10 sm:mx-0">
            <AddNewTaskModal
                addTask={addTask}
                closeModal={closeModal}
                isOpen={isOpen}
                setNewTaskTitle={setNewTaskTitle}
                value={newTaskTitle}
                error={inputError}
                setError={setInputError}
            />
            <div className="flex w-full items-center justify-between rounded-sm bg-purple-400 px-4 py-3 text-white shadow-md">
                <div className="text-lg font-semibold">Todo App</div>
                <div>
                    <AiFillPlusCircle
                        size={25}
                        className="hover:cursor-pointer"
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    />
                </div>
            </div>

            <div className="mt-5 rounded px-4 py-4 shadow-md shadow-purple-50 sm:px-16">
                <div>
                    {Tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={{
                                id: task.id,
                                title: task.title,
                                completed: task.completed,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
