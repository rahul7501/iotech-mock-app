import './App.css';
import React, {useEffect, useState} from "react";

import {addPost, deletePost, getPosts, mappingPost, Post, updatePost} from "./modules/post";
import Button from "./components/common/Button";
import {PlusIcon} from "@heroicons/react/24/solid";
import Modal from "./components/common/Modal";
import PostForm from "./components/form/PostForm";
import PostsList from "./components/PostsList";
import Loader from "./components/common/Loader";


const App = () => {
    // @ts-ignore
    const [posts, setPosts] = useState<Post[]>([]);

    // modal
    const [isAdding, setIsAdding] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);

    // loading
    const [loading, setLoading] = useState(false);

    // load data
    useEffect(() => {
        setLoading(true)
        const loadPosts = async () => {
            await getPosts().then(setPosts).finally(() => setLoading(false));
        };
        loadPosts();
    }, []);


    // add function
    const handleAdd = async (newPost: Post) => {
        setLoading(true);
        const createdPost = await addPost(newPost);
        setPosts([mappingPost(createdPost), ...posts]); // add new post on top of the list
        setIsAdding(false);
        setLoading(false);
    };
    const handleEdit = async (updatedPost: Post) => {
        setLoading(true);
        await updatePost(updatedPost.id, {title: updatedPost.title, body: updatedPost.body});
        setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
        setLoading(false);
    };

    const handleDelete = async (id: number) => {
        setLoading(true);
        await deletePost(id);
        setPosts(posts.filter((post) => post.id !== id));
        setLoading(false);
    };

    const handleToggle = (id: number) => {
        setLoading(true);
        setPosts(posts.map(post =>
            post.id === id ? {...post, read: !post.read} : post
        ));
        setLoading(false);
    };

    return (
        <div className="max-w-3xl mx-auto mt-6 px-4">
            {/* title */}
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">My posts 💬</h1>
            <div className='flex justify-items-end my-3'>
                <Button
                    variant='success'
                    className='flex space-x-2'
                    onClick={() => setIsAdding(true)}
                >
                    <PlusIcon className='w-4 h-4 text-white'/>
                    <span>Add Post</span>
                </Button>
                <Button
                    onClick={() => setIsFiltering(true)}>
                    🔍☰
                </Button>
            </div>

            {/* post List */}
            <PostsList
                posts={posts}
                handleToggle={handleToggle}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isFiltering={isFiltering}
                setIsFiltering={setIsFiltering}
            />

            {/* add post modal */}
            <Modal isOpen={isAdding} onClose={() => setIsAdding(false)}>
                <h2 className="text-xl font-bold mb-4">Add New Post</h2>
                <PostForm post={null} onSave={handleAdd} onCancel={() => setIsAdding(false)}/>
            </Modal>

            <Loader visible={loading}/>
        </div>
    );
}

export default App;
