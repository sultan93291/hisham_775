import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AosProvider from './Provider/Aos/AosProvider.jsx'
import router from './router/router.jsx'



createRoot(document.getElementById("root")).render(
  <AosProvider>
    <RouterProvider router={router} />
  </AosProvider>
);
