import {Route} from 'react-router-dom';
import {Switch} from 'react-router';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import HomePage from './components/HomePage';

function App() {
  // console.log(harvardArt);
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path="/">
          <HomePage galleries={harvardArt.records}/>
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
