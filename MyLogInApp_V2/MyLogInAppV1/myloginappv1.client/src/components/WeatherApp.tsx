import React, { useEffect, useState } from 'react';
import WeatherTable from './WeatherTable';
import LoadingMessage from './LoadingMessage';
import LogoutButton from './LogoutButton';
import '../App.css';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

const WeatherApp: React.FC = () => {
    const [forecasts, setForecasts] = useState<Forecast[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchWeatherDataWithRetry = async (url: string, retries: number, delay: number) => {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                const data = await response.json();
                setForecasts(data);
                setLoading(false);
                return; // Exit the function on success
            } catch (err) {
                if (attempt === retries) {
                    setError('Unable to load data after multiple attempts. Please try again later. ' + err);
                    setLoading(false);
                } else {
                    await new Promise((resolve) => setTimeout(resolve, delay));
                }
            }
        }
    };

    useEffect(() => {
        fetchWeatherDataWithRetry('weatherforecast', 5, 2000); // Retry up to 5 times with a 2-second delay
    }, []);

    if (loading) {
        return <LoadingMessage />;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (

        <div>
            <LogoutButton />
            <h1 id="tableLabel">Weather Forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {forecasts && <WeatherTable forecasts={forecasts} />}
        </div>
    );
};

export default WeatherApp;