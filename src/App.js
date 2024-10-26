import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Reconnaissance from './components/reconnaissance/Reconnaissance';

function App() {
  return (
   <>
    <Header />
     <main className='main'>
      <Home />
      <Reconnaissance />
     </main>
   </>
  );
}

export default App;

