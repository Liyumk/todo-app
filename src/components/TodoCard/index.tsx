import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AddNewTaskModal from "../AddNewTaskModal";
import TaskItem from "../Task";

const TodoCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const addTask = () => {
        // Add task here
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="mx-2 mt-32 w-[40rem] sm:mx-0">
            <AddNewTaskModal
                addTask={addTask}
                closeModal={closeModal}
                isOpen={isOpen}
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

            <div className="mt-5 px-4 py-4  shadow-md sm:px-16">
                <div>
                    <TaskItem
                        task={{
                            id: "1",
                            title: "Learn something",
                            completed: false,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
