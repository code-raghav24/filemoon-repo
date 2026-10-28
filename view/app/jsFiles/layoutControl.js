const sidebar = document.getElementById('sidebar') 
let flag = 0;
function toggleSidebar() {
  if(flag === 0){
    sidebar.style.width = "0px";
    flag = 1;
  }
  else{
    sidebar.style.width = "300px";
    flag= 0;
  }
}
