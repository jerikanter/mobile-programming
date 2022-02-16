//1. PROMISE 
//a.
function helloWorld (){
  new Promise ((resolve)=>{
      console.log("Hello World");
  },2000);
}
helloWorld();

//b.
async function messages (){
  const msg = await helloWorld();
  console.log(msg);
}

//c.
async function messages (){
  setTimeout(()=>{
      const msg = await helloWorld();
      console.log(msg);
  },2000)
}
messages();

//2. Fetch
//2. FETCH
const ambilDataUser = document.querySelectir ('.input-keyword');
fetch ('https://reqres.in/api/users' + inputKeyword.value)
.then(response => console.log(response));

//3. Async Await

// a (kalo pake 'users', tidak jadi sir)
// const ambildataUser3 = async () => {
//     try {
//         const response = await fetch("https://reqres.in/api/users");
//         const users = await response.users();
//         console.log("\n\n\n3. ASYNC AWAIT");
//         console.log(users.data);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// a (klo pake 'json', jadi sir)
// const ambildataUser3 = async () => {
//     try {
//         const response = await fetch("https://reqres.in/api/users");
//         const json = await response.json();
//         console.log("\n\n\n3. ASYNC AWAIT");
//         console.log(json.data);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// ambildataUser3();

// 4. Class

class Orang{
  constructor(nama, umur)
  {
      this.nama = nama;
      this.umur = umur;
  }
  bekerja()
  {
     console.log(`${this.nama} sedang bekerja seperti biasa`);
  }
}
const user1 = new Orang("Geovanny", 22);
user1.bekerja();

//5. Inheritance
class Orang{
  constructor(nama, umur){
      this.nama = nama;
      this.umur = umur;
  }
  tidur(){
      console.log(`${this.nama} sedang tidur`);
  }
  makan(){
      console.log(`${this.nama} sedang makan`);
  }
}

class Pelajar extends Orang{
  constructor(nama, umur, namaSekolah){
      super(nama, umur);
      this.namaSekolah = namaSekolah;
  }
  belajar(){
      console.log(`${this.nama} sedang belajar di ${this.namaSekolah}`);
  }
}
const user = new Pelajar("John", 17, "Unklab");
console.log(user);