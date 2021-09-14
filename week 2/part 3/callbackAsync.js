const hitungLuas = (r, callback) => {
  if (typeof r !== "number") {
    return new Error("Tipe data harus bernilai number");
  }
  callback(r); // menentukanPhi(r)
};

const menentukanPhi = (r, callback) => {
  // PROSES 1 = MENENTUKAN NILAI PHI
  setTimeout(() => {
    if (r % 7 === 0) {
      phi = 22 / 7;
    } else {
      phi = 3.14;
    }
    console.log("proses 1", phi);
    callback(phi, r); // hitung(phi, r)
  }, 3000);
};

const hitung = (phi, r, callback) => {
  // PROSES 2 = MENGHITUNG
  setTimeout(() => {
    luas = phi * r * r;
    // keliling = 2 * phi * r;
    console.log("proses 2", luas);
    callback(luas); // output(luas)
  }, 4000);
};

const output = (luas) => {
  // PROSES 3 = OUTPUT
  console.log("proses 3");
  console.log(luas);
  // console.log(keliling);
};

hitungLuas(7, (r) => {
  menentukanPhi(r, (r) => {
    hitung(phi, r, (luas) => {
      output(luas);
    });
  });
});
