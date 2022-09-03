const foo = (arg1: string, arg2: number): void => {}

type MyParameters<T extends Function> = T extends (...a: infer X) => void ? X : never;

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]