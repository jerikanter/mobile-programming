/* 
Anggota Kelompok:
- Bolang, Geovanny Hezkie
- Tumewu, Mawar Sharon
- Kanter, Jeri Leri
- Rainer Cristian
- Makawekes, Yanes Theodora

EXERCISE #2

DESTRUCTURING.
Masing-masing kelompok pelajari konsep destructuring dan buat contoh:
- Destructuring (Array & Object)
- Destructuring dengan mengambil sebagian item (Array & Object)
- Destructuring dengan menggunakan default value (Array & Object)
- Destructuring dengan menggunakan rest operator (Array & Object)
*/

//1 - Destructuring
//Array
//1.1
let sayur = ["kangkung", "bayam", "sawi"];
let [sayur1, sayur2, sayur3] = sayur;
console.log(sayur1);
console.log(sayur2);
console.log(sayur3);

//1.2
let buah = ["mangga", "jeruk", "pepaya", "nanas"];
let [buah1, buah2, buah3, buah4] = buah;

console.log(buah1)
console.log(buah2)
console.log(buah3)
console.log(buah4)

//1.3
let sosmed = ["facebook", "twitter", "whatsapp"]
let [sosmed1, sosmed2, sosmed3] = sosmed;

console.log(sosmed1)
console.log(sosmed2)
console.log(sosmed3)

//1.4
let merklaptop = ["Asus", "Acer", "Lenovo"]
let [merklaptop1, merklaptop2, merklaptop3] = merklaptop

console.log(merklaptop1)
console.log(merklaptop2)
console.log(merklaptop3)

//1.5
let mie = ["Indomie", "Supermie", "Mie Sedap"]
let [mie1, mie2, mie3] = mie

console.log(mie1)
console.log(mie2)
console.log(mie3)

//1.6
let boba = ["Taro", "Chocolate", "Brown Sugar", "Grass Milk with Jelly"]
let [firstBoba, secondBoba, thirdBoba, fourthBoba] = boba

console.log(firstBoba)
console.log(secondBoba)
console.log(thirdBoba)
console.log(fourthBoba)

//1.7
let dramaAsia = ["Drakor (Drama korea)", "Dracin (Drama cina)", "Drajep (Drama jepang)"]
let [drama1, drama2, drama3] = dramaAsia

console.log(drama1)
console.log(drama2)
console.log(drama3)


//Object
//1.1
let orang = {
    nama : "Geovanny",
    umur : 17,
    jabatan : "Ketua Kelompok 1",
    sakit : true
};

let { nama, umur, jabatan, sakit} = orang;
console.log(orang);

//1.2
let orang2 = { 
    name: "Raineer",
    age: 76,
    job: "Student",
    maritalStatus: false
};

let { name, age, job, maritalStatus} = orang2
console.log(orang2)

//1.3
let buahMangga = {
    fruit: "Mangga",
    warnaLuar: "Hijau",
    rasa: "Asam"
}

let { fruit, warnaLuar, rasa} = buahMangga
console.log(buahMangga)

//1.4
let buahPisang = {
    fruit1: "Pisang",
    warnaLuar1: "Kuning",
    rasa1: "Manis"
}

let { fruit1, warnaLuar1, rasa1} = buahPisang
console.log(buahPisang)

//1.5
let mobil = {
    merek: "Tesla",
    tahun: 2022,
    warna: "Hijau Tosca Kehitaman",
    terjualHabis: true
 }
 let {merek, tahun, warna, terjualHabis} = mobil
 console.log(mobil)
 

//1.6
let wifiStatus = {
    ssid: "Unklab-Wifi-Student",
    speed: "200Mbps",
    security: "WPA2PSK",
    status: true
}

let { ssid, speed, security, status} = wifiStatus
console.log(wifiStatus)

//1.7
let batteryStatus = {
    indicator: 97,
    powerPlan: "Balanced",
    statusCharging: false
}

let {indicator, powerPlan, statusCharging} = batteryStatus
console.log(batteryStatus)



//2 - Destructuring dengan mengambil sebagian item

//Array
//2.1
let [nama1, nama2, nama3, , ,] = ["rainer", "geovanny", "jerry", "mawar", "yanes"];

console.log(nama1);
console.log(nama2);
console.log(nama3);

//2.2
let [merkhp1, merkhp2, merkhp3, , , ,] = ["Samsung", "Xiaomi", "Realme", "Infinix", "iPhone", "Advan"]

