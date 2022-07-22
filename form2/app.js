document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  document.getElementById("inputNama").addEventListener("input", inputNama);
  document.getElementById("inputNama").addEventListener("focus", fokusText);
  document.getElementById("inputNama").addEventListener("blur", blurText);

  document.getElementById("inputCaptcha").addEventListener("change", capta);

  document.getElementById("inputCopy").addEventListener("copy", function () {
    alert("Anda telah men-copy sesuatu...");
  });
  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("Anda telah mem-paste sebuah teks...");
  });
});

function inputNama() {
  const inputNama = document.getElementById("inputNama");
  const jumlahKarakterDiketik = inputNama.value.length;
  const jumlahKarakterMaksimal = inputNama.maxLength;

  console.log(`Jumlah karakter diketik  : ${jumlahKarakterDiketik}`);
  console.log(`Jumlah Karakter Maksimal : ${jumlahKarakterMaksimal}`);

  const sisakarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
  const txtSisaKarakter = document.getElementById("sisaKarakter");
  txtSisaKarakter.innerText = sisakarakterUpdate.toString();

  const notifikasiSisaKarakter = document.getElementById(
    "notifikasiSisaKarakter"
  );

  if (sisakarakterUpdate === 0) {
    txtSisaKarakter.innerText = "Batas Maksimal Tercapai!";
  } else if (sisakarakterUpdate <= 5) {
    notifikasiSisaKarakter.style.color = "red";
  } else {
    notifikasiSisaKarakter.style.color = "black";
  }
}

function fokusText() {
  console.log("inputNama: focus");
  document.getElementById("notifikasiSisaKarakter").style.visibility =
    "visible";
}

function blurText() {
  console.log("inputNama: blur");
  document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
}

function capta() {
  const inputCaptcha = document.getElementById("inputCaptcha").value;
  if (inputCaptcha === "PRNU") {
    alert("Selamat! Captcha Anda lolos :D");
  } else {
    alert("Captcha Anda belum tepat :(");
    document.getElementById("submitButton").setAttribute("disabled", "");
  }
  event.preventDefault();
}
