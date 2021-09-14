// STRING =======================================================
let name = "name";
// `` = petik
// '' = kutip 1
// "" = kutip 2
console.log(typeof name);

// NUMBER =======================================================
let number = 0.123;
console.log(typeof number);

// BOOLEAN ======================================================
let boolean = true;
console.log(typeof boolean);

// FUNCTION =====================================================
let functionData = function () {
  return "oke";
};
console.log(typeof functionData);

// OBJECT =======================================================
let objectData = {
  nama: "Bagus",
  hobby: ["bowling"],
  pekerjaan: {
    pekerjaan1: "mengajar",
    pekerjaan2: "mengajar",
  },
};
console.log(typeof objectData);
console.log(objectData.hobby);

// OBJECT JUGA ===================================================
// array pada versi es6 masuk kedalam type data object
let arrayData = [1, 2, 3];
console.log(typeof arrayData);

// NULL ==========================================================
let nullData = null;
console.log(nullData); // null
// jika menggunakan typeof pada null maka akan berubah menjadi object
console.log(typeof nullData); // object

// UNDEFINED =====================================================
const undefinedData = console.log(undefinedData); // undefined
console.log(typeof undefinedData); // "undefined"
