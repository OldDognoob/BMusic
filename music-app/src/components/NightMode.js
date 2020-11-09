import React from "react";
import StyleNightMode from "./styles/StyledNightMode";

const NightMode = ({nightModeCallBack, nightMode}) => (
    <StyleNightMode>
        <span>NighMode:</span>
        <label className="switch">
            <input type="checkbox"checked={nightMode} onChange={nightModeCallBack}/>
            <span className="slider round"/>
        </label>
    </StyleNightMode>
)
export default NightMode;