import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';




export default function App() {

  return (
    <BrowserRouter>
       <div className="App">
          <div className="container">
                <Header />
                  <AppRouter />
                <Footer />
          </div>
        </div>
    </BrowserRouter>
 
  );
}

// export default App;
