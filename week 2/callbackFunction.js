//buatlah callback untuk menghitung luas dan keliling lingkaran
//nama parameter bebas, urutan harus sesuai dengan argument nya
function hitung(r, cbLuas, cbKeliling) {
  let phi;
  if (r % 7 === 0) {
    phi = 22 / 7;
  } else {
    phi = 3.14;
  }

  cbLuas(phi, r);
  cbKeliling(phi, r);
  // let luas = phi * r * r;
  // console.log(luas);

  // let keliling = 2 * phi * r;
  // console.log(keliling);
}
// nama paramaeter bebas
function hitungLuas(pphi, rr) {
  let luas = pphi * rr * rr;
  console.log(luas);
}
// nama parameter bebas
function hitungKeliling(ppphii, rrr) {
  let keliling = 2 * ppphii * rrr;
  console.log(keliling);
}
//yang di argument harus nama function nya
hitung(14, hitungLuas, hitungKeliling);

//menggunakan callback tanpa membuat function baru dengan cara memasukan proses yang diinginkan ke dalam argument
function tambah(cbtambah) {
  let a = 5;
  let b = 12;
  cbtambah(a, b);
}
tambah((x, y) => {
  let hasil = x + y;
  console.log(hasil);
});
