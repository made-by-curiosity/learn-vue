export interface Task {
    id: string;
    title: string;
    done: boolean;
}



export enum Filter {
    All = 'all',
    Todo = 'todo',
    Done = 'done'
}