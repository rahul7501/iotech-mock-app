import {Post} from "./types";
import users from '../../data/users.json'

const AVATAR_URL = 'https://i.pravatar.cc/150?'

const usersMap = new Map<any, { fullName: string; username: string, avatar?: string }>();
users.forEach(user => {
    usersMap.set(user.userId, {
        fullName: user.fullName,
        username: user.username,
        avatar: `${AVATAR_URL}img=${user.userId}`
    });
});

export const mappingPost = (post: any): Post => ({
    id: post.id,
    userId: Number(post.userId),
    username:usersMap.get(Number(post.userId))?.username,
    avatar: usersMap.get(Number(post.userId))?.avatar,
    title: post.title,
    body: post.body,
    read: post.read || false
});