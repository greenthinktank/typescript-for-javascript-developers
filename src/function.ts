export {};

// typescriptの関数について

// let bmi = (weight: number, height: number, printable?: boolean): number => {

//   const bmi: number = weight / (height * height);

//   if (printable) {
//     console.log({bmi});
//   }
//   return bmi;
// };

// bmi(1.71, 55 ,true);



// デフォルトパラメータ
// デフォルトパラメータ

// const nextYearSalary = (currentSalary: number, rate: number = 1.1) : number => {
//   return currentSalary * rate;
// };

// console.log(nextYearSalary(1000, 1.05));


// Reatパラメータ

// const reducer = (accumulator: number, currentValue: number) => {
//   return accumulator + currentValue;
// };

// const sum = (...values: number[]): number => {
//   return values.reduce(reducer);
// };

// console.log(sum(1,2,3,4,5));



// オーバーロード説明 シグニチャー

// シグニチャー
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    // ナンバー型の時だけ処理する
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));


