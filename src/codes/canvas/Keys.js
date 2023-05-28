let keys = [];

document.addEventListener('keydown', event => {
    if (!keys.find(e => e === event.key)) {
        keys.push(event.key);
    }
});

document.addEventListener('keyup', event => {
    keys = keys.filter(e => e !== event.key);
});

const KeyIsHold = (key, remove = false) => {
    const toReturn = !!keys.find(e => e === key);
    if (remove) {
        keys = keys.filter(e => e !== key);
    }
    return toReturn;
}

export default KeyIsHold;