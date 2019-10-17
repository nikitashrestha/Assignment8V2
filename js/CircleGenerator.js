class CircleGenerator{
    constructor(context, noOfRows, noOfCols, colorArray){
        this.context = context;
        this.noOfRows = noOfRows;
        this.noOfCols = noOfCols;
        this.colors = colorArray;
        this.initialCenter = {
            x : 100,
            y : 60
        }
        this.gap = 20;
        this.circles = [];
        this.update();
    }

    draw(){
        for(let i = 0; i < this.circles.length; i++){
            this.circles[i].update();
            this.circles[i].draw();
        }
    }

    create(isOutOfPhase){
        //creates helix like structure here

        // if(isOutOfPhase == true){
        //     color = this.color2;
        // }

        let currentPosY = this.initialCenter.y;

        for(let i = 0; i < this.noOfRows; i++){
            currentPosY += this.gap;

            let currentPoxX = 0;
            let phaseIncrease = 6;
            let currentPhase = 0;

            for(let j = 0; j < this.noOfCols; j++){
                let circle = new Circle(this.context, this.colors[i%this.colors.length], isOutOfPhase);

                circle.center.x = currentPoxX += this.gap;
                circle.center.y = currentPosY;
                circle.currentX = currentPhase += phaseIncrease;
                circle.currentY = currentPosY;

                this.circles.push(circle);
            }
        }
    }
    update(){
        this.create(false);
        this.create(true);
    }


}