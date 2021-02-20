import './App.css';
import PhotoGallery from './components/PhotoGallery.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to your gallery of images. You can click to enlarge image and select next or previous. Click anywhere to minimize image.
        </p>
        <div><PhotoGallery /></div>
      </header>
    </div>
  );
}

export default App;
