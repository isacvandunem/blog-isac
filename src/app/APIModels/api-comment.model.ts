export interface APIComment {
    id: number;
    postId: number;
    parent_id: number | null;
    user: string;
    date: string;
    content: string;
}