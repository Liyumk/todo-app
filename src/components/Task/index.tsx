import React, { useState } from "react";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import AreYouSureModal from "../AreYouSureModal";
import EditTaskModal from "../AddNewTaskModal";
import { Task } from "../../utils/types";
import Tasks from "../../api/tasks.json";

type Props = {
    task: Task;
    setUpdateTasksList: React.Dispatch<React.SetStateAction<boolean>>;
};

const TaskItem = ({ task, setUpdateTasksList }: Props) => {
    const [openAreYouSureModal, setOpenAreYouSureModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [taskToBeEdited, setTaskToBeEdited] = useState(task.title);
    const taskId = task.id;

    const deleteTask = () => {
        const indexOfTask = Tasks.findIndex((task) => task.id === taskId);
        Tasks.splice(indexOfTask, 1);
        setOpenAreYouSureModal(false);
        setUpdateTasksList((prev) => !prev);
    };

    const editTask = () => {
        if (taskToBeEdited.length > 0) {
            const indexOfTask = Tasks.findIndex((task) => task.id === taskId);
            Tasks[indexOfTask].title = taskToBeEdited;
            setOpenEditModal(false);
            setUpdateTasksList((prev) => !prev);
        } else {
            setInputError(true);
        }
    };

    const completedTask = () => {
        const indexOfTask = Tasks.findIndex((task) => task.id === taskId);
        Tasks[indexOfTask].completed = !Tasks[indexOfTask].completed;
        setUpdateTasksList((prev) => !prev);
    };

    const closeEditModal = () => {
        setOpenEditModal(false);
    };

    const closeAreYouSureModal = () => {
        setOpenAreYouSureModal(false);
    };

    return (
        <div className="my-1 flex justify-between py-2">
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
                error={inputError}
                setError={setInputError}
                value={taskToBeEdited}
                setValue={setTaskToBeEdited}
                task={task}
            />
            <div className="flex w-full justify-start gap-x-4">
                <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={completedTask}
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
                {!task.completed && (
                    <AiOutlineEdit
                        className="text-blue-400 hover:cursor-pointer hover:text-blue-500"
                        size={20}
                        onClick={() => {
                            setOpenEditModal(true);
                        }}
                    />
                )}
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
