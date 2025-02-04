let pepperoni = [];
let olives = [];

function setup() {
  createCanvas(400, 400);
  background(220);

  // Generate random positions for pepperoni
  for (let i = 0; i < 3; i++) {
    pepperoni.push({ x: random(130, 270), y: random(150, 270) });
  }

  // Generate random positions for olives
  for (let i = 0; i < 3; i++) {
    olives.push({ x: random(130, 270), y: random(150, 270) });
  }
}

function draw() {
  background(220); // Redraw background each frame

  // Draw pizza slice (triangle)
  fill(255, 204, 102); // Cheese color
  triangle(200, 50, 100, 300, 300, 300);

  // Draw cheese layer (slightly smaller triangle)
  fill(255, 230, 102);
  triangle(200, 65, 110, 290, 290, 290);

  // Draw crust (arc at the bottom)
  fill(204, 136, 0); // Darker crust color
  arc(200, 300, 220, 60, 0, PI);

  // Draw pepperoni (ellipses at random positions)
  fill(200, 50, 50);
  for (let p of pepperoni) {
    ellipse(p.x, p.y, 40, 40);
  }

  // Draw olives (small black circles at random positions)
  fill(0);
  for (let o of olives) {
    ellipse(o.x, o.y, 15, 15);
  }

  // Display title in upper-left corner
  fill(0);
  textSize(16);
  text("Pepperoni Paradise", 10, 20);

  // Display my name in lower-right corner
  textSize(12);
  text("By ChatGPT", width - 80, height - 10);
}

// Move toppings when mouse is clicked
function mousePressed() {
  for (let i = 0; i < pepperoni.length; i++) {
    pepperoni[i].x = random(130, 270);
    pepperoni[i].y = random(150, 270);
  }

  for (let i = 0; i < olives.length; i++) {
    olives[i].x = random(130, 270);
    olives[i].y = random(150, 270);
  }
}

// Change background color when a key is pressed
function keyPressed() {
  let colors = [220, 200, 240, 255]; // Different shades of background
  background(random(colors));
}