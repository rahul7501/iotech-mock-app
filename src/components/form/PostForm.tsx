import React, { useState } from "react";
import Button from "../common/Button";
import users from '../../data/users.json'


// @ts-ignore
const PostForm = ({ post, isEditing=false, onSave, onCancel }) => {
    const [formData, setFormData] = useState(post || { title: "", body: "", userId: "" });

    // @ts-ignore
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // @ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <textarea
                name="body"
                placeholder="Body"
                value={formData.body}
                onChange={handleChange}
                className="w-full h-full p-2 border rounded"
            />
            <select
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                disabled={isEditing}
                className="w-full p-2 border rounded"
            >
                Select User
                {users.map((user) => (
                    <option key={user.userId} value={user.userId}>
                        {user.fullName} @{user.username}
                    </option>
                ))}
            </select>
            <div className="flex justify-end space-x-2">
                <Button onClick={onCancel}>
                    Cancel
                </Button>
                <Button onClick={() => handleSubmit} variant="success">
                    Save
                </Button>
            </div>
        </form>
    );
};

export default PostForm;
