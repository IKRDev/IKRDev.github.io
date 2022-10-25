// fill from (fx, fy) to (tx, ty) with (elm)
function fill(fx, fy, tx, ty, elm) {
  for(var x=Math.min(fx, tx); x<Math.max(fx, tx); x++) {
    for(var y=Math.max(fy, ty); y>Math.min(fy, ty); y--) {
      pixelMap[x][y].element = elm;
    }
  }
}

elements.mixer = {
  color:"#fff3db",
  behavior:behaviors.SOLID,
  category:"machines",
  state:"solid",
  temp:0
}

behaviors.mixer.tick = function(pixel) {
  fill(pixel.x - Math.floor(pixel.temp / 2), pixel.y + Math.floor(pixel.temp / 2), pixel.x + Math.floor(pixel.temp / 2), pixel.y - Math.floor(pixel.temp / 2), "mix");
}

// Run after all mods are loaded, for cross-mod compatibility
runAfterLoad(function() {
    // Your code here
    console.log("Hello World!");
    fill(-10, -10, 10, 10, "water")
});
