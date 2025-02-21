let rectangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = rectangles.length - 1; i >= 0; i--) {
    let r = rectangles[i];
    r.update();
    r.display();
    if (r.oversize()) {
      rectangles.splice(i, 1); // Supprime les rectangles qui sortent de l'écran
    }
  }
}

function mousePressed() {
  rectangles.push(new Rectangle(mouseX, mouseY, random(1, 10), color(random(255), random(255), random(255))));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Met à jour la taille du canvas
}

class Rectangle {
  constructor(x, y, speed, couleur) {
    this.x = x;
    this.y = y;
    this.w = 0;
    this.h = 0;
    this.speed = speed;
    this.couleur = couleur;
  }

  update() {
    this.w += this.speed;
    this.h += this.speed;
  }

  display() {
    fill(0, 0, 0, 0); // Rectangle transparent
    stroke(this.couleur); // Bordure de couleur
    //rectMode(CENTER);
    rect(this.x-this.w/2, this.y-this.h/2, this.w, this.h);
  }

  oversize() {
    return this.w > 2*width && this.h > 2*height; // Critère de suppression
  }
}