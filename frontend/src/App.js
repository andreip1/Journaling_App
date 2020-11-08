import React, { Fragment, useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts/Posts'
import AddPostButton from './Components/AddPostButton'
import CreatePost from './Components/Posts/CreatePost'
import UpdatePost from './Components/Posts/UpdatePost'
import SearchBar from './Components/SearchBar'
import { Provider } from 'react-redux'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store'




const App = () => {
  useEffect(() => {
    //initialize materialize js so I can use modals and stuff
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <SearchBar />
          <div className="container">
            <AddPostButton />
            <CreatePost />
            <UpdatePost />
            <Posts />
          </div>
          {/* <Route path="/posts" component={<Posts />} /> */}
        </Fragment>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
