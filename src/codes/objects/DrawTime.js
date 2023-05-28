import { c, canvas } from "../canvas/Canvas";
import { getSec } from "../canvas/Animate";


function DrawTime() {
    c.font = '24px GameOver';
    c.fillStyle = 'white';
    c.textAlign = 'center';
    c.textBaseline = 'top';

    c.fillText(getSec() + 's', canvas.width / 2, 5);
}

export default DrawTime;