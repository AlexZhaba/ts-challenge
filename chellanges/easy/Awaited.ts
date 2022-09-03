type ExampleType = Promise<string>

type MyAwaited<T> = T extends Promise<infer X> ? X : never;

type Result1 = MyAwaited<ExampleType> // string