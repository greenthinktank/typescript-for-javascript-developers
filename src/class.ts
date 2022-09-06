export {};

// アクセス修飾子（access modifiers）

class Person {
  // プロパティ 型定義
  // 何も書かなければ「public」になるので、privateとprotectedのみ書くのが通例
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  // メソッド
  // 初期化
  constructor( name: string, age:number, nationality:string ) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile():string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// サブクラス（継承クラス）
class Android extends Person {
  constructor(name: string, age:number, nationality:string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

// let taro = new Person('Taro', 30, 'japan');
let me = new Person('はむさん', 43, 'japan');

console.log(me);

// console.log(taro.profile());
// console.log(taro.name);



