type Includes<T extends unknown[],U> = U extends T[number] ? true : false

/*
  Прикольное рекурсивное решение!
  type Includes<T extends any[], U> = T extends [infer X, ...infer R] ? X extends U ? true : Includes<R, U> : false;
*/
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'> // expected to be `false`

type Test = ['1', '2'] extends ['1', '2'] ? true : false;