let inputListTitle1 = document.querySelector(".input-list-title-1");
let inputListTitle2 = document.querySelector(".input-list-title-2");
let listItem1 = document.querySelectorAll(".list-item-1");
let listItem2 = document.querySelectorAll(".list-item-2");
let btnSaveList1 = document.querySelector(".savelist1");
let btnClearList1 = document.querySelector(".clearlist1");
let btnSaveList2 = document.querySelector(".savelist2");
let btnClearList2 = document.querySelector(".clearlist2");
let msgboxgreen = document.querySelectorAll(".msg-box-green");
let msgboxred = document.querySelectorAll(".msg-box-red");


function loadlist(title,items,listItem,inputListTitle,n) {
        if (localStorage.getItem(title)!==null && localStorage.getItem(items)!==null){
            let titledata = localStorage.getItem(title);
            inputListTitle.value = titledata;
            
            let listData = localStorage.getItem(items);
            let data = listData.split(',');
            for (let i in data){
                listItem[i].value = data[i];
            }   
            msgboxgreen[n].innerText = "Loaded"   
            console.log("if") 
    }else {
        inputListTitle.value = "";
        for (let i of listItem){
            i.value = "";
        }
        console.log("else")
    }
    console.log("loading")
}

function saveList(title,items,listItem,inputListTitle,n){
    console.log(listItem,inputListTitle,n);
    let dataArray = []
    for(let i of listItem){
        dataArray.push(i.value);
        console.log('array',dataArray,'i',i);
    }
       console.log("saveList to local storage")

    localStorage.setItem(title,inputListTitle.value);
    localStorage.setItem(items,dataArray);
    msgboxred[n].style.display="none";
    msgboxgreen[n].style.display="inline";
    msgboxgreen[n].innerText = `Saved`;

}

function clearList(title,items,listItem,inputListTitle,n){
    localStorage.removeItem(title);
    localStorage.removeItem(items);
    inputListTitle.value = "";
    for (let i of listItem){
             i.value = "";
         }
    msgboxgreen[n].style.display="none";
    msgboxred[n].style.display="inline";
    msgboxred[n].innerText = `Cleared`;

}


function firstlistSave() {
    let title1 = "title1";
    let items1 = "item1";
    saveList(title1,items1,listItem1,inputListTitle1,0);
}
function firstlistClear(){
    let title1 = "title1";
    let items1 = "item1";
    clearList(title1,items1,listItem1,inputListTitle1,0);
}
function loadfirst(){
    let title1 = "title1";
    let items1 = "item1";
    loadlist(title1,items1,listItem1,inputListTitle1,0);
}

function secondlistSave() {
    let title2 = "title2";
    let items2 = "item2";
    saveList(title2,items2,listItem2,inputListTitle2,1);
}
function secondlistClear(){
    let title2 = "title2";
    let items2 = "item2";
    clearList(title2,items2,listItem2,inputListTitle2,1);
}
function loadsecond(){
    let title2 = "title2";
    let items2 = "item2";
    loadlist(title2,items2,listItem2,inputListTitle2,1);
}

    
loadfirst();
loadsecond();

btnSaveList1.addEventListener("click",firstlistSave);
btnClearList1.addEventListener("click",firstlistClear);
btnSaveList2.addEventListener("click",secondlistSave);
btnClearList2.addEventListener("click",secondlistClear);