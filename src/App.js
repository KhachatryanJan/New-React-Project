
import './App.css';
import Header from "./Componetner/Header/Header/Header"
import LanguageProvider from './Constext/LanguageConstext';
function App() {
  return (
    <>
     <LanguageProvider >
     <Header/>
     </LanguageProvider>
 
  

   </>
   
  );
}

export default App;
