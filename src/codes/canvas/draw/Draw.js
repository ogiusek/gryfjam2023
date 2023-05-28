// import images from "../../Images/Images";
import main from "../../objects/Main";
import { c, canvas } from "../Canvas";
import Clear from "./Clear";

function Draw() {
    Clear();

    // background
    // c.fillStyle = 'rgb(255, 240, 105)';
    // c.fillRect(0, 0, canvas.width, canvas.height);

    c.translate(canvas.width / 2, canvas.height / 2);
    main().Draw();
    c.translate(-canvas.width / 2, -canvas.height / 2);
    main().DrawText();
    // c.translate(canvas.width / 2, canvas.height / 2);
}

export default Draw;