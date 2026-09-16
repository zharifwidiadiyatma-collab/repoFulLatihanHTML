let skorMenang = 0;
let skorKalah = 0;
let skorSeri = 0;

function main(pilihan_user) {
    //alert(pilihan_user);
    
    //set pilihan komputer random
    const komputer = ["BATU", "KERTAS", "GUNTING"];
    const random = Math.floor(Math.random() * komputer.length);
    let pilihan_komputer = komputer[random];

   document.getElementById("pil_com").src =  pilihan_komputer + ".jpg";
   document.getElementById("pil_user").src = pilihan_user + ".jpg";
  

//seri, menang, kalah
//kertas vs batu > menang,
//batu vs gunting > menang, 
//gunting vs kertas > menang
    if (pilihan_user == pilihan_komputer) {
        skorSeri++;
       document.getElementById("hasil").innerHTML = "SERI";
} else if (
    (pilihan_user==="KERTAS" && pilihan_komputer == "BATU") ||
    (pilihan_user==="BATU" && pilihan_komputer == "GUNTING") ||
    (pilihan_user==="GUNTING" && pilihan_komputer == "KERTAS")) {
        skorMenang++;
        document.getElementById("hasil").innerHTML = "MENANG!";
} else {
    skorKalah++;
    document.getElementById("hasil").innerHTML = "KALAH!";
}
document.getElementById("skor").innerHTML = "menang: " + skorMenang + " | kalah: " + skorKalah + " | seri: " + skorSeri;
      
}


