let addlistitem = document.querySelector("#add-list-item");
let listgroup = document.querySelector(".list-group");
let newlistitem ;
let deleteItem = document.querySelectorAll(".delete-item")

let msgBox = document.querySelector(".list-msg-box")

let count = 0;
let savebtn = document.querySelector(".savelist1");

function addItem() {
    count+=1;
  newlistitem = `
    <li class="list-group-item input-group col">
        <input class="form-check-input checkbox me-1 col-1" type="checkbox" onClick="checkanduncheck(this)" />
        <input class="input-list list-item col-9"  type="text" placeholder="Add Items Here..." />
        <button class="delete-item btn col-1" onClick="deleteListItem(this)">
        <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
           <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </button>
    </li>
    `;
    
  listgroup.insertAdjacentHTML("beforeend", newlistitem);
  msgBox.innerHTML=`<span style = "color:green"> Item Added</span>`;
}
addlistitem.addEventListener("click",addItem);


let listTitle=document.querySelector(".input-list-title");
  let listItems=document.querySelectorAll(".list-item");

function saveList(){
  let listTitle=document.querySelector(".input-list-title");
  let listItems=document.querySelectorAll(".list-item");
  let listcount = count;
  localStorage.setItem("count",listcount);


  // console.log("save running");
  let cache = {};
  let n=0;
  listItems.forEach((a)=>{
    // console.log(n);
    cache[n]= a.value ;  //key value pair
    // console.log(JSON.stringify(a.value));
    n++;
  })
  // console.log(cache);
  // console.log(JSON.stringify(cache));
  let cachestring = JSON.stringify(cache);
  localStorage.setItem("cache",cachestring);
  // console.log(listTitle.value);

  // console.log(JSON.stringify(listTitle.value));
  localStorage.setItem("Title",listTitle.value);
  msgBox.innerHTML=`<span style = "color:green"> Saved</span>`;
  
  
updatecb();
}
savebtn.addEventListener("click",saveList);


function loadListItem(){
  if(localStorage.getItem('cache')!=null){

    listTitle.value = localStorage.getItem("Title");

  let strdata=localStorage.getItem('cache');
  // console.log(JSON.parse(strdata))
  let data = JSON.parse(strdata);

  let newcount = localStorage.getItem("count");
  for(let a=0;a<newcount;a++){
//  console.log("newcount");
  addItem();
  msgBox.innerHTML=`<span style = "color:green"> Restored</span>`;
 }

 let newlistItems=document.querySelectorAll(".list-item");

  let entrieslist = ( Object.values(data));
  // console.log(entrieslist.length);
  let arr = entrieslist;
// console.log(newlistItems);
 for(let r=0;r<entrieslist.length;r++ ){
  newlistItems[r].value = arr[r];
  // console.log(arr[r])
 }

  }

  
}
loadListItem();


function deleteListItem(e){
  listgroup.removeChild(e.parentNode);
  count-=1;
  msgBox.innerHTML=`<span style = "color:red"> Item Removed</span>`;
}


let clearbtn = document.querySelector(".clearlist1");
function clearlist () {
  listTitle.value = "";
  let newlistItems=document.querySelectorAll(".list-item");
newlistItems.forEach((item)=>{
  item.value="";
})
msgBox.innerHTML=`<span style = "color:red"> List Cleared</span>`;

}
clearbtn.addEventListener("click",clearlist);


  var cb = document.querySelectorAll('.checkbox');



function checkanduncheck(eventhandle){
  if(eventhandle.checked && eventhandle.nextElementSibling.value!= "" ){
    eventhandle.nextElementSibling.classList.add("strike");
}else {
    eventhandle.nextElementSibling.classList.remove("strike");
}

}

function updatecb(){
  cb = document.querySelectorAll('.checkbox');
  let cblListArray = [];
  for(let j of cb){
      if (j.checked){
          cblListArray.push(true);
      } else {
          cblListArray.push(false);
      }
  }
  localStorage.setItem(`cblistarray`,cblListArray);
}

function loadcb (){
  if(localStorage.getItem(`cblistarray`)!==null){
      let loadcbdata=localStorage.getItem(`cblistarray`);
      let cbdata = loadcbdata.split(',');
      for(let j in cbdata ){
          if (cbdata[j]=='true'){
              cb[j].checked=true;
          } else {
              cb[j].checked=false;
          }
      }
      for (i of cb){
          if(i.checked) {
              i.nextElementSibling.classList.add("strike") ;
          }
       }  
  }  
}
loadcb();
