
import { useReducer} from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';
import Home from './pages/home/index';
// import { Posts } from './data/dataframe';
import { initialState, reducer } from './hooks/usereducer';


function App() {
  // const [post, setPost]=useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='applayout'>
      < Navbar />
      < Home state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
