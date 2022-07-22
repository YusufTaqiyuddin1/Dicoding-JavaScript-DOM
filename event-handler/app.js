function welcome(){
    alert(`Memunculkan Element HTLM`);
    const contents = document.querySelector(".contents");
    contents.removeAttribute('hidden');
}

function increment(){
    const tambah = document.getElementById("count");
    tambah.innerText++;

    if(tambah.innerText == 7){
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";
        
        const image = document.createElement("img");
        image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");

        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage);
        contents.appendChild(image);
    }
}

// event handler
// document.body.onload = welcome;
// document.getElementById("incrementButton").onclick = increment;

// event handler addEventListener()
window.addEventListener('load', welcome);
document.getElementById('increamentButton').addEventListener('click', increment);