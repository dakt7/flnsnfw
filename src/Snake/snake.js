class Snake {

    //constructor contains the size of the snake "body"
    constructor() {
        this.body = [];
        this.body[0] = createVector(floor(w/2), floor(h/2));
        this.xdir = 0;
        this.ydir = 0;
        this.len = 0;
    }

    //setDir is the direction by the x and y axis
    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    //update is the updated snake length of the body and the body shift to the back of the snake so the snake body will increase properly
    update() {
        let head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

    //grow is the growth of the snake "body" when the food is eaten
    grow() {
        let head = this.body[this.body.length-1].copy();
        this.len++;
        this.body.push(head);
    }

    //endgame is what happened after the snake dies
    endGame() {
        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;
        if (x > w-1 || x < 0|| y > h-1 || y < 0){
            return true
        }
        for (let i = 0; i < this.body.length-1; i++){
            let part = this.body[i];
            if (part.x == x & part.y == y){
                return true;
            }
        }
        return false;

    }

    //the position of the body
    eat(pos) {
        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;
        if(x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
        return false;
    }

    //show
    show() {
        for(let i = 0; i < this.body.length; i++) {
            fill(0);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1)
        }
    }
}
