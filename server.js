require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  authSource: 'admin' // Menggunakan authSource 'admin' untuk autentikasi
})
.then(() => {
  console.log('Koneksi ke MongoDB berhasil!');
  // Membuat database jika belum ada, misalnya 'nama_database' yang sudah disebutkan di .env
  const db = mongoose.connection.db;
  const collection = db.collection('test');  // contoh koleksi
  collection.insertOne({ key: 'value' }); // Contoh pembuatan data dalam koleksi
})
.catch((err) => {
  console.log('Gagal koneksi ke MongoDB:', err.message);
});

// Setting server untuk berjalan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
