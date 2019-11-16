document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("dropbtn_bag").addEventListener("click", function() {
    document.getElementById("dropdown_bag").classList.toggle("show");
  });

  document.getElementById("menubtn").addEventListener("click", function () {
    document.getElementById("dropbtn_bag").classList.toggle("hide-m");
    var menubtn = document.getElementById("menubtn");
    var closebtn = document.getElementById("closebtn");
    if (!menubtn.classList.contains('hide')) {
      menubtn.classList.remove('visible');
      menubtn.classList.add('hide');
      closebtn.classList.add('visible');
    }

    document.getElementById("drop-mobile").classList.toggle("dropdown-content-menu");
    document.getElementById("search_mb").classList.toggle("show");
  });

  document.getElementById("closebtn").addEventListener("click", function () {
    var menubtn = document.getElementById("menubtn");
    var closebtn = document.getElementById("closebtn");
    if (menubtn.classList.contains('hide')) {
      closebtn.classList.remove('visible');
      menubtn.classList.remove('hide');
      menubtn.classList.add('visible');
    }
    document.getElementById("drop-mobile").classList.toggle("dropdown-content-menu");
    if(document.getElementById("search_mb").classList.contains("show"))
    {
      document.getElementById("search_mb").classList.remove("show");
    }
    document.getElementById("dropbtn_bag").classList.toggle("hide-m");
  });

  document.getElementById("dropbtn_search").addEventListener("click", function () {
    var ic = document.getElementsByClassName("icon");
    var i;
    for (i = 0; i < ic.length; i++) {
      var hide = ic[i];
      if (!hide.classList.contains('hide')) {
        hide.classList.remove('visible');
        hide.classList.add('hide');
      }
    }

    var bagbtn = document.getElementById("dropbtn_bag");
    var closebtn = document.getElementById("closebtn");
    if (!bagbtn.classList.contains('hide')) {
      bagbtn.classList.remove('visible');
      bagbtn.classList.add('hide');
      closebtn.classList.add('visible');
    }
    document.getElementById("dropdown_search").classList.toggle("show");
  });

  document.getElementById("dropdown_search").addEventListener("click", function () {
    console.log("=====");
  });

  window.onclick = function (event) {
    if (!event.target.matches('#dropbtn_bag')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (event.target.matches('#dropdown_search') != true && event.target.matches('#dropbtn_search') != true) {
      var dropdowns = document.getElementsByClassName("dropdown_search_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      var bagbtn = document.getElementById("dropbtn_bag");
      var closebtn = document.getElementById("closebtn");
      if (bagbtn.classList.contains('hide')) {
        closebtn.classList.remove('visible');
        bagbtn.classList.remove('hide');
        bagbtn.classList.add('visible');
      }
        var ic = document.getElementsByClassName("icon");
        for (i = 0; i < ic.length; i++) {
          var hide = ic[i];
          if (hide.classList.contains('hide')) {
            hide.classList.remove('hide');
            hide.classList.add('visible');
          }
        }
      }
  }
  window.addEventListener("scroll", function() {
    var transform = "translateY(130px)";
    var temp = document.getElementsByClassName("trans");
    var result;
    var scroll = document.documentElement.scrollTop;
    for(var j = 0; j < temp.length; j++)
    {
      if (scroll <= 2000 && scroll > 600) {
        var x = 130 - ((scroll - 600) / 10);
        var i = x.toFixed(0);
        result = transform.replace("130", i.toString());
        temp[j].style.transform = result;
      }
    }
  })
});
