import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            <img src="https://studio21.ru/wp-content/uploads/2019/10/TVETH-1024x674.jpg"/>
            {props.name}
        </NavLink>
    </div>
}


export default DialogItem;
