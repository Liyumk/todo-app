import Tasks from "../../api/tasks.json";

export const idForNewTask = () => {
    const length = Tasks.length;
    const lastTask = Tasks[length - 1];
    return lastTask.id + 1;
};
