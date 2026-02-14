function go(mode){
  if(mode === "puzzle"){
    window.location.href = "puzzle.html";
  }else{
    alert("Mode sélectionné : " + mode.toUpperCase());
  }
}
