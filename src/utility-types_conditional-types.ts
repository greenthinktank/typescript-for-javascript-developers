export {};

// セクション６

// --------------------------
// --------------------------
// --------------------------
// readonly



// --------------------------
// Mapped Types

// type Optional2<T> = {  [P in keyof T]?: T[P]  | null };


// --------------------------
// partial（全てのプロパティをオプショナルに）
// required（全てのプロパティを必須に）

// type profile = {
//   name: string;
//   age?: number;
//   zipNumber: number;
// }

// // type partialType = Partial <profile>;
// type partialType = Required <profile>;