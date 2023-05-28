import React from "react";
// import { Link, useLocation } from "wouter";
import style from "./Menu.module.css";

import screens from "../../codes/screens";
import AuthContext from "../../codes/AuthContext";

function Menu() {
    const ctx = React.useContext(AuthContext);
    // const [location, navigate] = useLocation();

    if (ctx.play && ctx.path !== '/') {
        ctx.setPlay(false);
    }

    return <div className={style.screen}>
        <h1 className={style.title}>Dead Survivor</h1>
        {Object.keys(screens)
            .filter(e => screens[e] !== ctx.path)
            .map(e =>
                <button onClick={() => ctx.setPath(screens[e])} key={e}>{e}</button>
                // <Link to={screens[e]} key={e}>{e}</Link>
            )}
    </div>;
};

export default Menu;