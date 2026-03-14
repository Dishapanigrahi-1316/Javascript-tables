function Tables(){
    var n=prompt("enter your number");
    let result="";
    for(let i=1;i<=10;i++){
         result += `<li>${n} x ${i} = ${n*i}</li>`;
    }
    let box = document.getElementById("output");
            box.style.display = "block";   // Show box
            box.innerHTML = result;
        }