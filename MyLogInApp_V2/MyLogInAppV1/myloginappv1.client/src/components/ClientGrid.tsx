import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

interface Client {
    id: number;
    name: string;
}

const API_URL = 'https://localhost:7039/api/Clients'; // Backend API URL

const ClientGrid: React.FC = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [newClientName, setNewClientName] = useState('');

    const fetchClients = async () => {
        try {
            const response = await axios.get(`${API_URL}`);
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    const addClient = async () => {
        if (newClientName.trim() === '') return;
        try {
            const response = await axios.post(`${API_URL}`, { name: newClientName });
            setClients([...clients, response.data]);
            setNewClientName('');
        } catch (error) {
            console.error('Error adding client:', error);
        }
    };

    const deleteClient = async (id: number) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setClients(clients.filter(client => client.id !== id));
        } catch (error) {
            console.error('Error deleting client:', error);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 300 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Button color="error" onClick={() => deleteClient(params.row.id)}>
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <TextField
                label="New Client Name"
                value={newClientName}
                onChange={(e) => setNewClientName(e.target.value)}
            />
            <Button onClick={addClient} variant="contained" color="primary">
                Add Client
            </Button>
            <DataGrid
                rows={clients}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 20]} // Optional: dropdown for page sizes
            />
        </div>
    );
};

export default ClientGrid;