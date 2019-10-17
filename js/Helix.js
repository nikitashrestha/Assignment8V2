class Helix{
    constructor(canvasId, width, height, rows, cols, colorArray){
        //creates canvas 
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id',canvasId);
        this.canvas.width = width;
        this.canvas.height = height;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.rows = rows;
        this.cols = cols;
        this.colors = colorArray;
        // object that controlls creation of multiple instances of circles
        this.generateCircles = new CircleGenerator(this.context, this.rows, this.cols, this.colors);
    }

    drawCanvas(){
        //clear canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //draw elements on canvas
        this.context.fillStyle = "black";
        this.context.fillRect(0 , 0, this.canvas.width, this.canvas.height);
        this.generateCircles.draw();
    }

    loop(){
        //update canvas in each frame
        this.drawCanvas();
        requestAnimationFrame(this.loop.bind(this));
    }
}


