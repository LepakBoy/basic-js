//FUNCTION YANG DIPANGGIL OLEH FUNCTION UTAMA HARUS BERBENTUK PROMISE
const hitungPhi = (r) => {
  return new Promise((resolve, reject) => {
    if (typeof r !== "number") {
      //nilai di dalam reject akan dikembalikan ke function catch di dalam function utama
      reject(new Error("harus angka"));
    }
    setTimeout(() => {
      if (r % 7 === 0) {
        phi = 22 / 7;
      } else {
        phi = 3.14;
      }
      console.log("proses 1, phi = ", phi);
      //nilai di dalm resolve akan dikembalikan ke parameter pemanggil function masing-masing di dalam try function utama
      resolve(phi);
    }, 3000);
  });
};

const hitungLuas = (r, phi) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      luas = phi * r * r;
      console.log("prose 2, luas = ", luas);
      resolve(luas);
    }, 2000);
  });
};

const output = (luas) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("proses 3, luas adlaah = ", luas);
    }, 1000);
  });
};

//FUNCTION UTAMA : YANG PERTAMA KALI DI PANGGIL/DIJALANKAN
const jumlahkan = async (r) => {
  try {
    const phi = await hitungPhi(r);
    const luas = await hitungLuas(r, phi);
    output(luas);
  } catch (error) {
    console.log(error);
  }
};
//menjalankan functiion utama dan mengirimkan data/argument ke parameternya
jumlahkan(10);
