// src/router.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 使用 React.lazy 进行懒加载
const Home = lazy(() => import('~/pages/home.jsx'));
const Hi = lazy(() => import('~/pages/Hi/hi.jsx'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hi" element={<Hi />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
