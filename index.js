const bar = document.getElementById("bar");
const listContainer = document.getElementById("List-container");

function touch(){
    if(bar.value === ''){
        alert("You have to write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = bar.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    bar.value = '';

    
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);