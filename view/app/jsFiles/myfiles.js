const drawer = document.querySelector("#drawer");
let drawerFlag = 0;
function toggleDrawer () {
  if(drawerFlag === 0){
    drawer.style.right = "-23%";
    drawerFlag = 1;
  }
  else{
    drawer.style.right = "0%";
    drawerFlag = 0;
  }
}

let dashFlag = 0;
function hideAndSeek(){
  const sidebar = document.querySelector("#sidebar");
  const mainSection = document.querySelector('#main-content');
  if(dashFlag === 0){
    sidebar.style.left="-300px";
    mainSection.style.marginLeft = "0";
    dashFlag = 1;
  }
  else{
    sidebar.style.left= "0";
    mainSection.style.marginLeft = "300px";
    dashFlag = 0;
  }

}
