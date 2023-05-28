const framesLimit = 1000 / 60;
let firstFrame = Date.now();
let lastFrame = Date.now();

const canAnimate = () => {
    const animate = lastFrame + framesLimit <= Date.now();
    if (animate)
        lastFrame = Date.now();
    return animate;
}

const milisecPerAnimation = 175;

const getAnimationFrame = () => {
    return Math.floor((Date.now() - firstFrame) / milisecPerAnimation);
}

const reset = () => {
    firstFrame = Date.now();
    lastFrame = firstFrame;
}

const getSec = () => {
    return Math.max(0,
        Math.floor((Date.now() - firstFrame) / 1000));
}

export { getAnimationFrame, reset, getSec };
export default canAnimate;