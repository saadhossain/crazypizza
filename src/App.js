import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routers } from './Router/Routers';

function App() {
  const routers = Routers
  return (
    <div>
      <RouterProvider router={routers}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
