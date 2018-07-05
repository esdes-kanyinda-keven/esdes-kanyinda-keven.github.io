console.log(document);

var name = "Keven";

function changeName(newName) {
   name = newName;
   alert(name);
}

function changeClass () {
   var button = document.getElementById("myButton");
   if (button.className == "rotate") {
       button.className = "";

   } else {
       button.className = "rotate";
   }

}

anime ({
    targets: '#coming-soon',
    scale: 1.2,
    opacity: 1,
    delay: 1000
    
});
