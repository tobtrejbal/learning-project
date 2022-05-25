import React from 'react';
import RootStore from "../store/RootStore";
import {Planet} from "../model/Planet"; 
import { observer } from 'mobx-react-lite';
import { PlanetDetailComponent } from './PlanetDetail';
import { useParams } from "react-router-dom";

export const PlanetDetailWrapperComponent = () => {
    const planetName = useParams().name;

    const planetStore = RootStore.planetStore;

    const [planet, setPlanet] = React.useState<Planet>();

    React.useEffect(() => {
        async function temp() {
            const result = await planetStore.getPlanetByName(planetName!);
            setPlanet(result);  
        }
        temp();
    }, [planetName]);

    return (
        <PlanetDetailComponent planet={planet!}/>
    );
}

export default observer(PlanetDetailWrapperComponent);