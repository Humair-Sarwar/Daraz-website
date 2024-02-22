let timing = document.querySelectorAll(".ending-in span");
let saveMore = document.getElementById("saveMore");
let cont = document.querySelector(".big-con");
// saveMore.addEventListener("mouseenter",()=>{
//     cont.style.opacity = "1";
//     saveMore.addEventListener("mouseleave",()=>{
//         cont.style.opacity = "0";
//     });
//     cont.addEventListener("mouseenter",()=>{
//         cont.style.opacity = "1";
//         cont.addEventListener("mouseleave",()=>{
//             cont.style.opacity = "0";
//         });
//     })
// })
setInterval(()=>{
    let dateget = new Date();
    timing[0].innerText = dateget.getHours();
    timing[1].innerText = dateget.getMinutes();
    timing[2].innerText = dateget.getSeconds();
},1000);


