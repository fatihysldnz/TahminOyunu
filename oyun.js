// bilgisayara 1 ile 20 arasinda sayi tutturulacak

let rastgeleSayi = Math.floor(Math.random() * 20 + 1);

let puanPc = 10;
let rekorPc = 0;

// her kontrol et butonuna tiklandiginda calisacak
document.querySelector(".kontrol").onclick = function () {
  const tahmin = document.querySelector(".tahmin").value;

  //todo tahmin dogruysa
  if (tahmin == rastgeleSayi) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").textContent = rastgeleSayi;

    document.querySelector(".question").textContent = "✔️";
    document.querySelector(".question").style.backgroundColor = "#eee";

    document.querySelector(".mesaj").textContent = "🎈Tebrikler Kazandınızz🎈";

    //?rekoru guncelle
    if (puanPc > rekorPc) {
      rekorPc = puanPc;
      document.querySelector(".rekor-skor").textContent = puanPc;
    }
  } else {
    //todo tahmin yanlissa

    if (puanPc > 1) {
      puanPc--;

      document.querySelector(".question").textContent = "X";
      document.querySelector(".question").style.backgroundColor = "red";
      //  document.querySelector(".question").style.c

      let mesaj = document.querySelector(".mesaj");
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "❌❌ Arttır⏫")
        : (mesaj.textContent = "❌❌ Azalt⏬");
      document.querySelector(".skor").textContent = puanPc;
    } else {
      document.querySelector(".mesaj").textContent =
        "Zoorrtt - Oyunu kaybettiniz 😔";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
};

//! tekrar butonuna tiklandiginda baslangic degerleri yuklensin
document.querySelector(".tekrar").onclick = () => {
  //function seklinin diger hali
  rastgeleSayi = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".question").textContent = "?";
  document.querySelector(".mesaj").textContent = "Tahmine Baslaniyorr..!";
  puanPc = 10;
  document.querySelector(".skor").textContent = puanPc;
  document.querySelector(".tahmin").value = " ";
};

//todo klavyeden bir tusa basıldığında calıs

document.querySelector(".tahmin").onkeydown = function (olay) {
  if (olay.keyCode == 13) {
    //? enter tusu
    document.querySelector(".kontrol").onclick();
  }
  if (olay.keyCode == 82) {
    //? R tusu
    document.querySelector(".tekrar").onclick();
  }
};
