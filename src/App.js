import logo from './logo.svg';
import './App.css';
import Temp from './components/temp'


function App() {
  const { REACT_APP_API_ID } = process.env;
  return (
    <>
      
      <Temp api={REACT_APP_API_ID} />
     

    </>
  );
}

export default App;
