import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/signUp';
import MainPage from './pages/main';
import ProtectedRoute from './components/protectedRoute';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUpPage />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />         
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
