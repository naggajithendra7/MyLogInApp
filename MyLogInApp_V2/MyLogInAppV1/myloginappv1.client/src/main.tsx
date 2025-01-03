import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom';

const domain = import.meta.env.VITE_AUTH0_DOMAIN //process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
if (!domain || !clientId) {
    throw new Error('Auth0 domain and client ID are required');
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: "https://localhost:5173/clientgrid", // window.location.origin,
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
  </StrictMode>,
)
