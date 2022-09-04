document.getElementsByClassName("plus")[0].onclick = function () {
    document.getElementById("qty1").innerHTML++;

    if ((document.getElementById("qty1").innerHTML != "0") || (document.getElementById("qty2").innerHTML != "0")) {
        shopPrice();
        calcPrice();
    }
};

document.getElementsByClassName("plus")[1].onclick = function () {
    document.getElementById("qty2").innerHTML++;

    if ((document.getElementById("qty1").innerHTML != "0") || (document.getElementById("qty2").innerHTML != "0")) {
        shopPrice();
        calcPrice();
    }
};

document.getElementsByClassName("minus")[0].onclick = function () {

    if (document.getElementById("qty1").innerHTML === "0") {
        document.getElementById("qty1").innerHTML -= 0;
    }
    else {
        document.getElementById("qty1").innerHTML -= 1;
    }

    if ((document.getElementById("qty1").innerHTML === "0") && (document.getElementById("qty2").innerHTML === "0")) {
        zeroHTML();
    }
    else {
        calcPrice();
    }
};

document.getElementsByClassName("minus")[1].onclick = function () {

    if (document.getElementById("qty2").innerHTML === "0") {
        document.getElementById("qty2").innerHTML -= 0;
    }
    else {
        document.getElementById("qty2").innerHTML -= 1;
    }

    if ((document.getElementById("qty1").innerHTML === "0") && (document.getElementById("qty2").innerHTML === "0")) {
        zeroHTML();
    }
    else {
        calcPrice();
    }
};

function zeroHTML() {
    document.getElementsByClassName("total-price")[0].innerHTML = "$0";
    document.getElementsByClassName("total-price")[1].innerHTML = "$0";
    document.getElementsByClassName("total-price")[0].style.marginLeft = "217px";
    document.getElementsByClassName("total-price")[1].style.marginLeft = "255px";
}

function alertZero() {
    if (document.getElementsByClassName("total-price")[0].innerHTML === "$0" &&
        document.getElementsByClassName("total-price")[1].innerHTML === "$0") {
        alert("Can't process! Empty shopping cart...");
        document.getElementById("form-name").location.reload();
    }
    else {
        document.getElementById("form-name").action = "https://www.appreciationatwork.com/wp-content/uploads/2018/01/thank-you.jpg"
        
        document.getElementById("form-name").submit();
    }
}

function shopPrice() {
    document.getElementsByClassName("total-price")[0].style.marginLeft = "210px";
    document.getElementById("sp").innerHTML = "$19";
}

function calcPrice() {
    var total1 = parseInt(document.getElementById("qty1").innerHTML);
    var total2 = parseInt(document.getElementById("qty2").innerHTML);
    var summ = (total1 * 54.99) + (total2 * 74.99) + 19;
    document.getElementById("tp").innerHTML = "$" + summ.toFixed(2);

    if (document.getElementById("tp").innerHTML.length === 6) {
        document.getElementsByClassName("total-price")[1].style.marginLeft = "220px";
    }
    else if (document.getElementById("tp").innerHTML.length === 7) {
        document.getElementsByClassName("total-price")[1].style.marginLeft = "205px";
    }
    else if (document.getElementById("tp").innerHTML.length >= 8) {
        document.getElementsByClassName("total-price")[1].style.marginLeft = "190px";
    }
}