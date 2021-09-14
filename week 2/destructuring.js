// DESTRUCTURING OBJECT
const profile = {
  name: "Bagus",
  hobby: ["membaca", "melukis"],
  sister: {
    sister1: "Ana",
    sister2: "Bella",
  },
  brother: {
    brothermale: {
      brother1: "Andi",
      brother2: "Bayu",
    },
    brotherfemale: {
      brother1: "Al",
      brother1: "El",
    },
  },
};

const { name } = profile; // const name = profile.name

const { sister2, sister1 } = profile.sister;
const { brother2: saudaraLaki2, brother1: saudaraLaki1 } = profile.brother.brothermale;

console.log(name);
console.log(sister1);
console.log(saudaraLaki1);

// DESTRUCTURING ARRAY
const rgb = [255, 140, 0];

// before using destructing
// const red = rgb[0]
// const green = rgb[1]
// const blue = rgb[2]

// destructing assignment
const [red, green, blue] = rgb;
// nama variabel bisa diubah ubah yang terpenting adalah peletakannya

// console.log(red);
