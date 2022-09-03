interface Todo1 {
  title: string;
  description: string;
};

type MyReadonly<T> = {
  readonly [S in keyof T]: T[S]
}

type test = MyReadonly<Todo1>;

const todo: MyReadonly<Todo1> = {
  title: "Hey",
  description: "foobar",
}
