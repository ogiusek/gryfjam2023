import { canvas } from "./Canvas";

function Resize() {
    if (canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

export default Resize;