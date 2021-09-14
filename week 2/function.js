//  DECLARATION => bersifat hoisting

// function doStuff(num1, num2) {
//   const total = num1 + num2;
//   return total;
// }
// console.log(doStuff(2, 3));

// EXPRESSION
// expression func
// const doStuff = function (num1, num2) {
//   const total = num1 + num2;
//   return total;
// };
// console.log(doStuff(3, 4));

//arrow func
const doStuff = (num1, num2) => {
  total = num1 + num2;
  return total;
};
console.log(doStuff(3, 4));

const biodata = (name, age, hobby) => {
  const biodata1 = `halo nama saya ${name}, dan umur saya ${age}`;
  const biodata2 = `hooby ${name} adalah ${hobby}`;

  // panggil function lain ke dalam function
  const newage = doStuff(age, 5);
  console.log(newage);

  return {
    biodata1,
    biodata2,
  };
};
// cara menjalankan function dengan memanggilnya :
// biodata("fikri", 12, ["baca", "makan"]);
const dataBiodata = biodata("fikri", 13, ["baca", "main game"]);
console.log(dataBiodata.biodata2);
//hanya memanggil biodata2, jika ingin kedua2 nya maka cukup (dataBiodata) pada argument

//YANG TIDADK BOLEH DILAKUKAN  OLEH RETURN FUNCTION KETIKA MEMASUKAN RETURN DI DALAM PROSES LOOPING
function loop(number) {
  if (typeof number !== "number") {
    return "data harus number";
  }
  let result = 0;
  for (let i = 0; i < number; i++) {
    result += i;
    //jika return result diletakan di dalam perulangan / disini, maka looping akan langsung berhenti karena sudah ketemu return
  }
  return result;
}
console.log(loop(5));
