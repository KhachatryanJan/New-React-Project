
import './App.css';
import Header from "./Componetner/Header/Header/Header"
import LanguageProvider from './Constext/LanguageConstext';
import Main from './Componetner/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upcoming from './Componetner/Main/Upcoming';
import Past from './Componetner/Main/Past';
import Status from './Componetner/Main/Status';
import Footer from './Componetner/Footer/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <LanguageProvider >
          <Header />
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/Upcoming" element={<Upcoming />} />
              <Route path="Past" element={<Past />} />
              <Route path="Status" element={<Status />} />
            </Route>
          </Routes>
          <Footer />
        </LanguageProvider>
      </BrowserRouter>

    </>

  );
}

export default App;
