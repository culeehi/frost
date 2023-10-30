import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Describe from './components/describe/Describe';
import Footer from './components/footer/Footer';

function App() {
   return (
      <div className="App">
         <Header />
         <Content />
         <Describe />
         <Footer></Footer>
      </div>
   );
}

export default App;
