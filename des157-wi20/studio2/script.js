  console.log('reading js');
  "use strict";

  var phone1 = document.querySelector("#phone");
  var phoneoverlay1 = document.querySelector("#phoneoverlay");
  var phoneclose1 = document.querySelector("#closephone");

  var planner2 = document.querySelector("#planner");
  var planneroverlay2 = document.querySelector("#planneroverlay");
  var plannerclose2 = document.querySelector("#closeplanner");


  var laptop3 = document.querySelector("#laptop");
  var laptopoverlay3 = document.querySelector("#laptopoverlay");
  var laptopclose3 = document.querySelector("#closelaptop");


  phone1.addEventListener('click', function() {
    console.log('phone clicked');
    phoneoverlay1.style.display = "block";
  });

  phoneclose1.addEventListener('click', function() {
    console.log('phone closed');
    phoneoverlay1.style.display = "none";
  });

  planner2.addEventListener('click', function() {
    console.log('planner clicked');
    planneroverlay2.style.display = "block";
  });

  plannerclose2.addEventListener('click', function() {
    console.log('planner closed');
    planneroverlay2.style.display = "none";
  });

  laptop3.addEventListener('click', function() {
    console.log('laptop clicked');
    laptopoverlay3.style.display = "block";
  });

  laptopclose3.addEventListener('click', function() {
    console.log('laptop closed');
    laptopoverlay3.style.display = "none";
  });
