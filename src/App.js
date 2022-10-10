
import './App.css';
import {RoutesRoot} from "./routes/RoutesRoot";
import {BrowserRouter} from "react-router-dom";


function App() {


  return (
      <BrowserRouter>
          <RoutesRoot/>
      </BrowserRouter>

  );
}

export default App;
