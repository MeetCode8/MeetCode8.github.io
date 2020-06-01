// 详情页js
window.addEventListener("load", function() {
  var detail_lints = document.querySelector(".detail_lints");
  var lins = detail_lints.querySelectorAll("li");
  var item_info = document.querySelector(".item_info");

  for (var i = 0; i < lins.length; i++) {
    lins[i].setAttribute("index", i);
    lins[i].onclick = function() {
      for (var i = 0; i < lins.length; i++) {
        lins[i].className = "";
      }
      this.className = "current";

      var index = this.getAttribute("index");
      for (var i = 0; i < item_info.length; i++) {
        item_info[i].style.disabled = "none";
      }
      item_info[index].style.disabled = "block";
    };
  }
});
