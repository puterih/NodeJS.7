// Core Module
// File System
const fs = require("fs");

// menuliskan string ke file (synchronous)
fs.writeFileSync("test.txt", "Hello World secara synchronous!");
// () yang 1 nama file, yang ke 2 tulisan/isi dari file nya
