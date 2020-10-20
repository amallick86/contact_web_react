import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Dashboard/NavBar";
import Dashboard from "./components/Dashboard/Dasboard";
import SignIn from "./components/auth/SinIn";

import "./App.css";
import Privacy from "./components/Privacy/Privacy";
import EventPage from "./components/Events/Event";
import Notifications from "./components/Notifications/Notifications";
import AccountPage from "./components/Account/Account";
import SignupPage from "./components/auth/SignupPage";
import AddPhotos from "./components/Photos/AddPhotos/AddPhotos";
import AlbumPage from "./components/Photos/AddPhotos/AlbumPage";
import Gallery from "./components/Photos/View Photo/Gallery";
import GalleryAlbumPage from "./components/Photos/View Photo/GalleryAlbumPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />

            <Route path="/login" component={SignIn} />

            <Route path="/privacy">
              <NavBar />
              <Privacy />
            </Route>
            <Route path="/signup" component={SignupPage} />

            <Route path="/gallery">
              <NavBar />
              <Gallery />
            </Route>
            <Route path="/account">
              <NavBar />
              <AccountPage />
            </Route>
            <Route path="/notifications">
              <NavBar />
              <Notifications />
            </Route>
            <Route path="/addphoto" component={AddPhotos} />

            <Route path="/album/:id" component={AlbumPage} />
            <Route path="/view/:id" component={GalleryAlbumPage} />
            <Route path="/event">
              <NavBar />
              <EventPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
