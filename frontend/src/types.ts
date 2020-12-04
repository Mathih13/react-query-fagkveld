export type Post = {
    body: string;
    imageUrl: string;
    user: User; 
    date: string;
}

export type User = {
    firstName: string;
    lastName: string;
}