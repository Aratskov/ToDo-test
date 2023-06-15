import { Route, Routes } from 'react-router-dom';
import AuthPage from 'pages/AuthPage';
import { Welcome } from 'pages/Welcome';
// import { Login } from './Login/Login';
// import { Register } from './Register/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="auth/:id" element={<AuthPage/>}/>
      <Route path="home" element={<div>HomePage</div>}/>
    </Routes>
  );
};
