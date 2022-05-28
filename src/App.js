import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';

/**
 * Skeleton of the web app
 * <Swtich> is used for the different page/routes that the website can take. 
 * The website has a "main", "new-meetup", and "favorites" page. 
 */

function App() {
  return (
    <Layout>
      <Switch> 
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
