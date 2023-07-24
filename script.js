const listcontainer = document.getElementById("list-container");
const inputbox = document.getElementById("input-box")

function addTask()
{
    if(inputbox.value === '')
    {
        alert("Enter Some Data");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveTask();
}
listcontainer.addEventListener("click",function(e){


    if(e.target.tagName === "LI"){
    
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
        
    }
    
});


function saveTask()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();