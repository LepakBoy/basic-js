//CONTOH DARI ASTYNCHRONOUS : langsung menjalankan proses yang tercepat walaupun proses sebelumnya belum selesai dikerjakan => function kedua langsung diselesaikan karna lebih cepat tanpa menunggu function pertama selesai
// function pertama() {
//   setTimeout(() => {
//     console.log("pros 1");
//   }, 3000);
// }

// function kedua() {
//   setTimeout(() => {
//     console.log("pros 2");
//   }, 1000);
// }
// pertama();
// kedua();

//CONTOH IMPLEMENTASI PROMISE : ================================================================================================================================
// const janjian = () =>
//   //siapa yang lebih cepat maka akan langsung dieksekusi prosesnya

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("pros 1");
//     }, 3000);

//     setTimeout(() => {
//       reject("pros 2");
//     }, 500);
//     //     const a = 3;
//     //     if (typeof a !== "number") {
//     //       resolve("berhasil");
//     //     } else {
//     //       reject("gagal");
//     //     }
//   });

// janjian()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//MENGHITUNG SEGITIGA DENGAN PROMISE ============================================================================================================================

const hitungLuas = (r) =>
  new Promise((resolve, reject) => {
    if (typeof r !== "number") {
      reject("harus angka");
    }
    //tidak perlu pakai else, karena sudah ada reject dan resolve yang berfungsi sama dengan return
    resolve(r);
  });

const hitungPhi = (r) =>
  new Promise((resolve, reject) => {
    if (typeof r !== "number") {
      reject("harus angka");
    }

    setTimeout(() => {
      if (r % 7 === 0) {
        phi = 22 / 7;
      } else {
        phi = 3.14;
      }
      //nilai phi dan r dimasukan ke resolve() yang akan dilempar ke method .then()
      //Q : fungsi kurung kurawal ????????
      resolve({ phi, r });
      console.log("proses 1");
    }, 3000);
  });

const hitung = (phi, r) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      luas = phi * r * r;
      console.log("proses 2");
      resolve(luas);
    }, 1000);
  });

const output = (luas) => {
  console.log("proses 3");
  console.log(luas);
};

hitungLuas(21)
  .then((result) => {
    hitungPhi(result).then((result) => {
      hitung(result.phi, result.r).then((result) => {
        output(result);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
