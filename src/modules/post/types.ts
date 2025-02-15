export interface Post {
    id: number;
    userId: number;
    username?:any;
    avatar?:any;
    title: string;
    body: string;
    read?:boolean;
}