import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Diablo2 from "./Content/GameItem/Diablo2/Diablo2";
import Diablo3 from "./Content/GameItem/Diablo3/Diablo3";
import PathOfExile from "./Content/GameItem/PathOfExile/PathOfExile";
import Content from "./Content/Content";

const CustomRouteMap = () => {
    return (
        <Routes>
            <Route path="/d2/*" element={<Diablo2/>}/>
            <Route path="/d3" element={<Diablo3/>}/>
            <Route path="/Poe" element={<PathOfExile/>}/>
            <Route exact path="/" element={<Content/>}/>
            <Route
                path="*"
                element={<Navigate to ="/" replace />}
            />

        </Routes>
    )
        ;
};

export default CustomRouteMap;