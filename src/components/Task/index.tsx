import React, { useState } from "react";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import AreYouSureModal from "../AreYouSureModal";
import EditTaskModal from "../AddNewTaskModal";
import { Task } from "../../utils/types";

type Props = {
    task: Task;
};

const TaskItem = ({ task }: Props) => {
    // const [completed, setCompleted] = useState(false);
    const [openAreYouSureModal, setOpenAreYouSureModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const deleteTask = () => {
        // Delete todo here
    };

    const editTask = () => {
        // Edit here
    };

    const closeEditModal = () => {
        setOpenEditModal(false);
    };

    const closeAreYouSureModal = () => {
        setOpenAreYouSureModal(false);
    };

    const completed = () => {
        // completed here
    };

    return (
        <div className="flex justify-between">
            <AreYouSureModal
                isOpenModal={openAreYouSureModal}
                deleteTask={deleteTask}
                closeModal={closeAreYouSureModal}
            />
            <EditTaskModal
                edit
                isOpen={openEditModal}
                editTask={editTask}
                closeModal={closeEditModal}
            />
            <div className="flex flex-1 justify-start gap-x-4 ">
                <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={completed}
                >
                    {task.completed ? (
                        <BiRadioCircleMarked
                            className="text-purple-500"
                            size={22}
                        />
                    ) : (
                        <BiRadioCircle className="text-purple-500" size={22} />
                    )}
                </div>
                <p
                    className={`text-base ${
                        task.completed ? "line-through" : null
                    }`}
                >
                    {task.title}
                </p>
            </div>
            <div className="flex flex-1 items-center justify-end gap-x-5">
                <AiOutlineEdit
                    className="text-blue-400 hover:cursor-pointer hover:text-blue-500"
                    size={20}
                    onClick={() => {
                        setOpenEditModal(true);
                    }}
                />
                <AiOutlineDelete
                    className="text-red-400 hover:cursor-pointer hover:text-red-500"
                    size={20}
                    onClick={() => {
                        setOpenAreYouSureModal(true);
                    }}
                />
            </div>
        </div>
    );
};
export default TaskItem;
