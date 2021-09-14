// console.log("Input");
// setTimeout(() => {
//   console.log("Proses");
// }, 2000);
// console.log("Output");

function hitung(r) {
  let phi;
  let luas;
  let keliling;

  // PROSES 1 = MENENTUKAN NILAI PHI
  setTimeout(() => {
    if (r % 7 === 0) {
      phi = 22 / 7;
    } else {
      phi = 3.14;
    }
    console.log("PROSES 1", phi);
  }, 3000);

  // PROSES 2 = MENGHITUNG
  setTimeout(() => {
    luas = phi * r * r;
    keliling = 2 * phi * r;
    console.log("PROSES 2", luas, keliling);
  }, 4000);

  // PROSES 3 = OUTPUT
  console.log("PROSES 3");
  console.log(luas);
  console.log(keliling);
}

hitung(7);
