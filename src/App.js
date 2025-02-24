
import './App.css';
import "./i18n"
import LoginForm from './Componetner/Login/LoginForm';
import { AuthProvider } from './Constext/authConstext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LanguageProvider from './Constext/LanguageConstext';


import Main from './Componetner/Main/Main';
import Upcoming from './Componetner/Main/Upcoming';
import Past from './Componetner/Main/Past';
import Status from './Componetner/Main/Status';

import DoctorInfoPage from './Pages/DoctorInfoPage';
import LoginUserName from './Componetner/Login/LoginUserName';
import { Provider } from 'react-redux';
import store from './store';






function App() {
  return (
    <Provider  store={store}>
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <Routes>
            <Route path="/Login" element={ <LoginForm /> } >
             {/* <Route path="UserName" element={<LoginUserName />} />*/}
            </Route>



            <Route path="/Home" element={<Main />}>
              <Route path="Upcoming" element={<Upcoming />} />
              <Route path="Past" element={<Past />} />
              <Route path="Status" element={<Status />} />

            </Route>

            <Route path="/Doctor/:id" element={<DoctorInfoPage />} />

          </Routes>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
    </Provider>
  );
}


export default App;
