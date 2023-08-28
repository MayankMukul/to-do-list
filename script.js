let inputListTitle = document.querySelectorAll(".input-list-title");
let listItem1 = document.querySelectorAll(".list-item-1");
let listItem2 = document.querySelectorAll(".list-item-2");
let listItem3 = document.querySelectorAll(".list-item-3");
let listItem4 = document.querySelectorAll(".list-item-4");
let btnSaveList1 = document.querySelector(".savelist1");
let btnSaveList2 = document.querySelector(".savelist2");
let btnSaveList3 = document.querySelector(".savelist3");
let btnSaveList4 = document.querySelector(".savelist4");
let btnClearList1 = document.querySelector(".clearlist1");
let btnClearList2 = document.querySelector(".clearlist2");
let btnClearList3 = document.querySelector(".clearlist3");
let btnClearList4 = document.querySelector(".clearlist4");
let listMsgBox = document.querySelectorAll(".list-msg-box");

//checkbox
let cb = document.querySelectorAll('.checkbox');
let cbArray = [];
for(a of cb){
    a.addEventListener('change',function(){
        if(this.checked && this.nextElementSibling.value!= "" ){
            this.nextElementSibling.classList.add("strike");
        }else {
            this.nextElementSibling.classList.remove("strike");
        }
    })
}

function loadcb (){
    if(localStorage.getItem(`cbarray`)!==null){
        let loadcbdata=localStorage.getItem(`cbarray`);
        let cbdata = loadcbdata.split(',');
        console.log(cbdata);
        for(let j in cbdata ){
            if (cbdata[j]=='true'){
                cb[j].checked=true;
            } else {
                cb[j].checked=false;
            }
        }
    }  
}
//loadcb();

let notedate = document.querySelectorAll(".note-date");
let notesave1 = document.querySelector(".note-save1");
let notesave2 = document.querySelector(".note-save2");
let notedelete1 = document.querySelector(".note-delete1")
let notedelete2 = document.querySelector(".note-delete2")
let notetitle = document.querySelectorAll(".note-title");
let notebody = document.querySelectorAll(".note-body");
let noteMsgBox = document.querySelectorAll(".note-msg-box");





function fnnotedate(){
    notedate.forEach((nd)=>{
        setInterval(()=>{
            nd.innerHTML=`${new Date().toLocaleDateString()}<br> ${new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}`;
        }),60000;
    })
   }
fnnotedate();

function saveNote(n){   
    if (notetitle[n].value != "" && notebody[n].value!=""){
        localStorage.setItem(`ntitle${n}`,notetitle[n].value);
        localStorage.setItem(`nbody${n}`, notebody[n].value);
        localStorage.setItem(`ndate${n}`,new Date().toLocaleDateString());
        localStorage.setItem(`ntime${n}`,new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}));
        noteMsgBox[n].innerHTML = `<span style="color:green">Saved</span>`;
        notedate[n].nextElementSibling.innerHTML=`<br>Last Updated on : ${localStorage.getItem(`ndate${n}`)}<br> ${localStorage.getItem(`ntime${n}`)} `

    } else {
        noteMsgBox[n].innerHTML = `<span style="color:red">Nothing to save</span>`;
    }
}

function deletenote(n){
    if(localStorage.getItem(`ntitle${n}`) && localStorage.getItem(`nbody${n}`)){
        localStorage.removeItem(`ntitle${n}`);  //remove the key/value pair from storage by its name, in this case "name"
        localStorage.removeItem(`nbody${n}`);  //remove item from local storage by key name
        localStorage.removeItem(`ndate${n}`);
        localStorage.removeItem(`ntime${n}`);
        clearnote(n);
        
        noteMsgBox[n].innerHTML = `<span style="color:red">Deleted</span>`;
    } else {
        noteMsgBox[n].innerHTML = `<span style="color:red">Nothing to dalete</span>`;
    }
}

