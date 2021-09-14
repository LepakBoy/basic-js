// IF ELSEIF ELSE
// TRUE = true | 1 | angka selain 0 | "(string yang terisi)"
// FALSE = false | 0 | null | undefined | "(string kosong)" | NaN
// const condition = NaN;
// if (condition) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// SWITCH CASE
// const phone = "BLACKBERRY";

// switch (phone) {
//   case "IPHONE": {
//     console.log("YOUR PHONE IS IPHONE");
//     break;
//   }
//   case "ANDROID": {
//     console.log("YOUR PHONE IS ANDROID");
//     break;
//   }
//   default: {
//     console.log("YOUR PHONE IS NOT LISTED");
//   }
// }

// TERNARY OPERATOR
// const harga = 4000;
// if (harga > 10000) {
//   console.log("Mahal");
// } else if (harga > 5000) {
//   console.log("Sedang");
// } else if (harga > 3000) {
//   console.log("Lumayan Murah");
// } else {
//   console.log("Murah");
// }

// harga > 10000
//   ? console.log("Mahal")
//   : harga > 5000
//   ? console.log("Sedang")
//   : harga > 3000
//   ? console.log("Lumayan ...")
//   : console.log("Murah");

// SHORT LOGIC
// && = jika kondisinya true maka akan melanjutkan ke prose berikutnya, jika false maka nilai tsb yang akan ditetapkan
// || = jika kondisinya false maka akan melanjutkan ke proses berikutnya, jika true maka nilai tsb yang akan di tetapkan

const name = "Bagus";
if (name) {
  console.log(name);
} else {
  console.log("Anonymous");
}
console.log(name);
let checkUsername = name || 1 || 0 || null || "Anonymous"; // checkName = true && false && true

// console.log(checkUsername);
// {
//   username && (
//     <h1>username</h1>
//   )
// }
