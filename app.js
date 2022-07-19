// Core Module
// File System
const fs = require("fs");

// // menuliskan string ke file (synchronous)
// fs.writeFileSync("test.txt", "Hello World secara synchronous!");
// // () yang 1 nama file, yang ke 2 tulisan/isi dari file nya

// // Menampung Error menggunakan blok try catch
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara Synchronous!");
// } catch (e) {
//   console.log(e);
// }
// //   ini error karena tidak ada folder data. jikapun ada, maka tidak error

// Menuliskan string ke file (asynchronous) *gaya penulisan callback
fs.writeFile("data/test.txt", "Hello World secara Asyncronous", (err) => {
  console.log(err); // null karena fungsi ini tidak meng return apapun
});
