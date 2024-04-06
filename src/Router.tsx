import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Write from './pages/write';
import Auth from '@pages/Auth';
import Home from '@pages/Home';
import OthersWriting from '@components/OthersDayBook';
import MyDaybookPage from '@pages/MyDaybookPage';
import useAuth from '@hooks/useAuth';

const Router = () => {
  const { AuthRequired } = useAuth();

  return (
    <BrowserRouter>
      <AuthRequired />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/write" element={<Write />} />
        <Route path="/my" element={<MyDaybookPage />} />
        <Route path="/detail/:id" element={<OthersWriting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
