import Player from "./Player";
import centerPlate from "./CenterPlate";
import { getSec } from "../canvas/Animate";
import DrawTime from "./DrawTime";
import { reset } from "../canvas/Animate";
import Enemys from "./Enemys";
import Door from "./Door";
import images from "../Images/Images";
import KeyIsHold from "../canvas/Keys";
import money from "./audio/money";
import { c, canvas } from "../canvas/Canvas";

class Main {
    #objects = [];
    deadMoney = 0;
    #enemys = new Enemys();
    #player = new Player({ ref: this.#objects });
    #doors = [];
    defaultLife = 15;
    life = this.defaultLife;

    constructor() {
        this.#doors.push(new Door(images.speed_door, -200, 100, 1.2, 'sp'));
        this.#doors.push(new Door(images.time_door, 0, 100, .9, 't'));
        this.#doors.push(new Door(images.power_door, 200, 100, 2, 'st'));
    }

    Update() {

        this.life = this.defaultLife * Math.pow(this.#doors[1].effectPower, this.#doors[1].level - 1);
        if (getSec() > this.life) {
            this.#player.Kill();
        }

        while (this.#objects.length > 50) {
            this.#objects.shift();
        }

        if (KeyIsHold('c', true)) {
            let dist = 1 / 0;
            let index = -1;
            for (let nIndex = 0; nIndex < this.#doors.length; nIndex++) {
                const nDist = Math.pow(Math.abs(this.#player.xPos) - Math.abs(this.#doors[nIndex].xPos), 2) +
                    Math.pow(Math.abs(this.#player.yPos) - Math.abs(this.#doors[nIndex].yPos), 2);
                if (nDist < dist) {
                    index = nIndex;
                    dist = nDist;
                }
            }
            if (dist < Math.pow(100, 2) && index !== -1) {
                if (this.#doors[index].level < this.#doors[index].maxLevel && this.deadMoney >= 15) {
                    this.#doors[index].level += 1;
                    this.deadMoney -= 15;
                    money.play();
                }
            }
        }

        while (true) {
            const index = this.#objects.findIndex(e => e.remove);
            if (index === -1) {
                break;
            }
            this.#player.heldObject = undefined;
            switch (index) {
                case 0:
                    this.#objects.shift();
                    break;
                case this.#objects.length - 1:
                    this.#objects.pop();
                    break;
                default:
                    this.#objects = this.#objects.slice(index - 1, index);
                    break;
            }
        }

        for (let index = 0; index < this.#objects.length; index++) {
            this.#objects[index].Update();
        }
        this.#player.Update(Math.pow(this.#doors[2].effectPower, this.#doors[2].level - 1),
            Math.pow(this.#doors[0].effectPower, this.#doors[0].level - 1));
        this.#enemys.Update(this.#player.xPos, this.#player.yPos,
            { ref: this.#player }, { ref: this.#objects }, () => { this.deadMoney++; });
    }

    Draw() {
        centerPlate.Draw(this.#player.xPos, this.#player.yPos);

        for (let index = 0; index < this.#doors.length; index++) {
            this.#doors[index].Draw(this.#player.xPos, this.#player.yPos);
        }

        for (let index = 0; index < this.#objects.length; index++) {
            this.#objects[index].Draw(this.#player.xPos, this.#player.yPos);
        }

        this.#player.Draw();
        this.#enemys.Draw(this.#player.xPos, this.#player.yPos);
    }

    DrawText() {
        DrawTime();
        this.#player.DrawText();

        c.font = '24px GameOver';
        c.fillStyle = 'white';
        c.textAlign = 'center';
        c.textBaseline = 'top';

        c.fillText("You have " + this.deadMoney + " money \n ", canvas.width / 2, 29);
        c.fillText("Everything costs 15 ", canvas.width / 2, 53);

    }

    Resize() {
    }

    Reset() {
        reset();
        this.#player.Reset();
    }
};

let mainObj = new Main();
const main = () => {
    return mainObj;
}
const resetMain = () => {
    reset();
    mainObj = new Main();
};

export { resetMain };
export default main;