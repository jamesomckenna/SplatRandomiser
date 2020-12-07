window.onload=function(){

  // initialise variables
  var openmenu = false;
  var btnRandomise = document.getElementById('btn_randomise');
  var btnMenu = document.getElementById('btn_menu');
  var selectedmainlist = mainlist;

  // display random weapon
  btnRandomise.addEventListener("click", function(){
    var weaponname = document.getElementById("main_name");
    var weaponimg = document.getElementById("main_img");
    var subname = document.getElementById("sub_name");
    var subimg = document.getElementById("sub_img");
    var specialname = document.getElementById("special_name");
    var specialimg = document.getElementById("special_img");
    var chkMains = document.querySelectorAll(".chk_main:checked");

    selectedmainlist = []
    chkMains.forEach(function(chkMain) {
      selectedmainlist.push(chkMain.value)
    });

    if(selectedmainlist.length > 0){
      let i = Math.floor(Math.random() * selectedmainlist.length);
      weaponobj = maindata[selectedmainlist[i]]
      weaponname.innerHTML = weaponobj.name;
      weaponimg.src = "img/main/"+weaponobj.img;

      let sub = weaponobj.sub;
      subname.innerHTML = sublist[sub].name;
      subimg.src = "img/sub/"+sublist[sub].img;

      let special = weaponobj.special;
      specialname.innerHTML = speciallist[special].name;
      specialimg.src = "img/special/"+speciallist[special].img;

    } else {
      // if no weapons are selected
      weaponname.innerHTML = "No Weapons Selected";
      subname.innerHTML = "";
      specialname.innerHTML = "";
      weaponimg.src = "img/Random.png";
      subimg.src = "img/Random.png";
      specialimg.src = "img/Random.png";
    }
  });


// create event listeners for class checkboxes
  var i;
  var classes = document.getElementsByName('weapon_class');
  for(i=0; i<classes.length; i++) {
    classes[i].addEventListener('change', (event) => {
        var classname = event.target.value;
        classweapons = document.getElementsByName(classname);

        var j;
        var l = classweapons.length;
        if (event.target.checked) {
          for(j=0; j < l; j++) {
            classweapons[j].checked = true;
          }
        } else {
          for(j=0; j < l; j++) {
            classweapons[j].checked = false;
          }
        }
    })
  }


  // side menu button
  btnMenu.addEventListener("click", function(){
    if(openmenu){
      openmenu = false;
      btnMenu.innerHTML = "<i class=\"fas fa-arrow-right\"></i>";
      document.getElementById("side_nav").style.width = "0";
      document.getElementById("btn_menu").style.marginLeft = "0";
    } else {
      openmenu = true;
      btnMenu.innerHTML = "<i class=\"fas fa-arrow-left\"></i>";
      document.getElementById("side_nav").style.width = "300px";
      document.getElementById("btn_menu").style.marginLeft = "300px";
    }
  });

}
