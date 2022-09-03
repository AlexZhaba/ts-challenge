interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [S in K]: T[S];
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>
