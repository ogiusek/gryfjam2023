import images from "../Images/Images";
import DrawImage from "../canvas/draw/Func/Image";
import { c } from "../canvas/Canvas";

class CenterPlate {
    #size = 72;

    Draw(playerX, playerY) {
        c.fillStyle = 'rgb(160, 149, 180)';
        c.fillRect(playerX - this.#size / 2 - 10, playerY - this.#size / 2 - 10,
            this.#size + 20, this.#size + 20);

        DrawImage(images.center,
            playerX - this.#size / 2,
            playerY - this.#size / 2, this.#size, this.#size);
    }
}
const centerPlate = new CenterPlate();
export default centerPlate;