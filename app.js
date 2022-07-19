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

// // Menuliskan string ke file (asynchronous) *gaya penulisan callback
// fs.writeFile("data/test.txt", "Hello World secara Asyncronous", (err) => {
//   console.log(err); // null karena fungsi ini tidak meng return apapun
// });

// // Membaca isi file (synchronous)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// // console.log(data); //<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 73 65 63 61 72 61 20 41 73 79 6e 63 72 6f 6e 6f 75 73>
// // yang tampil adalah Buffernya, bukan data string. agar berubah menjadi string, pakai functiong toString

// // console.log(data.toString());
// // // jika menggunakan encoding "utf-8" maka tidak perlu menggunakan toString
// // // penggunaan encoding "utf-8" contohnya untuk mengubah yang tadinya Buffer menjadi huruf latin
// console.log(data);

// // Membaca isi file (Asynchronous) *gaya penulisan callback
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   //(err, data) merupakan 2 callback. Data itu yg dikembalikan dari isi filenya
//   if (err) throw err; //throw(melemparkan) sama seperti return karna langsung keluar dari function
//   console.log(data); // jika berhasil
// });

/**
 * Readline
 sebuah module untuk membaca apa yg dituliskan nanti ke command prompt/ di terminalnya
 */
const Readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // proses ini apa yg dilakukan di terminal
  output: process.stdout, // proses ini apa yg kita kirimkan nanti
});

rl.question("Masukkan nama anda : ", (nama) => {
  // (nama) menampung ke dalam sebuah callback function
  console.log(`Terimakasih ${nama}`);

  rl.close();
});
