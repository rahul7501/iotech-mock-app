import React from "react";
import users from '../../data/users.json'
import Button from "../common/Button";

// @ts-ignore
const PostsFilterForm = ({setSelectedUser, setPostsStatus})=>{

    return (
        <div className='flex space-x-3'>
            {/* user select */}
            <select
                className="p-2 border rounded"
                // value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
            >
                <option value="">All Users</option>
                {users.map((user) => (
                    <option key={user.userId} value={user.userId}>
                        {user.username}
                    </option>
                ))}
            </select>

            {/* status select */}
            <select
                className="p-2 border rounded"
                // value={showRead}
                onChange={(e) => setPostsStatus(e.target.value)}
            >
                <option value="all">All Posts</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>

            <Button
                className='font-extralight underline'
                onClick={()=> {
                    setSelectedUser("");
                    setPostsStatus("all")
                }}
            >
                Reset
            </Button>

        </div>
    )
}

export default PostsFilterForm;