console.log(merkhp1)
console.log(merkhp2)
console.log(merkhp3)

//2.3
let [fakultas1, fakultas2, fakultas3, , ,] = ["FIK", "FEKON", "FKIP", "FKEP", "FIP"]

console.log(fakultas1)
console.log(fakultas2)
console.log(fakultas3)

//2.4
let [musik1, musik2, , ,] = ["Pop", "Rock", "Jazz", "Reggea"]

console.log(musik1)
console.log(musik2)

//2.5
let [suara1, suara2, , , ,] = ["Sopran", "Alto", "Tenor", "Baritone", "Bass"]

console.log(suara1)
console.log(suara2)

//2.6
let [warna1, warna2, warna3, , ,] = ["Merah", "Biru", "Kuning", "Ungu", "Putih"]

console.log(warna1)
console.log(warna2)
console.log(warna3)

//2.7
let [kpop1, kpop2, kpop3, , ,] = ["NCT 127", "NCT Dream", "NCT U", "NCT 2018", "NCT 2020"]

console.log(kpop1)
console.log(kpop2)
console.log(kpop3)


//Object
//2.1
let spekHp = {
    OS: "Android Nougat",
    prosesor: "Snapdragon 865",
    RAM: 4
  };
  
  let { OS } = spekHp;
  console.log(OS); 

  
//2.2
let sabun = {
    merekSabun: "Daia",
    jenisSabun: "Detergen",
    berat: "200 kg"
  };
  
  let { jenisSabun } = sabun;
  console.log(jenisSabun);


//2.3
let shampoo = {
    merkShampoo: "Sunsilk",
    jenisShampoo: "Conditioner",
    harga: 12000
  };
  
  let {merkShampoo} = shampoo
  console.log(merkShampoo)
  

//2.4
let minumanSaya = {
    merekMinuman: "Coca Cola",
    jenisBotol: "Kaleng",
    beratMinuman: "1 L"
};

let {merekMinuman} = minumanSaya
console.log(merekMinuman)


//2.5
let sendal = {
    merekSendal: "Nevada",
    warnaSendal: "Pink",
    harga: 27000
};
let {warnaSendal} = sendal
console.log(warnaSendal)

//2.6
let sepatuAnda = {
    merkSepatu: "Nike",
    asalBuatan: "Indonesia",
    ukuranSepatu: 40
}

let {asalBuatan} = sepatuAnda
console.log(asalBuatan)


//2.7
let lampuBersama = {
    merkLampu: "Phillips",
    asalBuatan: "Germany",
    ukuranSepatu: 170
}

let {merkLampu} = lampuBersama
console.log(merkLampu)



//3 - Destructuring dengan menggunakan default value
//Array

//3.1
let [jpop1="akb48", jpop2="nmb48"] = ["ngt48"]

console.log(jpop1);
console.log(jpop2);


//3.2
let [cpop1 = "snh48", cpop2 = "gnz48"] = ["hk48"]

console.log(cpop1) //hk48
console.log(cpop2) //gnz48

//3.3
let [jkt48 = "ipop1", smash = "ipop2", cjr = "ipop3"] = ["ipop4"]

console.log(jkt48) //ipop4

//3.4
let [gpop1 = "snh488", gpop2 = "gnz488", gpop3 = "tpe488"] = ["pov48"]
console.log(gpop1);

//3.5
let [nasi1 = "nasiKuning", nasi2 = "nasiGoreng", nasi3 = "nasiPutih"] = ["nasiJaha"]

console.log(nasi1)

//3.7
let [crypto1 = "BTC", crypto2 = "ETH", crypto3 = "SHIB"] = ["DOGE"]
console.log(crypto1)


//Object
//3.1
function rumah({ jalan = 'Jalan X', nomor = '23', kota = 'Kota Y' }) {
    return `${jalan} No. ${nomor}, ${kota}`;
}
  
  let alamat = rumah({ jalan: 'Jalan Melati', kota: 'Kab. Minut' });
  
  console.log(alamat);

//3.2
function kontrak ({mk = 'Front End', dosen = 'Geovanny', sks = '3'}) {
    return `Matakuliah: ${mk}, Dosen: ${dosen}, Jumlah SKS: ${sks}`;
}
let add = kontrak ({mk: 'Back End', dosen: 'Mawar'});
console.log(add);

