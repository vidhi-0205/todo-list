
const inputBox=document.getElementById("input-box")
const listul=document.querySelector("ul")

function addTask(){
    if(inputBox.value===''){
        alert("add some task")
    }else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listul.appendChild(li);
    document.getElementById("clear").style.display="block"
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
inputBox.value=""
saveData()
}

listul.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        const total=document.querySelectorAll("li").length
const checked=document.querySelectorAll("li.checked").length
if(total>0 && checked===total){
    confetti()
}

        saveData()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

inputBox.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        addTask()
    }
})

function clearTask(){
    if(listul.children.length>0){
    listul.innerHTML='';
    localStorage.removeItem("data");
    document.getElementById("clear").style.display="none"
    }else{
        alert("add some task first!")
    }
}

function saveData(){
    localStorage.setItem("data",listul.innerHTML)
}
function showTask(){
    listul.innerHTML=localStorage.getItem("data");
}
showTask()