import React, { useEffect } from "react";
import style from "./Game.module.css";

import { setReq, req } from "../../codes/canvas/Canvas";
import AuthContext from "../../codes/AuthContext";
import Draw from "../../codes/canvas/draw/Draw";
import Resize from "../../codes/canvas/Resize";
import Update from "../../codes/canvas/Update";
import screens from "../../codes/screens";
import images from "../../codes/Images/Images";
import Reset from "../../codes/canvas/Reset";
// import canAnimate from "../../codes/canvas/Animate";
// import KeyIsPressed from "../../codes/canvas/move/Keys";

function Game() {
    const ctx = React.useContext(AuthContext);

    useEffect(() => {
        if (!ctx.play) {
            ctx.setPlay(true);
        }
    });

    const animate = () => {
        if (!ctx.play) {
            return;
        }
        setReq(requestAnimationFrame(animate));

        Resize();
        Update();
        Draw();
    }

    if (ctx.play) {
        cancelAnimationFrame(req);
        animate();
        Reset();
    }
    return <div className={style.interface}>
        {/* <Link to={screens.menu}><img src={images.back} alt="" /></Link> */}
        <img src={images.back} alt="" onClick={() => ctx.setPath('/menu')} />
        {/* interface */}
    </div>;
};



export default Game;