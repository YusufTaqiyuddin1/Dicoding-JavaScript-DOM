const buttons = document.querySelectorAll(".buttons");
buttons.forEach((index, value) => {
    index.addEventListener("click", function(){
        ubahGambar(value);
    })
});

function ubahGambar(value){
    const img = document.getElementById("gambar");
    if (value == 1){
        img.setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png"
        );
    } else if(value == 2){
        img.setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png"
        );
    } else if(value == 3){
        img.setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png"
        );
    } else if(value == 4){
        img.setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png"
        );
    } else{
        img.setAttribute(
          "src",
          "https://www.awn.com/sites/default/files/styles/original/public/image/featured/1015027-nickelodeon-teams-usps-spongebob-mailpants.jpg?itok=UIeo_nAW"
        );
    }
}