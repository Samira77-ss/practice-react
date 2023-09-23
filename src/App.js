import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <footer>
        This project was coded by Samira Seyfi and is{" "}
        <a href="https://github.com/Samira77-ss/practice-react" target="_blank">
          open sourced on GitHub
        </a>
      </footer>

      <Weather city="Tokyo" />
    </div>
  );
}

export default App;
