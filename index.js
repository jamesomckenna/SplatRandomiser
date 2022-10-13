window.onload=function(){

  // initialise variables
  var openMenu = false;
  var btnRandomise = document.getElementById('btn_randomise');
  var btnMenu = document.getElementById('btn_menu');
  var selectedMainList = mainList;

  // choose a random weapon kit and display icons onscreen
  btnRandomise.addEventListener("click", function(){
    var weaponName = document.getElementById("main_name");
    var weaponImg = document.getElementById("main_img");
    var subName = document.getElementById("sub_name");
    var subImg = document.getElementById("sub_img");
    var specialName = document.getElementById("special_name");
    var specialImg = document.getElementById("special_img");
    var chkMains = document.querySelectorAll(".chk_main:checked");

    selectedMainList = []
    chkMains.forEach(function(chkMain) {
      selectedMainList.push(chkMain.value)
    });

    if(selectedMainList.length > 0){
      let i = Math.floor(Math.random() * selectedMainList.length);
      weaponObj = mainData[selectedMainList[i]]
      weaponName.innerHTML = weaponObj.name;
      weaponImg.src = "img/main/"+weaponObj.img;

      let sub = weaponObj.sub;
      subName.innerHTML = subList[sub].name;
      subImg.src = "img/sub/"+subList[sub].img;

      let special = weaponObj.special;
      specialName.innerHTML = specialList[special].name;
      specialImg.src = "img/special/"+specialList[special].img;

    } else {
      // if no weapons are selected, display blank
      weaponName.innerHTML = "No Weapons Selected";
      subName.innerHTML = "";
      specialName.innerHTML = "";
      weaponImg.src = "img/Random.png";
      subImg.src = "img/Random.png";
      specialImg.src = "img/Random.png";
    }
  });


  // toggle the full selection of weapon classes on the side menu
  var classes = document.getElementsByName('weapon_class');
  for(var i=0; i<classes.length; i++) {
    classes[i].addEventListener('change', (event) => {
        var className = event.target.value;
        classWeapons = document.getElementsByName(className);

        if (event.target.checked) {
          for(var j=0; j < classWeapons.length; j++) {
            classWeapons[j].checked = true;
          }
        } else {
          for(var j=0; j < classWeapons.length; j++) {
            classWeapons[j].checked = false;
          }
        }
    })
  }


  // open and close the side menu
  btnMenu.addEventListener("click", function(){
    if(openMenu){
      openMenu = false;
      btnMenu.innerHTML = "<i class=\"fas fa-arrow-right\"></i>";
      document.getElementById("side_nav").style.width = "0";
      document.getElementById("btn_menu").style.marginLeft = "0";
    } else {
      openMenu = true;
      btnMenu.innerHTML = "<i class=\"fas fa-arrow-left\"></i>";
      document.getElementById("side_nav").style.width = "300px";
      document.getElementById("btn_menu").style.marginLeft = "300px";
    }
  });

}
