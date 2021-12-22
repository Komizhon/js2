var age = +prompt("Yoshiz nechchida? ")

if (age <= 18 && age >= 0) {
    alert("Hali yoshsiz o'qishingiz kerak")
} else if (age <= 50 && age >= 19) {
    alert("Ishlashingiz kerak ")
} else if (age <= 59 && age >= 51) {
    alert("Yaqinda pensiyaga chiqasiz")
} else if (age <= 150 && age >= 60) {
    alert("Pensionerga o'hshaysiz hali tirik bo'lsangiz :))")

}else{
    alert("Nimadir noto'g'ri ketib qoldi")
}




    // } else {
//     if (isNaN(age)) {
//         alert("Nimadir noto'g'ri ketib qoldi")
//     }
//     else{
//         alert("Nimadir noto'g'ri ketib qoldi")
//     }
// }