import { useState, useEffect, useRef } from 'react';
import RootStore from "../store/RootStore";
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";
import { Form, Table } from 'react-bootstrap';
import useKeyCombinationPressed from '../hooks/KeyCombinationPressed';

export const PlanetListComponent = () => {

    const planetStore = RootStore.planetStore
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        planetStore.loadData();
    }, []);

    let navigate = useNavigate();
    useKeyCombinationPressed('f', () => {
        searchRef?.current?.focus();
    });

    if (!planetStore.planetList) {
        return <h1>No data</h1>
    }

    const filterData = (e: React.ChangeEvent<HTMLInputElement>) => {

        // TO-DO    
    }

    return (
        <div>
            <Form>
                <Form.Label>Search</Form.Label>
                <Form.Control ref={searchRef} onChange={filterData} />
            </Form>
            <Table className="table table-striped" key="planet-table">
                <thead>
                    <tr>
                        <th key={"name_header"}>Name</th>
                        <th key={"population_header"}>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {(planetStore.planetList).map((item, indexInner) => (
                        <tr key={"table-" + indexInner}>
                            <td key={"name-" + indexInner}>{item.name}</td>
                            <td key={"population-" + indexInner}>{item.population}</td>
                            <td key={"detail-" + indexInner}><button key={"detail_button-" + indexInner} onClick={() => {
                                navigate(`/planets/${item.name}`);
                            }}>Detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default observer(PlanetListComponent);