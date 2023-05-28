import DrawImage from "../canvas/draw/Func/Image";

class Door {
    #src;
    xPos;
    yPos;
    width = 72;
    height = 72;
    maxLevel = 10;
    level = 1;
    effect;
    effectPower = 0;

    constructor(src, xPos, yPos, effectPower, effect, maxLevel) {
        this.#src = src;
        this.xPos = xPos;
        this.yPos = yPos;
        this.effectPower = effectPower;
        this.effect = effect;
        this.maxLevel = maxLevel;

    }

    Draw(px, py) {
        DrawImage(this.#src,
            px - this.xPos - this.width / 2,
            py - this.yPos - this.height / 2,
            this.width, this.height);
    }

    Update() {
    }

};

export default Door;