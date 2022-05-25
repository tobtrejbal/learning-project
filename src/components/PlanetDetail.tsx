import React from 'react';
import RootStore from "../store/RootStore";
import {Planet} from "../model/Planet"; 
import { observer } from 'mobx-react-lite';
import { useEffect } from "react";


interface PlanetDetailProps {
    planet: Planet;
}

export const PlanetDetailComponent = ({ planet }: PlanetDetailProps) => {
    
    return (
        <div className="mt-5">
            <h1 className="sectionHeadline">{planet?.name}</h1>
            <h2>{planet?.terrain}</h2>
        </div>
    );
}

export default observer(PlanetDetailComponent);