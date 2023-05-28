import images from "../Images/Images";
import { c, canvas } from "../canvas/Canvas";
import KeyIsHold from "../canvas/Keys";
import { getAnimationFrame, reset } from "../canvas/Animate";
import DrawImage from "../canvas/draw/Func/Image";
import Skull from "./Skull";
import { resetMain } from "./Main";
import playerDies from "./audio/playedDies";

class Player {
    // movement
    xPos = 0;
    yPos = 0;
    #xVel = 0;
    #yVel = 0;
    defaultMaxVel = 10;
    maxVel = this.defaultMaxVel;
    defaultSpeed = .5;
    #speed = this.defaultSpeed;
    width = 48;
    height = this.width / 8 * 5;
    #invicible = 15;

    // objects
    #died = false;
    #objects;
    heldObject;
    defaultStrength = 5;
    strength = this.defaultStrength;

    // animation
    #deathFrame = 0;
    #lastAction = 'rStand';
    #lastActionLimit = 4;
    #lastActionRepeat = false;
    canMove = true;

    constructor(objects) {
        this.#objects = objects;
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

    Draw() {
        canvas.style.backgroundPosition = `${this.xPos}px ${this.yPos}px`;
        let animationFrame = getAnimationFrame() - this.#deathFrame;
        let frame = this.#lastActionRepeat ?
            (animationFrame % this.#lastActionLimit) + 1 :
            Math.min(this.#lastActionLimit, animationFrame);
        if (getAnimationFrame() - this.#deathFrame < this.#invicible && this.#lastAction[1] !== 'D') {
            if (frame % 2 === 0) {
                return;
            }
        }
        DrawImage(images['player_' + this.#lastAction + frame],
            -this.height / 2,
            -this.width / 2,
            this.height, this.width);

    }

    DrawText() {
        c.font = '24px GameOver';
        c.fillStyle = 'white';
        c.textAlign = 'center';
        c.textBaseline = 'bottom';
        if (this.#died) {
            c.fillText('Press "r" to restart', canvas.width / 2, canvas.height);
            return;
        }
        if (this.heldObject !== undefined) {
            c.fillText('Press "f" to throw', canvas.width / 2, canvas.height);
        }
    }

    Move() {
        if (getAnimationFrame() < 6)
            return;


        let wPressed = KeyIsHold('w') || KeyIsHold('ArrowUp');
        let sPressed = KeyIsHold('s') || KeyIsHold('ArrowDown');
        if (sPressed && !wPressed) {
            this.#yVel = Math.max(-this.maxVel, this.#yVel - this.#speed);
            this.#lastAction = 'bWalk';
        }
        if (wPressed && !sPressed) {
            this.#yVel = Math.min(this.maxVel, this.#yVel + this.#speed);
            this.#lastAction = 'tWalk';

        }
        if (this.#yVel !== 0 && sPressed === wPressed) {
            if (this.#yVel < this.#speed && this.#yVel > -this.#speed) {
                this.#yVel = 0;
            }
            this.#yVel = this.#yVel / 10 * 9;
        }


        let aPressed = KeyIsHold('a') || KeyIsHold('ArrowLeft');
        let dPressed = KeyIsHold('d') || KeyIsHold('ArrowRight');
        if (dPressed && !aPressed) {
            this.#xVel = Math.max(-this.maxVel, this.#xVel - this.#speed);
            this.#lastAction = 'rWalk';
        }

        if (aPressed && !dPressed) {
            this.#xVel = Math.min(this.maxVel, this.#xVel + this.#speed);
            this.#lastAction = 'lWalk';
        }

        if (this.#xVel !== 0 && dPressed === aPressed) {
            if (this.#xVel < this.#speed && this.#xVel > -this.#speed) {
                this.#xVel = 0;
            }
            this.#xVel = this.#xVel / 10 * 9;
        }

        if (!aPressed && !wPressed && !sPressed && !dPressed) {
            this.#lastAction = this.#lastAction[0] + 'Stand';
            this.#lastActionLimit = 5;
            this.#lastActionRepeat = false;
        } else {
            this.#lastActionLimit = 4;
            this.#lastActionRepeat = true;
        }

        if (KeyIsHold('f')) {
            if (this.heldObject !== undefined) {
                this.heldObject.ref.xVel += this.#xVel * this.strength;
                this.heldObject.ref.yVel += this.#yVel * this.strength;

                this.heldObject = undefined;
            }
        }
    }

    Update(speed, strength) {
        this.#speed = this.defaultSpeed * speed;
        this.maxVel = this.defaultMaxVel * speed;
        this.strength = this.defaultStrength * strength;
        if (this.#died && KeyIsHold('r')) {
            resetMain();
        }

        if (this.heldObject === undefined) {
            for (let index = 0; index < this.#objects.ref.length; index++) {
                const element = this.#objects.ref[index];
                if (this.#CollipesWith(element.xPos, element.yPos, element.width, element.height)) {
                    this.heldObject = { ref: this.#objects.ref[index] };
                    break;
                }
            }
        }

        this.xPos += this.#xVel;
        this.yPos += this.#yVel;
        // move 
        if (this.heldObject !== undefined) {
            this.heldObject['ref']['xPos'] = this.xPos - (this.#xVel < 0 ? 20 : -20);
            this.heldObject['ref']['yPos'] = this.yPos;
        }
        if (this.canMove) {
            this.Move();
        }
    }

    Kill(force = false) {
        if (this.#deathFrame !== 0 || getAnimationFrame() - this.#deathFrame < this.#invicible)
            return;

        this.#xVel = 0;
        this.#yVel = 0;
        this.canMove = false;
        if (this.#lastAction[0] === 'r' || this.#lastAction[0] === 'l') {
            this.#lastAction = this.#lastAction[0] + 'Death';
        } else {
            this.#lastAction = 'rDeath';
        }

        this.#lastActionLimit = 4;
        this.#lastActionRepeat = false;
        this.#deathFrame = getAnimationFrame();
        playerDies.play();

        setTimeout(() => {
            if (this.xPos !== 0 || this.yPos !== 0) {
                this.#objects.ref.push(new Skull(
                    this.xPos,
                    this.yPos,
                    images['player_' + this.#lastAction + '4']));
            }
            if (!force) {
                reset();
                this.Reset();
            } else {

                this.#died = true;
            }
            // this.#player.Reset();
        }, 1000);
    }

    Reset() {
        this.#deathFrame = 0;
        this.#lastAction = 'rStand';
        this.#lastActionLimit = 4;
        this.#lastActionRepeat = false;
        this.canMove = true;

        this.xPos = 0;
        this.yPos = 0;
        this.#xVel = 0;
        this.#yVel = 0;
    }
}

export default Player;