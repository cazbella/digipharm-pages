import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App.jsx';
import Crm from './container/dashboards/crm/crm.jsx';
import ScrollToTop from './components/ui/scrolltotop.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Crm />} />
          <Route path="dashboards/crm" element={<Crm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
