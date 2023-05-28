import { getSec } from "../canvas/Animate";
import Enemy from "./Enemy";

class Enemys {
    #enemys = [];
    #minDist = 300;
    #wantedSlimeAmount = 10;
    #canAddSlime = getSec() * 1000;

    Draw(px, py) {
        for (let index = 0; index < this.#enemys.length; index++) {
            this.#enemys[index].Draw(px, py);
        }
    };

    Update(px, py, player, objects, money) {
        this.#enemys = this.#enemys.filter(e => !e.dead);
        for (let index = 0; index < this.#enemys.length; index++) {
            this.#enemys[index].Update(px, py, player, objects, money);
        }
        if (player.ref.died) {
            return;
        }
        if ((getSec() * 1000 - this.#canAddSlime > 0 && this.#enemys.length < this.#wantedSlimeAmount) || this.#enemys.length < 3) {
            this.#enemys.push(new Enemy(px +
                (Math.random() < 0.5 ? -1 : 1) * this.#minDist * (Math.random() + 1),
                py +
                (Math.random() < 0.5 ? -1 : 1) * this.#minDist * (Math.random() + 1), this.remove));

            this.#canAddSlime = getSec() * 1000 + (Math.random() * 3500);
        }
        this.#wantedSlimeAmount = 10 + Math.floor(getSec() / 10);
    };
};

export default Enemys;