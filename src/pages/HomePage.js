import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState } from 'react';

import HomeHeader from '../components/HomeHeader/HomeHeader';
import HotDishes from '../containers/FoodContainer/hotDishes';
import ColdDishes from '../containers/FoodContainer/coldDishes';
import Soup from '../containers/FoodContainer/soup';
import Grill from '../containers/FoodContainer/grill';
import Appetizer from '../containers/FoodContainer/appetizer';
import Dessert from '../containers/FoodContainer/dessert';
import Order from '../containers/Order/Order';
import Overlay from '../containers/overlay/Overlay';

const HomePage = (props) => {
  const {onAdd,onAdd1,onAdd2,onAdd3,onAdd4,onAdd5,resItems} = props
  const [drawerState, setDrawerState] = useState(false)
  return (
    <Router>
      <div className='container-left'>
        <div>
          <HomeHeader />
        </div>

        <Switch>
          <div className='row'>
            <Route path="/hotDishes">
              <HotDishes onAdd={onAdd3}/>
            </Route>
            <Route path="/coldDishes">
              <ColdDishes onAdd={onAdd}/>
            </Route>
            <Route path="/soup">
              <Soup onAdd={onAdd1}/>
            </Route>
            <Route path="/grill">
              <Grill onAdd={onAdd2}/>
            </Route>
            <Route path="/appetizer">
              <Appetizer onAdd={onAdd5}/>
            </Route>
            <Route path="/dessert">
              <Dessert onAdd={onAdd4}/>
            </Route>
          </div>
        </Switch>
      </div>

      <div className='container-right'>
        <Order resItems={resItems} drawerState={drawerState} setDrawerState={setDrawerState}/>
        <Overlay  drawerState={drawerState}  setDrawerState={setDrawerState}/>
      </div>

    </Router>


  )
}

export default HomePage;