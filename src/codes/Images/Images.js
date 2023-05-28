import back from "./back";
import town from "./town";
import center from "./Center";

import p_rWalk1 from "./player/rWalk1.png";
import p_rWalk2 from "./player/rWalk2.png";
import p_rWalk3 from "./player/rWalk3.png";
import p_rWalk4 from "./player/rWalk4.png";

import p_lWalk1 from "./player/lWalk1.png";
import p_lWalk2 from "./player/lWalk2.png";
import p_lWalk3 from "./player/lWalk3.png";
import p_lWalk4 from "./player/lWalk4.png";

import p_tWalk1 from "./player/tWalk1.png";
import p_tWalk2 from "./player/tWalk2.png";
import p_tWalk3 from "./player/tWalk3.png";
import p_tWalk4 from "./player/tWalk4.png";

import p_bWalk1 from "./player/bWalk1.png";
import p_bWalk2 from "./player/bWalk2.png";
import p_bWalk3 from "./player/bWalk3.png";
import p_bWalk4 from "./player/bWalk4.png";

import p_lStand1 from "./player/lStand1.png";
import p_lStand2 from "./player/lStand2.png";
import p_lStand3 from "./player/lStand3.png";
import p_lStand4 from "./player/lStand4.png";
import p_lStand5 from "./player/lStand5.png";

import p_rStand1 from "./player/rStand1.png";
import p_rStand2 from "./player/rStand2.png";
import p_rStand3 from "./player/rStand3.png";
import p_rStand4 from "./player/rStand4.png";
import p_rStand5 from "./player/rStand5.png";

import p_tStand5 from "./player/tStand5.png";
import p_bStand5 from "./player/bStand5.png";

import p_rDeath1 from "./player/rDeath1.png";
import p_rDeath2 from "./player/rDeath2.png";
import p_rDeath3 from "./player/rDeath3.png";
import p_rDeath4 from "./player/rDeath4.png";

import p_lDeath1 from "./player/lDeath1.png";
import p_lDeath2 from "./player/lDeath2.png";
import p_lDeath3 from "./player/lDeath3.png";
import p_lDeath4 from "./player/lDeath4.png";

import speed_door from "./doors/speed.png";
import power_door from "./doors/power.png";
import time_door from "./doors/time.png";

import s_lStand1 from "./enemys/slime/lStand1.png";
import s_lStand2 from "./enemys/slime/lStand2.png";
import s_lStand3 from "./enemys/slime/lStand3.png";

import s_rStand1 from "./enemys/slime/rStand1.png";
import s_rStand2 from "./enemys/slime/rStand2.png";
import s_rStand3 from "./enemys/slime/rStand3.png";

import s_lWalk1 from "./enemys/slime/lWalk1.png";
import s_rWalk1 from "./enemys/slime/rWalk1.png";

// const customFont = new FontFace('GameOver', 'url(./GhastlyPixe.ttf)');
// customFont.load().then((font) => {
// document.fonts.add(font);
// }).catch(e => {
// console.log('err');
// });

const images = {
    back: back,
    center: center,

    speed_door: speed_door,
    power_door: power_door,
    time_door: time_door,

    player_rWalk1: p_rWalk1.toString(),
    player_rWalk2: p_rWalk2.toString(),
    player_rWalk3: p_rWalk3.toString(),
    player_rWalk4: p_rWalk4.toString(),

    player_lWalk1: p_lWalk1.toString(),
    player_lWalk2: p_lWalk2.toString(),
    player_lWalk3: p_lWalk3.toString(),
    player_lWalk4: p_lWalk4.toString(),

    player_tWalk1: p_tWalk1.toString(),
    player_tWalk2: p_tWalk2.toString(),
    player_tWalk3: p_tWalk3.toString(),
    player_tWalk4: p_tWalk4.toString(),

    player_bWalk1: p_bWalk1.toString(),
    player_bWalk2: p_bWalk2.toString(),
    player_bWalk3: p_bWalk3.toString(),
    player_bWalk4: p_bWalk4.toString(),

    player_lStand1: p_lStand1.toString(),
    player_lStand2: p_lStand2.toString(),
    player_lStand3: p_lStand3.toString(),
    player_lStand4: p_lStand4.toString(),
    player_lStand5: p_lStand5.toString(),

    player_rStand1: p_rStand1.toString(),
    player_rStand2: p_rStand2.toString(),
    player_rStand3: p_rStand3.toString(),
    player_rStand4: p_rStand4.toString(),
    player_rStand5: p_rStand5.toString(),

    player_tStand5: p_tStand5.toString(),
    player_bStand5: p_bStand5.toString(),

    player_rDeath1: p_rDeath1.toString(),
    player_rDeath2: p_rDeath2.toString(),
    player_rDeath3: p_rDeath3.toString(),
    player_rDeath4: p_rDeath4.toString(),

    player_lDeath1: p_lDeath1.toString(),
    player_lDeath2: p_lDeath2.toString(),
    player_lDeath3: p_lDeath3.toString(),
    player_lDeath4: p_lDeath4.toString(),

    slime_lWalk1: s_lWalk1.toString(),
    slime_rWalk1: s_rWalk1.toString(),

    slime_lStand1: s_lStand1.toString(),
    slime_lStand2: s_lStand2.toString(),
    slime_lStand3: s_lStand3.toString(),

    slime_rStand1: s_rStand1.toString(),
    slime_rStand2: s_rStand2.toString(),
    slime_rStand3: s_rStand3.toString(),

};

export default images;