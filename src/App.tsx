import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { OrderDetails } from './pages/OrderDetails';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { CustomerDetails } from './pages/CustomerDetails';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="customer/:customerId" element={<CustomerDetails />} />
            <Route path="orders/:customerId" element={<OrderDetails />} /> 
            {/* Ensure this route is defined */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}