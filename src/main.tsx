import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from 'react-router-dom';

import {router} from './core/Routes';

import { CssBaseline, StyledEngineProvider } from '@mui/material';


ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container).render(
  
  <React.StrictMode>
    <CssBaseline/>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
);