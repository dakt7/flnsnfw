var snake;
var rez = 20;
var food;
var w;
var h;

//creates the area of the map
function setup() {
    createCanvas(600, 600);
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(10);

    // places the snake into the map
    snake = new Snake();

    //places the food unto the map
    foodLocation();

}

//generates food into random positions of the map
function foodLocation() {
    var x = floor(random(w));
    var y = floor(random(h));
    food = createVector(x, y);

}

//uses the arrow keys to move the snake
function keyPressed() {
    if(keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    }
    if(keyCode === 65) {
        snake.setDir(-1, 0);
    } else if (keyCode === 68) {
        snake.setDir(1, 0);
    } else if (keyCode === 83) {
        snake.setDir(0, 1);
    } else if (keyCode === 87) {
        snake.setDir(0, -1);
    }
}

//
function draw() {
    //resolution of the snake
    scale(rez);
    //resolution for the background
    background(220);
    if (snake.eat(food)) {
        foodLocation();
    }
    snake.update();
    snake.show();


    if (snake.endGame()) {
        print("END GAME");
        background(0, 0, 255);
        noLoop();
    }
    noStroke();
    fill(0, 0, 255);
    rect(food.x, food.y, 1, 1);
}
