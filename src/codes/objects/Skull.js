import { canvas } from "../canvas/Canvas";
import DrawImage from "../canvas/draw/Func/Image";

class Skull {
    #src = '';
    xVel = 0;
    yVel = 0;

    xPos = 0;
    yPos = 0;
    width = 48;
    height = this.width / 8 * 5;
    remove = false;

    constructor(x, y, src) {
        this.xPos = x;
        this.yPos = y;
        this.#src = src;
    }

    Update() {
        this.xPos += this.xVel;
        this.yPos += this.yVel;
        if (Math.abs(this.xVel) < 1)
            this.xVel = 0;
        if (Math.abs(this.yVel) < 1)
            this.yVel = 0;

        this.xVel = (this.xVel / 10) * 9;
        this.yVel = (this.yVel / 10) * 9;
    }

    Draw(px, py) {
        DrawImage(this.#src,
            px - this.xPos - this.height / 2,
            py - this.yPos - this.width / 2,
            this.height, this.width);
    }
}

export default Skull;