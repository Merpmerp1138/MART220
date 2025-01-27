function setup() {
  createCanvas(400, 400);
  background(220);

  // Draw the crust
  fill(210, 180, 140); // Light brown for crust
  triangle(200, 50, 300, 300, 100, 300);

  // Draw the cheese
  fill(255, 223, 0); // Yellow for cheese
  triangle(200, 70, 280, 290, 120, 290);

  // Pepperoni
  fill(200, 0, 0); // Red for pepperoni
  ellipse(200, 150, 30, 30);
  ellipse(160, 200, 30, 30);
  ellipse(240, 220, 30, 30);
  ellipse(180, 250, 30, 30);

  // Basil leaves
  fill(34, 139, 34); // Green for basil
  ellipse(220, 180, 20, 10);
  ellipse(140, 230, 20, 10);
  ellipse(260, 260, 20, 10);
}