function clearnote(n){
    notetitle[n].value = ``;
    notebody[n].value=``;
    notedate[n].nextElementSibling.innerHTML="";
    noteMsgBox[n].innerHTML = `<span style="color:green">Cleared</span>`;
}

function loadnote(n){
    if(localStorage.getItem(`ntitle${n}`) && localStorage.getItem(`nbody${n}`) && localStorage.getItem(`ndate${n}`)){
        notetitle[n].value = localStorage.getItem(`ntitle${n}`);
        notebody[n].value = localStorage.getItem(`nbody${n}`);
        noteMsgBox[n].innerHTML = `<span style="color:green">Loaded</span>`;
        notedate[n].nextElementSibling.innerHTML=`<br>Last Updated on : ${localStorage.getItem(`ndate${n}`)}<br> ${localStorage.getItem(`ntime${n}`)} `
    } 
}

loadnote(0);
loadnote(1);
notesave1.addEventListener("click",function(){
    saveNote(0);
});
notesave2.addEventListener("click",function (){
    saveNote(1);
});
notedelete1.addEventListener("click",function (){
    deletenote(0);
});
notedelete2.addEventListener("click",function (){
    deletenote(1);
});




function loadlist(listItem,n) {
        if (localStorage.getItem(`title${n}`)!==null && localStorage.getItem(`items${n}`)!==null){
            let titledata = localStorage.getItem(`title${n}`);
            inputListTitle[n].value = titledata;
            let listData = localStorage.getItem(`items${n}`);
            let data = listData.split(',');
            for (let i in data){
                listItem[i].value = data[i];
            }   
            listMsgBox[n].innerHTML = `<span style="color:green">Loaded</span>`;
    }else {
        inputListTitle[n].value = "";
        for (let i of listItem){
            i.value = "";
        }
    }

    
}

function saveList(listItem,n){
    let dataArray = [];
    for(let i of listItem){
        dataArray.push(i.value);
    }
    if(inputListTitle[n].value !='' && dataArray != ''){   
        localStorage.setItem(`title${n}`,inputListTitle[n].value);
        localStorage.setItem(`items${n}`,dataArray);
        listMsgBox[n].innerHTML = `<span style="color:green">Saved</span>`;
    }else {
        listMsgBox[n].innerHTML = `<span style="color:red">Enter Title/List Element</span>`
    } 
    
    
    for(let j of cb){
        if (j.checked){
            cbArray.push(true);
        } else {
            cbArray.push(false);
        }
    }
    localStorage.setItem(`cbarray`,cbArray);
}

function clearList(listItem,n){
    if(inputListTitle[n].value != '' && listItem.value != ''){

        localStorage.removeItem(`title${n}`);
        localStorage.removeItem(`items${n}`);
        inputListTitle[n].value = "";
        for (let i of listItem){
                 i.value = "";
             }
       listMsgBox[n].innerHTML = `<span style="color:red">Cleared</span>`;

    } else {
        listMsgBox[n].innerHTML = `<span style="color:red">Nothing to Clear</span>`
    }

    for (let a=4*n ; a<4+(4*n);a++){
        cb[a].checked = false;
    }

}

loadlist(listItem1,0);
loadlist(listItem2,1);
loadlist(listItem3,2);
loadlist(listItem4,3);

btnSaveList1.addEventListener("click",function () {
    saveList(listItem1,0);  
});
btnSaveList2.addEventListener("click",function(){
    saveList(listItem2,1);
});
btnSaveList3.addEventListener("click",function (){
    saveList(listItem3,2);
});
btnSaveList4.addEventListener("click",function(){
    saveList(listItem4,3);
});
btnClearList1.addEventListener("click",function (){
    clearList(listItem1,0);
});
btnClearList2.addEventListener("click",function (){
    clearList(listItem2,1);
});
btnClearList3.addEventListener("click",function (){
    clearList(listItem3,2);
});
btnClearList4.addEventListener("click",function (){
    clearList(listItem4,3);
});