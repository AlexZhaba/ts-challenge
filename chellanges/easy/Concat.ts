type Concat<A1 extends any[], A2 extends any[]> = [...A1, ...A2];

type Result3 = Concat<[1], [2]> // expected to be [1, 2]
