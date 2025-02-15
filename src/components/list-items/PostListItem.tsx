import Button from "../common/Button";
import {CheckCircleIcon, MinusCircleIcon, TrashIcon, PencilIcon} from "@heroicons/react/24/solid";
import React, {useState} from "react";
import {Post} from "../../modules/post";
import Modal from "../common/Modal";
import PostForm from "../form/PostForm";

const PostListItem = (
    {post, onEdit, onDelete, onToggle}: { post: Post, onEdit:any, onDelete: any, onToggle: any }) => {
    const [isEditing, setIsEditing] = useState(false);
    
    return (
        <>
            <div
                key={post.id}
                className={`p-4 flex justify-between items-center border rounded-lg shadow-sm transition duration-300 ${
                    post.read ? "bg-blue-50 border-blue-500" : "bg-white border-gray-300"
                } hover:shadow-md`}
            >
                {/* post Content */}
                <div className="flex-col items-center space-x-3 ">
                    <div className="flex space-x-2 items-center">
                        <img
                            src={post.avatar}
                            alt={post.userId.toString()}
                            className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
                        />
                        <span className={`text-xs font-light`}>
                                Username: {post.username}
                            </span>
                    </div>
                    <div className={`text-lg font-semibold`}>
                        <p>{post.title}</p>
                    </div>
                    <div className={`text-sm font-normal max-w-xl`}>
                        <em>{post.body}</em>
                    </div>
                </div>

                {/* action Buttons */}
                <div className='flex-col'>
                    <center className='space-y-2'>
                        <Button
                            size='xsmall'
                            className='flex-col'
                            onClick={() => setIsEditing(true)}>
                            <PencilIcon className="w-4 h-4"/>
                            Edit
                        </Button>

                        <Button
                            size='xsmall'
                            className='flex-col text-red-500 hover:text-red-700 transition duration-300'
                            onClick={() => onDelete(post.id)}>
                            <TrashIcon className="w-4 h-4"/>
                            Delete
                        </Button>

                    <Button
                        size='xsmall'
                        className={`flex-col ${post.read ? 'text-gray-500' : 'text-blue-500'} ${post.read ? 'hover:text-gray-700' : 'hover:text-blue-700'}`}
                        onClick={() => onToggle(post.id)}>
                        {post.read ?
                            <MinusCircleIcon className="w-5 h-5"/>
                            :
                            <CheckCircleIcon className="w-5 h-5"/>
                        }
                        {post.read ? 'Mark as unread' : 'Mark as read'}
                    </Button></center>
                </div>

                {/* Edit Modal */}
                <Modal isOpen={isEditing} onClose={() => {
                    setIsEditing(false);
                }}>
                    <h2 className="text-xl font-bold mb-4">Edit Post</h2>
                    <PostForm post={post} isEditing={true} onSave={(updatedPost: any) => {
                        onEdit(updatedPost);
                        setIsEditing(false);
                    }} onCancel={() => setIsEditing(false)} />
                </Modal>
            </div>
        </>
    )
}
export default PostListItem;