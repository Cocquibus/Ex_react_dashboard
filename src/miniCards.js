import React, { useState } from "react";
import "./style.css"
export default function MiniCards({ _choixCard, _Data, _Title}) {
    return (
        <div className={_choixCard}>
            <div className="bluePanel">
                <div className="PanelContainer">
                    <div>
                        <h4>{_Title}</h4>
                    </div>
                    <div className="PanelBtn">
                        <button className="btnPanel"></button>
                        <button className="btnPanel"></button>
                        <button className="btnPanel"></button>
                    </div>
                </div>
                <h2>{_Data.current}hrs</h2>
                <p>Last week - {_Data.previous} Hrs</p>
            </div>
        </div>
    )
}