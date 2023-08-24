let inputListTitle = document.querySelector(".input-list-title");
let listItem = document.querySelectorAll(".list-item");
let btnSaveList = document.querySelector(".savelist");
let btnClearList = document.querySelector(".clearlist");
let msgbox = document.querySelector(".msg-box");


function loadlist() {
        if (localStorage.getItem("title")!==null && localStorage.getItem("items")!==null){
            let titledata = localStorage.getItem("title");
            inputListTitle.value = titledata;
            
            let listData = localStorage.getItem("items");
            let data = listData.split(',');
            for (let i in data){
                listItem[i].value = data[i];
            }       
    }else {
        inputListTitle.value = "";
        for (let i of listItem){
            i.value = "";
        }
    }
}

function saveList(){
    let dataArray = []
    for(let i of listItem){
        dataArray.push(i.value);
    }

    localStorage.setItem("title",inputListTitle.value);
    localStorage.setItem("items",dataArray);
    msgbox.innerText = `Saved`;

}

function clearList(){
    console.log("cleared");
    localStorage.removeItem('title');
    localStorage.removeItem('items');
    console.log("deleted");
    loadlist();

}
    
loadlist();

btnSaveList.addEventListener("click",saveList);
btnClearList.addEventListener("click",clearList);