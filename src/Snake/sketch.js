var snake;
var snake2;
var rez = 20;
var food;
var food2;
var food3;
var food4;
var food5;
var w;
var h;

//creates the area of the map
function setup() {
    createCanvas(1400, 720);
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(10);

    // places the snake into the map
    snake = new Snake();
    snake2 = new Snake();

    //places the food unto the map
    foodLocation();
    foodLocation2();
    foodLocation3();
    foodLocation4();
    foodLocation5();
}

function secondFood() {
    var x = floor(random(w));
    var y = floor(random(h));
    food = createVector(x, y);
    food2 = createVector(x, y);
    food3 = createVector(x, y);
    food4 = createVector(x, y);
    food5 = createVector(x, y);
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
function keyPressed() {

    if (snake.xdir === 1) {
    }
    else {
        if(keyCode === 65) {
            snake.setDir(-1,0);
        }
    }
    if (snake.xdir === -1) {
    }
    else {
        if (keyCode === 68) {
            snake.setDir(1, 0);
        }
    }
    if (snake.ydir === -1) {
    }
    else {
        if (keyCode === 83) {
            snake.setDir(0, 1);
        }
    }
    if (snake.ydir === 1) {
    }
    else {
        if (keyCode === 87) {
            snake.setDir(0, -1);
        }
    }
    if (keyCode === 32) {
        snake.body.shift();
        frameRate(30);
        (function(){
            function speedUp() {
                frameRate(10);
            }
            setTimeout(speedUp, 3000)
        }());
    }


    //snake2


    if (snake2.xdir === 1) {
    }
    else {
        if(keyCode === LEFT_ARROW) {
            snake2.setDir(-1,0);
        }
    }
    if (snake2.xdir === -1) {
    }
    else {
        if (keyCode === RIGHT_ARROW) {
            snake2.setDir(1, 0);
        }
    }
    if (snake2.ydir === -1) {
    }
    else {
        if (keyCode === DOWN_ARROW) {
            snake2.setDir(0, 1);
        }
    }
    if (snake2.ydir === 1) {
    }
    else {
        if (keyCode === UP_ARROW) {
            snake2.setDir(0, -1);
        }
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
    else if(snake.eat(food2)){
        foodLocation2();
    }
    else if(snake.eat(food3)){
        foodLocation3();
    }
    else if(snake.eat(food4)){
        foodLocation4();
    }
    else if(snake.eat(food5)){
        foodLocation5();
    }

    //snake2

    if (snake2.eat2(food)) {
        foodLocation();
    }
    else if(snake2.eat2(food2)){
        foodLocation2();
    }
    else if(snake2.eat2(food3)){
        foodLocation3();
    }
    else if(snake2.eat2(food4)){
        foodLocation4();
    }
    else if(snake2.eat2(food5)){
        foodLocation5();
    }

    snake.show();
    snake2.show2();
    snake.update();
    snake2.update();



    if (snake.endGame()) {
        alert("GAME OVER");
        noLoop();
    }

    if (snake2.endGame()) {
        alert("GAME OVER");
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




