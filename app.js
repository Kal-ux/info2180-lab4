window.onload = function(){
    document.getElementById("button").onclick = function(){
        show_results(document.getElementById("text_Field").value)
    }
}

function show_results(res) {
    if (window.XMLHttpRequest) {
        xhr=new XMLHttpRequest();
      }
    
    xhr.onreadystatechange=function() { 
        if (this.readyState==4 && this.status==200) {
          document.getElementById("results").innerHTML=this.responseText;

        }
    }
    xhr.open("GET","http://localhost/info2180-lab4/superheroes.php?q="+res,true);
    xhr.send();
}
