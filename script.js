var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tab of tablinks){
        tab.classList.remove("active-link");
    }
    for(tabCnt of tabcontents){
        tabCnt.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}


// -----------about end--------------
let loadMoreBtn = document.querySelector('.load-more');
    let currentItem = 4;

    loadMoreBtn.onclick = () =>{
    let boxes = [...document.getElementsByClassName('work')];
    for (var i = currentItem; i < boxes.length && i < currentItem+4; i++){
      boxes[i].classList.add('active-pj');
    }
    currentItem += 4;

    console.log(boxes.length)
    if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
    
    }
    
}




//-----------------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}