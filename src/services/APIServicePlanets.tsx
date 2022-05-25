import config from "../config/Config.json";

class APIServicePlanets {

    async getPlanetList() {
        try {
          const res = await fetch(config.STARWARS_SERVER_URL);
          const data = await res.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      }    
    }
    
    export default APIServicePlanets;