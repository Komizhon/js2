var num1 = +prompt("Birinchi sonni kiriting")
var num2 = +prompt("Ikkinchi sonni kiriting")
var num3 = +prompt("Uchinchi sonni kiriting")

if (num1 >= num2 && num1 <= num3) {
    alert("O'rta qiymat " + num1)
} else if (num1 > num3 && num1 <= num2) {
    alert("O'rta qiymat " + num1)
} else if (num2 > num1 && num2 < num3) {
    alert("O'rta qiymat " + num2)
} else if (num2 > num3 && num2 < num1) {
    alert("O'rta qiymat " + num2)
} else if (num3 > num1 && num3 < num2) {
    alert("O'rta qiymat " + num3)
} else if (num3 > num2 && num3 < num1) {
    alert("O'rta qiymat " + num3)
}else{
    alert("Nimadur noto'g'ri ketdi")
}