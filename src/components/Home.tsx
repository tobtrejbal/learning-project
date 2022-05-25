import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

export const HomeComponent = () => {

    return (
        <div>
            <h1>Learning app</h1>
            <p>Application for testing different patterns, libraries and methods using test APIs</p>
        </div>
    );
}

export default observer(HomeComponent);