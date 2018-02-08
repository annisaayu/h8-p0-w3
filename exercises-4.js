var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(){

  input.splice(1,5,input[1]+"Elsharawy","Provinsi "+input[2],input[3],"Pria", "SMA Internasional Metro");
  console.log(input);//modifikasi data

  var tanggal = input[3].split("/");// memisahkan tanggal dengan split

  //mengubah bulan dari angka menjadi kata
  var bulan = Number(tanggal[1]);
  switch(bulan){
    case 1: { bulan = 'Januari'; break; }
    case 2: { bulan = 'Februai'; break; }
    case 3: { bulan = 'Maret'; break; }
    case 4: { bulan = 'April'; break; }
    case 5: { bulan = 'Mei'; break; }
    case 6: { bulan = 'Juni'; break; }
    case 7: { bulan = 'Juli'; break; }
    case 8: { bulan = 'Agustus'; break; }
    case 9: { bulan = 'September'; break; }
    case 10: { bulan = 'Oktober'; break; }
    case 11: { bulan = 'November'; break; }
    case 12: { bulan = 'Desember'; break; }
  }
  console.log(bulan);

  //Konversi tipe data tanggal
  var arrTanggal=[];
  var convertTanggal;
  for(var i = 0; i < tanggal.length; i++){
    convertTanggal = Number(tanggal[i]);
    arrTanggal.push(convertTanggal);
  }

  //Mengurut tanggal descending
  arrTanggal.sort(
    function(value1, value2){
      return value1 < value2
    }
  )
  console.log(arrTanggal[2]);
  console.log(tanggal.join("-"));//menggabungkan tanggal dengan "-"
  console.log(input[1].slice(0,15)); // memotong elemen input ke-2
}

dataHandling2(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
