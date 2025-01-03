//import { useEffect, useState } from 'react';
//import './App.css';

//interface Forecast {
//    date: string;
//    temperatureC: number;
//    temperatureF: number;
//    summary: string;
//}

//function App() {
//    const [forecasts, setForecasts] = useState<Forecast[]>();

//    useEffect(() => {
//        populateWeatherData();
//    }, []);

//    const contents = forecasts === undefined
//        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//        : <table className="table table-striped" aria-labelledby="tabelLabel">
//            <thead>
//                <tr>
//                    <th>Date</th>
//                    <th>Temp. (C)</th>
//                    <th>Temp. (F)</th>
//                    <th>Summary</th>
//                </tr>
//            </thead>
//            <tbody>
//                {forecasts.map(forecast =>
//                    <tr key={forecast.date}>
//                        <td>{forecast.date}</td>
//                        <td>{forecast.temperatureC}</td>
//                        <td>{forecast.temperatureF}</td>
//                        <td>{forecast.summary}</td>
//                    </tr>
//                )}
//            </tbody>
//        </table>;

//    return (
//        <div>
//            <h1 id="tabelLabel">Weather forecast</h1>
//            <p>This component demonstrates fetching data from the server.</p>
//            {contents}
//        </div>
//    );

//    async function populateWeatherData() {
//        const response = await fetch('weatherforecast');
//        const data = await response.json();
//        setForecasts(data);
//    }
//}

//import WeatherApp from './components/WeatherApp';
//function App() {
//    return <WeatherApp />;
//}

//export default App;

import  { useEffect } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import WeatherApp from './components/WeatherApp';
import ClientGrid from './components/ClientGrid';
import { useAuth0 } from "@auth0/auth0-react";
import {Routes, Route, useNavigate } from 'react-router-dom'
const App = () => {
    const { isAuthenticated, user, isLoading } = useAuth0();
    const navigate = useNavigate();


    //useEffect(() => {
    //    if (isLoading) return; // Show loading state while authentication is in progress
    //}, [isLoading]);
    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate('/clientgrid'); // Redirect to WeatherApp when logged in
        }
    }, [isLoading, isAuthenticated, navigate]);

    //return (
    //    <main className="column">
    //        <h1>Auth0 Login</h1>

    //        {isAuthenticated ? (
    //            <div>
    //                <h2>Welcome, {user?.name}</h2>
    //                <LogoutButton />
    //            </div>
    //        ) : (
    //            <LoginButton />
    //        )}
    //    </main>
    //);
    return (
        <Routes>
            <Route path="/" element={
                <main className="column">
                    <h1>Auth0 Login</h1>
                    {!isAuthenticated ? (
                        <LoginButton />
                    ) : (
                        <div>
                            <h2>Welcome, {user?.name}</h2>
                            <LogoutButton />
                        </div>
                    )}
                </main>
            } />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/clientgrid" element={<ClientGrid/> } />
        </Routes>
    );
};

export default App;