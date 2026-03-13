// const tombol = document.querySelector(".contact-btn");
// tombol.addEventListener("click", function(){
//     alert("Matursuwun gan sudah mampir")
// }
// );
const contacBtn = document.querySelector(".contact-btn");
contacBtn.addEventListener("click",function(){
    window.location.href = "mailto:wahyubrotoaji@gmail.com";
});
const pengalaman = document.querySelectorAll(".experience-list li");
pengalaman.forEach(function(item){
    item.addEventListener("click", function(){
        item.style.background = "#dfe6ed";
        item.style.transform = "scale(1.03)";

        setTimeout(function(){
            item.style.background = "";
            item.style.transform = "scale(1)";
        },300);

    });
});

// window.onload = function(){
//     console.log("Matur Suwun sampun mampir 🙏")
// };
document.addEventListener("DOMContentLoaded", function(){

const emailBtn = document.querySelector(".email-btn");
const githubBtn = document.querySelector(".github-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

emailBtn.addEventListener("click", function(){
    window.open("mailto:wahyubrotoaji@gmail.com");
});

githubBtn.addEventListener("click", function(){
    window.open("https://github.com/");
});

whatsappBtn.addEventListener("click", function(){
    window.open("https://wa.me/6289646555748");
});

});