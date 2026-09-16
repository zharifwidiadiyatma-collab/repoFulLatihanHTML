
    //Letakkan kode JavaScript Anda di sini
    console.log("latihan JavaScript!");

    function masukan_nama() {
        let nama = prompt("Masukkan nama Anda: ");
        console.log("Haloo " + nama);
        document.getElementById("jawaban").innerHTML = "Haloo " + nama;
    }

    document.getElementById("pertanyaan").onclick = function() {
        //ini isinya
        let jawab = confirm("Apa Sudah Sarapan? ");
        if (jawab == true) {
            console.log("Alhamdulillah, sudah sarapan");
            document.getElementById("jawaban").innerHTML = "Alhamdulillah, sudah sarapan";
        } else {
            console.log("Sebentar lagi istirahat bisa sarapan");
            document.getElementById("jawaban").innerHTML = "Sebentar lagi istirahat bisa sarapan";
        }
    }
    let gelap = false;//putih
    document.getElementById("tema").onclick = function() {
          if (gelap == true) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        gelap = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        gelap = true;
    }
    }

  
  
