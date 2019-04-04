var snake;
var rez = 20;
var food;
var food2;
var food3;
var food4;
var food5;
var w;
var h;
var seconds = 0;
var secondsLeft = 3;

//creates the area of the map
function setup() {
    createCanvas(1400, 800);
    w = floor(width / rez);
    h = floor(height / rez);

    frameRate(10);

    // places the snake into the map
    snake = new Snake();

    //places the food unto the map
    foodLocation();
    foodLocation2();
    foodLocation3();
    foodLocation4();
    foodLocation5();
}

//generates food into random positions of the map
function foodLocation() {
    var x = floor(random(w));
    var y = floor(random(h));
    food = createVector(x, y);
}

function foodLocation2() {
    var x = floor(random(w));
    var y = floor(random(h));
    food2 = createVector(x, y);

}

function foodLocation3() {
    var x = floor(random(w));
    var y = floor(random(h));
    food3 = createVector(x, y);

}

function foodLocation4() {
    var x = floor(random(w));
    var y = floor(random(h));
    food4 = createVector(x, y);

}

function foodLocation5() {
    var x = floor(random(w));
    var y = floor(random(h));
    food5 = createVector(x, y);

}
//uses the arrow keys to move the snake
function keyPressed() {
    if (snake.xdir === 1) {
    } else {
        if (keyCode === LEFT_ARROW) {
            snake.setDir(-1, 0);
        }
    }
    if (snake.xdir === -1) {
    } else {
        if (keyCode === RIGHT_ARROW) {
            snake.setDir(1, 0);
        }
    }
    if (snake.ydir === -1) {
    } else {
        if (keyCode === DOWN_ARROW) {
            snake.setDir(0, 1);
        }
    }
    if (snake.ydir === 1) {
    } else {
        if (keyCode === UP_ARROW) {
            snake.setDir(0, -1);
        }
    }
    if (snake.xdir === 1) {
    } else {
        if (keyCode === 65) {
            snake.setDir(-1, 0);
        }
    }
    if (snake.xdir === -1) {
    } else {
        if (keyCode === 68) {
            snake.setDir(1, 0);
        }
    }
    if (snake.ydir === -1) {
    } else {
        if (keyCode === 83) {
            snake.setDir(0, 1);
        }
    }
    if (snake.ydir === 1) {
    } else {
        if (keyCode === 87) {
            snake.setDir(0, -1);
        }
    }
    if (keyCode === 32) {
        snake.body.shift()
        frameRate(50)
    }
}

function draw() {
    //resolution of the snakes
    scale(rez);
    //resolution for the background
    background(220);
    if (snake.eat(food)) {
        foodLocation();
    } else if (snake.eat(food2)) {
        foodLocation2();
    } else if (snake.eat(food3)) {
        foodLocation3();
    } else if (snake.eat(food4)) {
        foodLocation4();
    } else if (snake.eat(food5)) {
        foodLocation5();
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
    rect(food2.x, food2.y, 1, 1);
    rect(food3.x, food3.y, 1, 1);
    rect(food4.x, food4.y, 1, 1);
    rect(food5.x, food5.y, 1, 1);
}
