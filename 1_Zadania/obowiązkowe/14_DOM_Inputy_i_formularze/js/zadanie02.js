document.addEventListener("DOMContentLoaded", function() {
    const imgs = document.querySelectorAll(".page-header img");
    const select = document.querySelector("select");
    const btn = document.querySelector("button");
  
    imgs.forEach(img => {
      img.style.display = "none";
    });
  
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      let selectedIndex = select.selectedIndex;
  
      for (let i = 0; i < imgs.length; i++) {
        if (i === selectedIndex) {
          imgs[i].style.display = "block";
        } else {
          imgs[i].style.display = "none";
        }
      }
    });
});