import React from "react";
import Button from "./Button";
import {XCircleIcon} from "@heroicons/react/24/solid";


const Modal = (
    {isOpen, onClose, children}:
    { isOpen: boolean, onClose: ()=> void, children: any }) => {

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <Button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <XCircleIcon className=" text-white w-10 h-10"/>
                </Button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
