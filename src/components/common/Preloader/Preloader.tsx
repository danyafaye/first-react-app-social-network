import preloader from "../../../assets/images/Spinner-1s-200px.svg";
import React from "react";

type PropsType = {
}

let Preloader: React.FC<PropsType> = (props) => {
    return <img src={preloader}/>
}

export default Preloader;