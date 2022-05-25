import { observable, action, makeObservable } from 'mobx';
import PlanetStore from './PlanetStore';

class RootStore {
    planetStore: PlanetStore;
    
    constructor() {
        this.planetStore = new PlanetStore();
    }
}

export default new RootStore();