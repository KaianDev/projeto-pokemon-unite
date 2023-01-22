const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function alterar(){
    modal.classList.toggle("aberto");
}

console.log(linkVideo);

botaoTrailer.addEventListener("click",()=>{
    alterar();
    video.setAttribute("src",linkVideo);
});

fecharModal.addEventListener("click", ()=>{
    alterar();
    video.setAttribute("src","");
});

