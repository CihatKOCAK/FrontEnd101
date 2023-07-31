import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Settings from './pages/Settings/Settings';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import TopBar from './components/topbar/TopBar';
import { Context } from './context/Context';

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/register" element={user ? <Home /> : <Register />} />
        <Route exact path="/settings" element={user ? <Settings /> : <Login />} />
        <Route exact path="/post/:postId" element={<Single />} />
        <Route exact path="/write" element={user ? <Write /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
