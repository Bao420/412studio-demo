
import '../src/component/sass/main.css';
// import './App.css'
import Header from '../src/component/layout/head/header/header'
import Banner from '../src/component/layout/head/banner/banner'
import BodyHead from './component/layout/body/bodyHead/bodyHead';
import BodyContent from './component/layout/body/bodyContent/bodyContent';
import Footer from './component/layout/footer/footer';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <BodyHead />
      <Router>
        <BodyContent />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
