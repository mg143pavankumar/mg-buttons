import "./App.css";
import SlideableButton from "./mg-buttons/mg/SlideableButton";
// import SlideableButton from "mg-react-buttons/mg/SlideableButton";

function App() {
  const theme = {
    width: "300px",
    height: "50px",
    textColor: "#000",
    bgSecondaryColor: "khaki",
    bgPrimaryColor: "#fff",
  };
  return (
    <div className="App">
      <header className="App-header">
        <SlideableButton theme={theme}>Hello! React</SlideableButton>
      </header>
    </div>
  );
}

export default App;
