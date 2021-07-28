import logo from './logo.svg';
import './App.css';
import Temp from './components/temp'
const { REACT_APP_API_ID } = process.env;

function App() {
 
  return (
    <>
      
      <Temp api={REACT_APP_API_ID} />
     

    </>
  );
}

export default App;
