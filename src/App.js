import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import User from './component/User';


function App() {
  return (
    <div className="App grid md:grid-flow-col md:grid-cols-5 md:px-14 py-1 px-1 grid-flow-row gap-2">
    <Main  />
    <User/>
    </div>
  );
}

export default App;
