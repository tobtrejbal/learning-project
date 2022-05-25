import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

export const PlanetComponent = () => {
    
    return (
        <Outlet/>
    );
}

export default observer(PlanetComponent);