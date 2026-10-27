const hideSideBar = () => {
  const sidebar = document.querySelector("#sidebar");
  const mainContent = document.querySelector("#main-content");
  if(sidebar.style.width === "400px"){
    sidebar.style.width = "0";
    mainContent.style.marginLeft = "0";
  }
  else{
    sidebar.style.width = "400px";
    mainContent.style.marginLeft = "400px";
  }
}
