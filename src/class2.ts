export {};
// ---------------------
// インターフェイス

// class Mahotsukai {}
// class Souryo {}


interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// 多重継承
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();


// ------------------------
// 抽象クラス
// 抽象メソッド
// シグネチャー

// abstract class Animal {
//   abstract cry(): string;
// }

// class Lion extends Animal {
//   cry() {
//     return 'roar';
//   }
// }

// class Tiger extends Animal {
//   cry() {
//     return 'grrrr';
//   }
// }



// // 継承
// class Animal {
//   constructor(public name: string) {}
//   run():string {
//     return 'I can run';
//   }
// }

// class Lion extends Animal {
//   public speed: number;
//   constructor(name: string, speed: number ){
//     super(name);
//     this.speed = speed;
//   }
//   run(): string {
//     const parentMessage = super.run();
//     // return 'I can run 80km.';
//     return `${parentMessage} ${this.speed}km/h.`;
//   }
// }

// console.log(new Animal('Mickey').run());
// console.log(new Lion('Simba', 70).run());



// let animal = new Animal();
// console.log(animal.run());
//
// const lion = new Lion();
// console.log(lion.run());


// ---------------------
// // 名前空間
// namespace English {
//   export namespace newyork {
//     export class Person {
//       constructor(
//         public firstName: string,
//         public middleName: string,
//         public lastName: string,
//       ){}
//     }
//   }

//   export namespace califonia {

//   }
// }

// const MJ = new English.newyork.Person('Michel', 'joseph', 'jackson');
// console.log(MJ.firstName);



// class VisaCard {
//   // readonly owner: string;

//   constructor(public readonly owner: string) {
//     // this.owner = owner;
//   }
// }

// let myVisaCard = new VisaCard('はむさん');
// console.log(myVisaCard.owner);

// myVisaCard.owner = "hirano";
// console.log(myVisaCard.owner);

// -----------------------------
// -----------------------------
/**
 * owner
 * 所有者
 * 初期化時に設定できる
 * 途中で変更できない
 * 参照できる
 *
 * secretNumber
 * 個人番号
 * 初期化時に設定できる
 * 途中で変更可能
 * 参照できない
 */

// class MyNumberCard {
//   private _owner: string;
//   private _secretNumber: number;

//   constructor( owner: string, secretNumber: number ) {
//     this._owner = owner;
//     this._secretNumber = secretNumber;
//   }

//   // privateだが、外部からも参照できるように
//   // getter
//   get owner() {
//     return this._owner;
//   }

//   // privateだが、参照はできないが上書きはできるように
//   // setter
//   set secretNumber(secretNumber: number) {
//     this._secretNumber = secretNumber;
//   }

//   debugPrint() {
//     return `secretNumber: ${this._secretNumber}`;
//   }
// }

// let card = new MyNumberCard('はむさん', 1234567890);

// console.log(card.debugPrint());

// card.secretNumber = 1111111111;

// console.log(card.debugPrint());

// console.log(card.secretNumber);



// -----------------------------
// -----------------------------
// class Person {
//   // プロパティ 型定義
//   // public name: string;
//   // protected age: number;
//   // protected nationality: string;

//   // メソッド
//   // 初期化
//   constructor( public name: string, protected age:number ) {}
// }

// let me = new Person('はむさん', 43);

// console.log(me);

