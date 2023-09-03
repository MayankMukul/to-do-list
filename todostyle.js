let addlistitem = document.querySelector("#add-list-item");
let listgroup = document.querySelector(".list-group-item");
let newlistitem ;

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
    </li>
    `;
    console.log(count);
    
  listgroup.insertAdjacentHTML("afterend", newlistitem);
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

  console.log("save running");
  console.log(listTitle.value);

  console.log(JSON.stringify(listItems.value));
  // localStorage.setItem("Title",listTitle.value);
  // localStorage.setItem("ListItem",JSON.stringify(listItems.value))

}
savebtn.addEventListener("click",saveList);