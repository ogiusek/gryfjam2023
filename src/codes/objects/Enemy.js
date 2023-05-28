import { getAnimationFrame } from "../canvas/Animate";
import DrawImage from "../canvas/draw/Func/Image";
import images from "../Images/Images";
import slimeDies from "./audio/slimeDies";

class Enemy {
    xPos;
    yPos;
    width = 48;
    height = this.width / 8 * 5;
    #firstFrame;
    #animationFrames;
    #action;
    #speed = 1;
    #canMove = false;
    dead = false;

    constructor(x, y) {
        this.#firstFrame = getAnimationFrame();
        this.#animationFrames = 3;
        this.#action = 'rStand';
        this.xPos = x;
        this.yPos = y;
    }

    #CollipesWith(ox, oy, ow, oh) {
        if (this.xPos < ox + oh &&
            this.xPos + this.width > ox &&
            this.yPos < oy + ow &&
            this.yPos + this.height > oy) {
            return true;
        }
        return false;
    }

    Draw(px, py) {
        let src = images['slime_' + this.#action + ((getAnimationFrame() - this.#firstFrame) % this.#animationFrames + 1)];
        // console.log((px - this.xPos) + " + " + (py - this.yPos));
        DrawImage(src,
            px - this.xPos - this.width / 2,
            py - this.yPos - this.height / 2, this.width, this.height);
    }

    Update(px, py, player, objects, money) {
        if (!player.ref.canMove) {
            return;
        }
        // console.log(px + " " + py);
        if (!this.#canMove) {
            if (this.#firstFrame - 10 > getAnimationFrame()) {
                this.#action = this.#action[0] + 'Walk';
                this.#animationFrames = 1;
                this.#canMove = true;
            } else if (getAnimationFrame() - this.#firstFrame > this.#animationFrames) {
                this.#action = this.#action[0] + 'Walk';
                this.#animationFrames = 1;
                this.#canMove = true;
            } else {
                return;
            }
        }

        let nAction = this.#action.split('');
        nAction[0] = px - this.xPos < 0 ? 'r' : 'l';
        this.#action = nAction.join('');

        let dx = px - this.xPos;
        let dy = py - this.yPos;

        // Normalize the direction vector
        let length = Math.sqrt(dx * dx + dy * dy);
        if (length < this.#speed) {
            this.xPos = px;
            this.yPos = py;
            return;
        }
        dx /= length;
        dy /= length;

        this.xPos += dx * this.#speed;
        this.yPos += dy * this.#speed;
        if (this.#CollipesWith(player.ref.xPos, player.ref.yPos, player.ref.width, player.ref.height)) {
            player.ref.Kill(true);
        }

        for (let index = 0; index < objects.ref.length; index++) {
            const element = objects.ref[index];
            if (this.#CollipesWith(element.xPos, element.yPos,
                element.width, element.height)) {
                slimeDies.play();
                this.dead = true;
                console.log(money.ref);
                money();
                if (Math.pow(element.xVel, 2) + Math.pow(element.yVel, 2) < Math.pow(1.5, 2)) {
                    objects.ref[index].remove = true;
                } else {
                    objects.ref[index].xVel = -objects.ref[index].xVel;
                    objects.ref[index].yVel = -objects.ref[index].yVel;
                }
            }
        }
    }
};

export default Enemy;