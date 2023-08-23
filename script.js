let inputListTitle = document.querySelector(".input-list-title");
let listItem = document.querySelectorAll(".list-item");
let btnSaveList = document.querySelector(".savelist");
let btnClearList = document.querySelector(".clearlist");

function loadlist() {
    
    if (localStorage !== null){
        if (localStorage.getItem("title")!==null && localStorage.getItem("items")!==null){
            let data = localStorage.getItem("title");
            console.log(data);
            inputListTitle.value = data;
            let str = localStorage.getItem("items");
            let dataitems = str.split(" ");
            listItem[0].value = dataitems[0];
            listItem[1].value = dataitems[1];
            listItem[2].value = dataitems[2];
            listItem[3].value = dataitems[3];
            console.log(dataitems);

        }
    }else {
        inputListTitle.value = "";
        //listItem.value = "";

    }
}

function saveList(){
    console.log("title : "+inputListTitle.value);
    console.log("items : "+listItem[0].value,listItem[1].value,listItem[2].value,listItem[3].value);

    localStorage.setItem("title",inputListTitle.value);
    localStorage.setItem("items",listItem[0].value+" "+listItem[1].value+" "+listItem[2].value+" "+listItem[3].value);

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