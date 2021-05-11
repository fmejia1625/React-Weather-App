import './App.css';
import Weather from './components/Weather'
import './components/weatherstyle.css'
import background from './components/img/sky.png'

function App() {
  return (
    <div style={{backgroundImage: `url(${background})`}} className="App">
      {/* Create a header named weather app */}
      <Weather  />
    </div>
  );
}

export default App;
