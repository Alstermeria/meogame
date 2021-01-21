const cat = document.getElementById("cat");
const sun = document.getElementById("sun");
const cloud = document.getElementById("cloud");

function jump() {
  if (cat.classList != "jump") {
    cat.classList.add("jump");

    setTimeout(function() {
      cat.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current cat Y position
  let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));


  // get current sun X position
    let sunLeft = parseInt(window.getComputedStyle(sun).getPropertyValue("left"));

    // get current sun X position
    let cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("left"));


// detect collision
if (sunLeft <50 && sunLeft > 0 && catTop >= 140) {
  // collision
  alert("Game Over!");

}

}, 10);

document.addEventListener("keydown", function(event) {
  jump();
});
