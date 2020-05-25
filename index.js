
$(".tab_content").hide();
$(".tab_content:first-child").show();
$("ul li").click(function(){
  $("ul li").removeClass("active");
  $(this).addClass("active");
  console.log(this)
  var current_tab = $(this).attr("data-list");
  console.log(current_tab);
  
  $(".tab_content").hide();
  $("."+current_tab).show();
})
// var ul = document.getElementById("tabs_ul");
// var li_tabs = ul.getElementsByTagName("li");
// var li_tabs = document.querySelector('#tabs_ul').children
// console.log(li_tabs);


// for (var i = 0; i < li_tabs.length; i++) {
//   li_tabs[i].addEventListener("click", function() {
//     var current = ul.getElementsByClassName("active");
//   current[0].className = current[0].className.replace("active", "");
//   this.className += "active";
    
//     var current_tab_value = this.getAttribute("data-list");
//     document.getElementById(current_tab_value).style.display = "block";
    
//   });
// }  
 