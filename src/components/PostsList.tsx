import React, {useEffect, useState} from "react";
import PostListItem from "./list-items/PostListItem";
import {Post} from "../modules/post";
import Modal from "./common/Modal";
import PostsFilterForm from "./form/PostsFilterForm";


const PostsList = ({
                       posts, handleEdit, handleDelete, handleToggle, isFiltering = false, setIsFiltering
                   }: {
    posts: Post[],
    handleEdit: any,
    handleDelete: any,
    handleToggle: any,
    isFiltering?: boolean,
    setIsFiltering?: any;
}) => {

    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [postsStatus, setPostsStatus] = useState<"all" | "read" | "unread">("all");

    // Filtering
    useEffect(() => {
        let filtered = posts;

        if (selectedUser) {
            filtered = filtered.filter((post) => post.userId === Number(selectedUser));
        }

        if (postsStatus === "read") {
            filtered = filtered.filter((post) => post.read);
        } else if (postsStatus === "unread") {
            filtered = filtered.filter((post) => !post.read);
        }

        setFilteredPosts(filtered);
    }, [selectedUser, postsStatus, posts]);

    return (
        <>
            <div className="space-y-4">
                {filteredPosts?.length > 0 ? (
                        <>
                            {filteredPosts.map((post: Post) => (
                                <PostListItem
                                    key={post.id}
                                    post={post}
                                    onEdit={(updatedPost: any) => handleEdit(updatedPost)}
                                    onDelete={() => handleDelete(post.id)}
                                    onToggle={() => handleToggle(post.id)}/>
                            ))}</>
                    )
                    : <p className="text-gray-500 text-center">No posts found.</p>
                }
            </div>
            <Modal isOpen={isFiltering} onClose={() => setIsFiltering(false)}>
                <h2 className="text-xl font-bold mb-4">Filter posts</h2>
                <PostsFilterForm setSelectedUser={setSelectedUser} setPostsStatus={setPostsStatus}/>
            </Modal>
        </>
    )
}

export default PostsList;