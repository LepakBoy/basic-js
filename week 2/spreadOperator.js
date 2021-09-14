const hobby = ["swiming", "gaming"];
const hobby2 = ["karaoke", "hiking"];

const newHobby = [...hobby, "futsal", ...hobby2];

console.log(newHobby);

// OBJECT
const obj1 = { foo: "bar", x: 12 };
const obj2 = { foo: "baz", y: 10 };
("");
const obj3 = { ...obj1, ...obj2, z: 5, foo: "bal" };
console.log(obj3);

// YANG TIDAK BOLEH
const obj = { key: "value" };
const array = [...obj];
console.log(array); // JIKA TIDAK MAU ERROR BSA DIBUNGKUS MENYESUAIKAN TYPE DATA YANG DIGUNAKAN
