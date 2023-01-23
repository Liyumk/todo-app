import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type Props = {
    isOpenModal: boolean;
    deleteTask: () => void;
    closeModal: () => void;
};

const AreYouSureModal = ({ isOpenModal, deleteTask, closeModal }: Props) => {
    return (
        <>
            <Transition appear show={isOpenModal} as={Fragment}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2">
                                        <p className="text-lg text-gray-800">
                                            Are you sure you want to delete this
                                            task?
                                        </p>
                                    </div>

                                    <div className="mt-4 flex gap-x-4 ">
                                        <button
                                            type="button"
                                            className="inline-flex w-20 justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-black hover:bg-red-300 hover:text-gray-900 focus:outline-none"
                                            onClick={deleteTask}
                                        >
                                            Delete
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
export default AreYouSureModal;
