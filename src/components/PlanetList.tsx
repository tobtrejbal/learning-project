import React from 'react';
import RootStore from "../store/RootStore";
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";

export const PlanetListComponent = () => {

    const planetStore = RootStore.planetStore

    React.useEffect(() => {
        planetStore.loadData();
    }, []);

    let navigate = useNavigate();

    if (!planetStore.planetList) {
        return <h1>No data</h1>
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th key={"name_header"}>Name</th>
                        <th key={"population_header"}>Population</th>
                    </tr>
                </thead>
                <tbody>
                {(planetStore.planetList).map((item, indexInner) => (
                    <tr>
                        <td key={"name_" + indexInner}>{item.name}</td>
                        <td key={"population_" + indexInner}>{item.population}</td>
                        <td key={"detail_" + indexInner}><button onClick={() => {
                            navigate(`/planets/${item.name}`);
                            planetStore.setSelectedPlanet(item);
                        }}>Detail</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default observer(PlanetListComponent);