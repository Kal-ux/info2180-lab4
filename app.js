window.onload = function(){
   load_results();
}

function load_results() {
    var xhttp = new XMLHttpRequest();
    var x = document.getElementById("button");
    xhttp.open("GET", "http://localhost/info2180-lab4/superheroes.php", true);
    xhttp.send(null);
    response = xhttp.responseText
    console.log(response)
    x.onclick = function(){
        alert(xhttp.responseText);  
    }
}