import logo from './logo.svg';
import './App.css';
import { Router, Routes , Route,BrowserRouter} from 'react-router-dom';
import Error404 from 'modules/Error404';
import Home from 'modules/Home';
import { Provider } from 'react-redux';
import store from 'store';
import Cases from 'modules/Cases';

import Services from 'modules/Services';
import About from 'modules/About';
import Careers from 'modules/Careers';
import Blog from 'modules/Blog';
import Contact from 'modules/Contact';
function App() {
  return (
    <Provider store={store}>
 <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error404/>} />
          <Route path="/" element={<Home />} />
               <Route path="/casos" element={<Cases />} />
                    <Route path="/servicios" element={<Services />} />
                    <Route path="/nosotros" element={<About />} />
                    <Route path="/carreras" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </Provider>
   
  );
}

export default App;
