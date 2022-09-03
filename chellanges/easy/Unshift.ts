type Unshift<T extends unknown[], U extends unknown> = [U, ...T];
type Result5 = Unshift<[1, 2], 0> // [0, 1, 2,]
