import images from "../../../Images/Images";
import { c, canvas } from "../../Canvas";

let renderedImages = [];

for (let index = 0; index < images.length; index++) {
    const nImg = new Image();
    nImg.onload = () => {
        renderedImages.push(nImg);
    };
    nImg.src = images[index];
}

function DrawImage(src, xPos, yPos, width, height, angle = 0) {
    const imageIndex = renderedImages.findIndex(e => e.src === src);
    const img = imageIndex === -1 ?
        new Image() :
        renderedImages[imageIndex];

    if (imageIndex === -1) {
        img.src = src;
        renderedImages.push(img);
    }

    if (width > 0 && height > 0) {
        c.drawImage(img, xPos, yPos, width, height);
    }
}

export default DrawImage;