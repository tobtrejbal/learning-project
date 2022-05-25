import { observable, action, makeObservable } from 'mobx';
import { Planet } from '../model/Planet';

import APIServicePlanets from '../services/APIServicePlanets';

class PlanetStore {
    apiService: APIServicePlanets;
    constructor() {
        this.apiService = new APIServicePlanets();
        makeObservable(this)
    }

    @observable planetList: Planet[] = [];
    @observable selectedPlanet: Planet | undefined;

    @action setPlanetList(value: Planet[]) {
        this.planetList = value;
    }

    @action setSelectedPlanet(value: Planet | undefined) {
        this.selectedPlanet = value;
        console.log(this.selectedPlanet);
    }

    async loadData() {
        try {
            const data = await this.apiService.getPlanetList();
            const planets = data.results.map((
                { name, population, diameter, gravity, orbitalPeriod, terrain, url }:
                { name: string, population: number, diameter: number, gravity: string, orbitalPeriod: number, terrain: string, url: string }) =>
                new Planet(name, population, diameter, gravity, orbitalPeriod, terrain, url));
            this.setPlanetList(planets);
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {

        }
    }

    async getPlanetByName(name: string): Promise<Planet> {
        let planet = this.planetList.find((element) => { return element.name = name });
        if (!planet) {

        }
        return Promise.resolve(planet!);
    }
}

export default PlanetStore;