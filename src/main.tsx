import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <App />
</StrictMode>
)
