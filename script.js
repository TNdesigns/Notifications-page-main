document.addEventListener("DOMContentLoaded", function() {
    const maar = document.getElementById("rd-btn");
    const n1 = document.getElementById("nf1");
    const n2 = document.getElementById("nf2");
    const n3 = document.getElementById("nf3");
    const dt = document.getElementById("dot1");
    const dt2 = document.getElementById("dot2");
    const dt3 = document.getElementById("dot3");
    const number = document.getElementById("n-num");

    maar.addEventListener("click", function () {
        n1.style.backgroundColor = "white";
        dt.style.opacity = "0";
        n2.style.backgroundColor = "white";
        dt2.style.opacity = "0";
        n3.style.backgroundColor = "white";
        dt3.style.opacity = "0";
        number.textContent = "0";
    })
})
