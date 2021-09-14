const biodata = {
  firstName: "fikri",
  lastName: "nadif",
  fullName: function () {
    //this untuk memanggil properti di dalam objek yang sama
    const setName = this.firstName + " " + this.lastName;
    return setName;
  },
};

console.log(biodata.fullName());

// built in method js
let kata = "javascript";
kata = kata.split("").reverse().join("");
console.log(kata);
