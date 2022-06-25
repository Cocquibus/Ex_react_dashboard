import React, { useState } from "react";
import Record from "./data.json"
import "./style.css"
import MiniCards from "./miniCards";
export default function BigCard() {
    let [modif, setmodif] = useState({
        bigHrs0: Record[0].timeframes.weekly,
        bigHrs1: Record[1].timeframes.weekly,
        bigHrs2: Record[2].timeframes.weekly,
        bigHrs3: Record[3].timeframes.weekly,
        bigHrs4: Record[4].timeframes.weekly,
        bigHrs5: Record[5].timeframes.weekly
    })
    function Daily() {
        setmodif({
            bigHrs0: Record[0].timeframes.daily,
            bigHrs1: Record[1].timeframes.daily,
            bigHrs2: Record[2].timeframes.daily,
            bigHrs3: Record[3].timeframes.daily,
            bigHrs4: Record[4].timeframes.daily,
            bigHrs5: Record[5].timeframes.daily
        })
    }
    function Weekly() {
        setmodif({
            bigHrs0: Record[0].timeframes.weekly,
            bigHrs1: Record[1].timeframes.weekly,
            bigHrs2: Record[2].timeframes.weekly,
            bigHrs3: Record[3].timeframes.weekly,
            bigHrs4: Record[4].timeframes.weekly,
            bigHrs5: Record[5].timeframes.weekly        
        })
    }
    function Monthly() {
        setmodif({
            bigHrs0: Record[0].timeframes.monthly,
            bigHrs1: Record[1].timeframes.monthly,
            bigHrs2: Record[2].timeframes.monthly,
            bigHrs3: Record[3].timeframes.monthly,
            bigHrs4: Record[4].timeframes.monthly,
            bigHrs5: Record[5].timeframes.monthly        
        })
    }
    return (
        <div className="position">
            <div className="bigCard">
                <div className="blueChar">
                    <img className="imgJeremy" src="./images/image-jeremy.png" />
                    <h1 className="nomTitle">Jeremy Robson</h1>
                </div>
                <div className="btnBottom">
                    <div><button onClick={() => Weekly()}>Weekly</button></div>
                    <div><button onClick={() => Daily()}>Daily</button></div>
                    <div><button onClick={() => Monthly()}>Monthly</button></div>
                </div>
            </div>
            <div className="positionCards">
                <MiniCards _choixCard={"Card CardRed"} _Title={Record[0].title} _Data={modif.bigHrs0}/>
                <MiniCards _choixCard={"Card CardBlue"} _Title={Record[1].title} _Data={modif.bigHrs1}/>
                <MiniCards _choixCard={"Card CardPink"} _Title={Record[2].title} _Data={modif.bigHrs2}/>
                <MiniCards _choixCard={"Card CardGreen"} _Title={Record[3].title} _Data={modif.bigHrs3}/>
                <MiniCards _choixCard={"Card CardViolet"} _Title={Record[4].title} _Data={modif.bigHrs4}/>
                <MiniCards _choixCard={"Card CardYellow"} _Title={Record[5].title} _Data={modif.bigHrs5}/>
            </div>
        </div>
    )
}