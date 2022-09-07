export { };

// セクション６

// --------------------------

type debugType = () => void;
type SomeTypes = string | number | debugType;

// Exclude < unionタイプの型, 除外したい型>
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, debugType>;

// 「Function」は型の総称。
type ExcludingFunction = Exclude<SomeTypes, Function>;

// Exclude < unionタイプの型, 除外したい型>
type FunctionTypeByExtract = Extract<SomeTypes, debugType>;

type NullableTypes = string | number | null | undefined;

type NonNullableTypes = NonNullable<NullableTypes>;


// --------------------------
// Record
// type Prefecture = 'Tokyo' | 'Tottori' | 'chiba' | 'yamaguchi';

// type Covid19InfectionInfo = {
//   kanji_name: string,
//   confirmed_cases: number
// };

// const Covid19InfectionJapan: Record <Prefecture ,Covid19InfectionInfo> = {
//   Tokyo: {kanji_name: '東京', confirmed_cases: 1960},
//   Tottori: {kanji_name: '鳥取', confirmed_cases: 1960},
//   chiba: {kanji_name: '東京', confirmed_cases: 5},
//   yamaguchi: {kanji_name: '東京', confirmed_cases:30}
// };


// --------------------------
// readonly

// type Profile = {
//   name: string,
//   age: number
// };

// type PersonalDataType = Readonly<Profile>;

// const me: Profile = {
//   name : 'ham',
//   age : 43
// };

// me.age++;

// console.log(me);

// type YomitoriOnly <T> = { readonly [P in keyof T]: T[P] };


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