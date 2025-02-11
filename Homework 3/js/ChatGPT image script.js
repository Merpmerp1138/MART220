function setup() {
    createCanvas(400, 500);
    background(173, 216, 230); // Light blue background
    
    drawPineapple();
  }
  
  function drawPineapple() {
    noStroke();
    
    // Pineapple body (yellow oval)
    fill(255, 204, 0);
    ellipse(200, 300, 150, 200);
    
    // Texture (crisscross pattern)
    stroke(200, 150, 0);
    strokeWeight(2);
    for (let x = 140; x <= 260; x += 20) {
      for (let y = 220; y <= 380; y += 20) {
        line(x - 10, y - 10, x + 10, y + 10);
        line(x + 10, y - 10, x - 10, y + 10);
      }
    }
    
    // Leaves (green triangles)
    noStroke();
    fill(34, 139, 34);
    triangle(170, 220, 200, 130, 230, 220);
    triangle(160, 200, 200, 110, 240, 200);
    triangle(150, 180, 200, 90, 250, 180);
  }
  
  // Save as JPEG when 's' is pressed
  function keyPressed() {
    if (key === 's') {
      saveCanvas('pineapple', 'jpg');
    }
  }
  