const gambar = document.getElementById("gambar");
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);

const buttons = document.querySelectorAll(".button");
buttons.forEach((index, value) => {
    index.addEventListener("click", function(){
        console.log(`Anda menekan tombol ${value}`);
    })
})

const dicoding = document.getElementById("dicodingLink");
dicoding.innerText = "Belajar Programming di Dicoding";