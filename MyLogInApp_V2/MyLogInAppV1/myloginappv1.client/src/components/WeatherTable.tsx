import React from 'react';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

interface WeatherTableProps {
    forecasts: Forecast[];
}

const WeatherTable: React.FC<WeatherTableProps> = ({ forecasts }) => {
    if (forecasts.length === 0) {
        return <p>No weather data available.</p>;
    }

    return (
        <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Temp. (C)</th>
                    <th scope="col">Temp. (F)</th>
                    <th scope="col">Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map((forecast) => (
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default WeatherTable;