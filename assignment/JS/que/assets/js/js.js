let clrs = ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"];
let divs = document.querySelectorAll(".clBox");

setInterval(function () {
    let lastC = clrs[clrs.length - 1]
    clrs.pop();
    clrs.unshift(lastC);

    for (let i in clrs) {
        divs[i].style.background = clrs[i];
    }
}, 1000);