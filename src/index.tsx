import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import PlanetListComponent from './components/PlanetList'
import PlanetDetailWrapperComponent from './components/PlanetDetailWrapper'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PlanetComponent } from './components/Planet';

const root = ReactDOM.createRoot(
  document.getElementById("root")!
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="planets" element={<PlanetComponent />}>
            <Route index element={<PlanetListComponent />} />
            <Route path=":name" element={<PlanetDetailWrapperComponent />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
{/*<Route path=":name" element={<PlanetDetailWrapperComponent />} />*/ }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportFWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
