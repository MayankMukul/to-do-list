let addlistitem = document.querySelector("#add-list-item");
let listgroup = document.querySelector(".list-group");
let newlistitem ;
let deleteItem = document.querySelector(".delete-item")

// let row = document.querySelector(".row");
// let addmorelist = document.querySelector("#more-list");
let count = 0;

let savebtn = document.querySelector(".savelist1");

function addItem() {
    count+=1;
  newlistitem = `
    <li class="list-group-item input-group">
        <input class="form-check-input checkbox me-1" type="checkbox"  />
        <input class="input-list list-item"  type="text" placeholder="Add Items Here..." />
        <svg class="delete-item" onclick="deleteListItem()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
           <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    </li>
    `;
    console.log(count);
    
  listgroup.insertAdjacentHTML("beforeend", newlistitem);
}
addlistitem.addEventListener("click",addItem);


// function morelist(){
//     let newlist = `
//     <div class="col-lg-6">
//                   <div class="card list m-4 p-3">
//                     <div class="card-body">
//                         <div class="card-title">
//                             <h5 >To Do List</h5>
//                             <!--  <button class="btn btn-primary" id="more-list">add more list</button> -->
//                         </div>
//                         <div class="list-msg-box"></div>
//                       <ul class="list-group">
//                         <li class="list-group-item p-2">
//                           <input class="input-list input-list-title" type="text" placeholder="Add Title Here..." />
//                         </li>
//                         <li class="list-group-item input-group">
//                           <input class="form-check-input checkbox me-1" type="checkbox" id="item1" />
//                           <input class="input-list list-item" id="item1" type="text" placeholder="Add Items Here..." />
//                         </li>
                        
//                       </ul>
//                       <button class="btn btn-primary" id="add-list-item">add list item</button>
//                     </div>
//                     <div class="text-center">
//                       <button class="btn btn-primary savelist1">Save</button>
//                       <button class="btn btn-outline-danger clearlist1">Clear</button>
//                     </div>
//                   </div>
//                 </div>
//     `
//     row.insertAdjacentHTML("afterend",newlist);
// }
// addmorelist.addEventListener("click",morelist);

function saveList(){
  let listTitle=document.querySelector(".input-list-title");
  let listItems=document.querySelectorAll(".list-item");
  let listcount = count;
  localStorage.setItem("count",listcount);


  console.log("save running");
  let cache = {};
  let n=0;
  listItems.forEach((a)=>{
    console.log(n);
    cache[n]= a.value ;  //key value pair
    console.log(JSON.stringify(a.value));
    n++;
  })
  console.log(cache);
  console.log(JSON.stringify(cache));
  let cachestring = JSON.stringify(cache);
  localStorage.setItem("cache",cachestring);
  console.log(listTitle.value);

  console.log(JSON.stringify(listTitle.value));
  // localStorage.setItem("Title",listTitle.value);
  // localStorage.setItem("ListItem",JSON.stringify(listItems.value))
  

}
savebtn.addEventListener("click",saveList);


function loadListItem(){
  if(localStorage.getItem('cache')!=null){
  let strdata=localStorage.getItem('cache');
  console.log(JSON.parse(strdata))
  let data = JSON.parse(strdata);

  let entrieslist = ( Object.values(data));
  entrieslist.forEach((entries)=>{
    console.log(`entries ${entries}`);
  })
  
  let newcount = localStorage.getItem("count");
 for(let a=0;a<newcount;a++){
 console.log("newcount");
 addItem();
 }

  // console.log(entrieslist);
  // for(let a=0;a<entrieslist.length;a++){
  //   console.log(` ${Object.values(data)}`);
  //   console.log("for running")
  // }
  }
}
loadListItem();


function deleteListItem(){
  console.log("delete this");
}
// deleteItem.addEventListener("click",deleteListItem);