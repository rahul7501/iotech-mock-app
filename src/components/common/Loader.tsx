import React from "react";

const Loader = ({visible = false}: { visible?: boolean }) => {
    if (visible) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
                <div className="flex flex-col items-center">
                    {/* Loader Animation */}
                    <div className="w-12 h-12 border-4 border-gray-500 border-dashed rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }
    else return <></>
};

export default Loader;
