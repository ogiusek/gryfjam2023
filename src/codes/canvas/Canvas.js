const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

let req;
const setReq = (arg) => {
    c.imageSmoothingEnabled = false;
    c.imageSmoothingQuality = 'high';
    req = arg;
}

export {
    canvas, c,
    req, setReq
};