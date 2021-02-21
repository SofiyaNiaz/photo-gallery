import './App.css';
import PhotoGallery from './components/PhotoGallery.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to your gallery of images
        </p>
        <div><PhotoGallery /></div>
      </header>
    </div>
  );
}

export default App;
