

let arr = new Array();
main();

function main() {
    document.getElementById("com1").innerText =arr[arr.length-1];
    document.getElementById("com2").innerText = arr[arr.length-2];
    document.getElementById("com3").innerText = arr[arr.length-3];
    document.getElementById("com4").innerText = arr[arr.length-4];
    console.log(arr);    
}



function inputcom() {
    x = document.getElementById("coment").value;
    arr.push(x);
}

function inputname() {
    x = document.getElementById("name").value;
    alert('Привет ' + x);
}
