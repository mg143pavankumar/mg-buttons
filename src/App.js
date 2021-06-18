import "./App.css";
import SlideableButton from "mg-react-buttons/mg/SlideableButton";

function App() {
  const theme = {
    width: "300px",
    height: "50px",
  };
  return (
    <div className="App">
      <header className="App-header">
        <SlideableButton
          theme={theme}
          textColor="#000"
          bgSecondaryColor="khaki"
          bgPrimaryColor="#fff"
        >
          Hello! React
        </SlideableButton>
      </header>
    </div>
  );
}

export default App;
