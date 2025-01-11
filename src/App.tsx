import Test from "./functionalities/test/Test";
import Button from "./components/Button";
import "./App.css";
import Test2 from "./functionalities/test2/Test2";

function App() {
  return (
    <div>
      <Test />
      <Button text="Registrarme" />
      <p>este boton se llama directamente desde App.tsx</p>
      <hr />
      <Test2 />
    </div>
  );
}

export default App;
