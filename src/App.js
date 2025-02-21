
import './App.css';
import Header from "./Componetner/Header/Header/Header"
import LanguageProvider from './Constext/LanguageConstext';
import Main from './Componetner/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upcoming from './Componetner/Main/Upcoming';
import Past from './Componetner/Main/Past';
import Status from './Componetner/Main/Status';
import Footer from './Componetner/Footer/Footer';
import DoctorInfoPage from './Pages/DoctorInfoPage';
import "./i18n"
import LoginForm from './Componetner/Login/LoginForm';
import { AuthProvider } from './Constext/authConstext';

function App() {
  return (
    <>
      <BrowserRouter>
        <LanguageProvider >
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path='/header' element={ <Header />}/>
             
                <Route path="/main" element={<Main />}>
                  <Route path="Upcoming" element={<Upcoming />} />
                  <Route path="Past" element={<Past />} />
                  <Route path="Status" element={<Status />} />
                </Route>
                <Route path="/Doctor/:id" element={<DoctorInfoPage />} />
            
              <Route path="/footer"  element={<Footer />}/>
            </Routes >
          </AuthProvider>
        </LanguageProvider>
      </BrowserRouter>
      


    </>

  );
}

export default App;
