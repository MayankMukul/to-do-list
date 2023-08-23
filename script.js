let inputListTitle = document.querySelector(".input-list-title");
let listItem = document.querySelectorAll(".list-item");
let btnSaveList = document.querySelector(".savelist");
let btnClearList = document.querySelector(".clearlist");


function loadlist() {
    
    
        if (localStorage.getItem("title")!==null && localStorage.getItem("items")!==null){
            let titledata = localStorage.getItem("title");
            console.log(titledata);
            inputListTitle.value = titledata;
            
            let listData = localStorage.getItem("items");
            let data = listData.split(',');
            for (let i in data){
                listItem[i].value = data[i];
            }
            

        
    }else {
        inputListTitle.value = "";
        listItem[0].value = "";
        listItem[1].value = "";
        listItem[2].value = "";
        listItem[3].value = "";
        console.log("hello there ");
    }
}

function saveList(){
    console.log("title : "+inputListTitle.value);
    let dataArray = []
    for(let i of listItem){
        dataArray.push(i.value);
    }
    console.log(dataArray);

    localStorage.setItem("title",inputListTitle.value);
    localStorage.setItem("items",dataArray);

    console.log("local storage set");
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