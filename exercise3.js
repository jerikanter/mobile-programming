/* 
Anggota Kelompok:
- Bolang, Geovanny Hezkie
- Tumewu, Mawar Sharon
- Kanter, Jeri Leri
- Rainer Cristian
- Makawekes, Yanes Theodora
*/

// // 1.Module
// // - Export & Import
// const Truck = (brand) => (
//   {
//     brand: brand,
//     drive() {
//       console.log(this.brand, 'drive');
//     }
//   }
// )

// export default Truck;

// - Export As & Import As
// EXPORT
// export {namaVariabelLama as namaVariabelBaru};

// const warna = "Merah";
 
// let orang = {
//   nama: "Thoriq",
//   umur: 25,
//   alamat: "Jl. Kemang Raya",
// };
 
// function katakanHalo(user) {
//   console.log(`Hello, ${user}!`);
// }
 
// export { warna as color, orang as person, katakanHalo as sayHello }; //OUTPUT : SyntaxError: Unexpected token 'export'

// IMPORT
// import { namaVariabelLama as namaVariabelBaru } from ".exercise3.JS";

// // file user.js tempat mengexport
// import {
//   warnaKesukaan as favoriteColor,
//   orangBaru as newPerson,
//   katakanHalo as sayHello,
// } from "./user.js";
 
// console.log(favoriteColor); // Output: Merah
// console.log(newPerson); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
// sayHello(newPerson.nama); // Output: Hello, Thoriq!


// - Export Default
// greeting.js
// function sayHello(user) {
//   console.log(`Hello, ${user}!`);
// }
 
// export default sayHello;

// 2.Asyncronous JS
// - Contoh sederhana asyncronous JS menggunakan setTimeout()
// setTimeout(() => {
//   console.log("Cuci baju"); // proses asynchronous
// }, 2000);
// console.log("Menyapu");
// console.log("Mengepel");
// console.log("Memasak");

// // - Promise
// const condition = false;

// let newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     // apa yang dilakukan jika promise 'fulfilled'
//     resolve("Berhasil");
//   } else {
//     // apa yang dilakukan jika promise 'rejected'
//     reject(new Error("Error Gagal"));
//   }
// });

// newPromise.then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error.message); // Output: "Error Gagal"
// });


// - Menggunakan Promise menggunakan then()
// let conditionn = true;

// let newPromisee = new Promise((resolve, reject) => {
//   if (conditionn) {
//     // apa yang dilakukan jika promise 'fulfilled'
//     resolve("Berhasil");
//   } else {
//     // apa yang dilakukan jika promise 'rejected'
//     reject("Gagal");
//   }
// });

// newPromisee.then((result) => {
//   console.log(result); // Output: "Berhasil"
// });


// - Menggunakan Promise menggunakan Async/Await

// //Definisikan dahulu promise yang ingin digunakan
// let condition = true;
// let tesAsyncAwait = async (condition) => {
//   if (condition) {
//     return "Condition is fulfilled!";
//   } else {
//     throw "Condition is rejected!";
//   }
// };


// Membuat fungsi run menjadi asynchronous menggunakan async/await
// async function tesAsyncAwait() {
//   await 'Fulfilled';
// }

// const run = async (condition) => {
//   try {
//     const message = await tesAsyncAwait(condition);
//     console.log(message);  // Output: Condition is fulfilled!
//     console.log("After condition is fulfilled"); // Output: After condition is fulfilled
//   } catch (error) {
//     console.log(error);
//   }
// };

// run(true);

//3. Class in JS
class Laptop {
  constructor(merek, warna){
    this.merek = merek;
    this.warna = warna;

  }

  beliLaptop(){
    console.log(`Laptop dengan merek ${this.merek} telah dibeli`)
  }
}

const lenovo = new Laptop ('Lenovo, Hitam')
lenovo.beliLaptop();