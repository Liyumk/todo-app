import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Input } from "@material-tailwind/react";

type Props = {
    addTask?: () => void;
    isOpen: boolean;
    closeModal: () => void;
    edit?: boolean;
    editTask?: (id: string) => void;
};

const AddNewTaskModal = ({
    isOpen,
    closeModal,
    edit,
    editTask = () => null,
    addTask = () => null,
}: Props) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 pb-6 text-left align-middle shadow-xl transition-all">
                                    <Input
                                        label={
                                            edit
                                                ? "Edit task"
                                                : "Add a new task"
                                        }
                                        size="lg"
                                        color="purple"
                                    />
                                    <div className="mt-5 flex justify-end gap-x-4 ">
                                        <button
                                            type="button"
                                            className="hover:bg-white-300 hover:text-white-400 inline-flex w-20 justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 focus:outline-none"
                                            onClick={() => {
                                                edit
                                                    ? editTask("id")
                                                    : addTask();
                                            }}
                                        >
                                            {edit ? "Edit" : "Add"}
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-20 justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AddNewTaskModal;
