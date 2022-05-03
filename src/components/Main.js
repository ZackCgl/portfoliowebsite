import React from 'react';
import {Route } from 'react-router-dom';
import { Switch } from "@chakra-ui/react";

import Home from '../App';
import Portfoilio from '../components/Portfolio';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/portfolio' component={Portfoilio}></Route>
    </Switch>
  );
}

export default Main;