//3.3
function masakan ({makanan = 'Midal', harga = 'Rp.10000'}){
    return `Saya makan ${makanan} dengan harga ${harga}`;
}
let beli = masakan ({makanan: 'Mie Cakalang'});
console.log(beli);

//3.4
function minuman ({merk = 'Aqua', botol = '10'}){
    return `Aku membeli ${merk} berjumlah ${botol}`;
}
let order = minuman ({merk: 'Minarale'});
console.log(order);

//3.5
function program ({bahasa = 'Phyton', bahasa1 = 'C++'}){
    return `Saya menguasai bahasa pemogramman ${bahasa} dan ${bahasa1}`;
}
let coding = program ({bahasa: 'JavaScript', bahasa1: 'C#'});
console.log(coding);

//3.6
function mk1 ({mk2 ='Automata', mk3 ='Statistk'}){
    return `Kami sangat menyukai matakuliah ${mk2} dan ${mk3}`;
}
let mk4 = mk1 ({mk2:'Research Method', mk3: 'Research Project/Skripsi'});
console.log(mk4);

//3.7
function relationship ({status ='Single', predikat = '5'}){
    return `Dia memiliki status ${status} dan berlangsung selama ${predikat} tahun`;
}
let realita = relationship ({predikat: '10'});
console.log(realita);



// 4 - Destructuring dengan menggunakan rest operator

// Array
//4.1
let [dinoGroup1, dinoGroup2, ...dinoGroup] = ["T-Rex", "Brachio", "Tricera"]
console.log(dinoGroup1, dinoGroup2, ...dinoGroup)

//4.2
let [menu1, ...menu] = ["Ayam Geprek", "Ikan Bakar", "Mie Soto", "Ikan Rica-Rica", "Ice Cream"]
console.log(menu1, ...menu)

//4.3
let [sertifikat, ...sertifikats] = ["Sisco", "Oracle", "Microsoft", "AWS"]
console.log(sertifikat, ...sertifikats)

//4.4
let [itemlegend, ...item] = ["Tupperware", "Piring", "Botol Minuman"]
console.log(itemlegend, ...item)

//4.5
let [sepatu, ...sepatu1] = ["Solid Gold Ovo x Air Jordans", " Michael Jordan Game Worn Converse Fastbreak", "Air Jordan 12"]
console.log(sepatu, ...sepatu1)

//4.6
let [car, ...cars] = ["Rolls-Royce Boat Tail", "Bugatti la Voiture Noire", "Pagani Zonda HP Barchetta", "Rolls-Royce Sweptail"]
console.log(car, ...cars)

//4.7
let [batu, ...batu1] = ["Diamnod", "Ruby", "Sapphere", "Chrysoberly", "Topaz"]
console.log(batu, ...batu1)

// Object
//4.1
let outsiderDekat = {
    Title: "Kost-kostan",
    Putra: 500,
    Putri: 700
};
let {Title, ...kost} = outsiderDekat;
console.log(outsiderDekat)//{Title: 'Kost-kostan', Putra: 500, Putri: 700}


//4.2
let vga = {
    namaVga: "Nvidia GTX 1050Ti",
    ramVga: 4,
    ddr5: true
}

let {namaVga, ...nvidia} = vga
console.log(vga)


//4.3
let unicorn = {
    perusahaan: "Tokopedia",
    pemilikNegara : "Indonesia",
    pendapatan: 150000000
}

let {perusahaan, ...marketplace} = unicorn
console.log(unicorn)


//4.4
let alasKaki = {
    jenisAlaskaki: "Sendal",
    merkAlaskaki: "Yeye",
    hargaAlaskaki: 12000
}

let{jenisAlaskaki, ...selop} = alasKaki
console.log(alasKaki)


//4.5
let galon = {
    merkGalon: "Aquajah",
    isiGalon: "12Liter",
    hargaGalon: 75000
}

let {merkGalon, ...aqua} = galon
console.log(galon)

//4.6
let speaker = {
    merkSpeaker: "Gamen",
    powerInput: "5v",
    frekuensi: "120khz",
    stereo: true
}
let {merkSpeaker, ...speakerLaptop} = speaker
console.log(speaker)

//4.7
let susu = {
    merkSusu: "HiLo",
    jenisSusu: "Bubuk",
    isiSusu: "20gram",
    harga: 2000
}

let {merkSusu, ...susuBubuk} = susu
console.log(susu)
    
