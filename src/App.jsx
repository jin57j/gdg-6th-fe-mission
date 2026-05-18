import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage'; 
import CategoryPage from './pages/CategoryPage';
import PricePage from './pages/PricePage';
import SortingPage from './pages/SortingPage';
import AdminPage from './pages/AdminPage'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />, 
  },
  {
    path: '/category',
    element: <CategoryPage />,
  },
  {
    path: '/price',
    element: <PricePage />,
  },
  {
    path: '/sorting',
    element: <SortingPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;