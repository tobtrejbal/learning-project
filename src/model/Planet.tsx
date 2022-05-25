import { observable, action, makeObservable } from 'mobx';

export class Planet {
    
    @observable name: string = "";
    @observable population: number = 0;
    @observable diameter: number = 0;
    @observable gravity: string = "";
    @observable orbitalPeriod: number = 0;
    @observable terrain: string = "";
    @observable url: string = "";
    
    constructor(name: string, population: number, diameter: number, gravity: string, orbitalPeriod: number, terrain: string, url: string) {
        makeObservable(this);
        this.name = name;
        this.population = population;
        this.diameter = diameter;
        this.gravity = gravity;
        this.orbitalPeriod = orbitalPeriod;
        this.terrain = terrain;
        this.url = url;
    }
}