export {};

let numbers: number[] = [1, 2, 3];

// 非推奨（これはinterfaceの書き方）
let numbers2: Array<number> = [1, 2, 3];

let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// 二次元配列
let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

let hairetsu: (string | number | boolean)[] = [1, false, 'japan'];