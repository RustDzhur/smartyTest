import { Routes, Route } from 'react-router-dom';
import { NavMenu } from './components/Header/Header';
import { Main } from './pages/Main/Main';
import { News } from './pages/News/News';
import { DetailNews } from './pages/DetailsNews.js/DetailsNews';
import NotFoundPage from './pages/notFoundPage/notFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavMenu />}>
        <Route index element={<Main />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<DetailNews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
