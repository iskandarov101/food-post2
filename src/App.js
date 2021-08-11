import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import DashPage from './pages/DashboardPage';
import SettingsPage from './pages/Settings';
import Sidebar from './containers/Sidebar/Sidebar';
import './assets/scss/main2.scss'
import './assets/main.scss'
function App() {
  const [dishItem,setDishItem] = useState([]);

  const onAdd = (colDishes) =>{
    const exist = dishItem.find((x)=> x.id === colDishes.id)
    if(exist){
      setDishItem(
        dishItem.map((x)=>
        x.id === colDishes.id ? {...exist,qty:exist.qty+1} : x
        )
      );
    }else{
      setDishItem([...dishItem,{...colDishes,qty:1}]);
    }
  }
    const onAdd1 = (soup) =>{
        const exist = dishItem.find((x)=> x.id === soup.id)
        if(exist){
            setDishItem(
                dishItem.map((x)=>
                    x.id === soup.id ? {...exist,qty:exist.qty+1} : x
                )
            );
        }else{
            setDishItem([...dishItem,{...soup,qty:1}]);
        }
    }
    const onAdd2 = (grill) =>{
        const exist = dishItem.find((x)=> x.id === grill.id)
        if(exist){
            setDishItem(
                dishItem.map((x)=>
                    x.id === grill.id ? {...exist,qty:exist.qty+1} : x
                )
            );
        }else{
            setDishItem([...dishItem,{...grill,qty:1}]);
        }
    }
    const onAdd3 = (hotDishes) => {
        const exist = dishItem.find((x)=> x.id === hotDishes.id)
        if(exist){
            setDishItem(
                dishItem.map((x)=>
                    x.id === hotDishes.id ? {...exist,qty:exist.qty+1} : x
                )
            );
        }else{
            setDishItem([...dishItem,{...hotDishes,qty:1}]);
        }
    }
    const onAdd4 = (dessert) =>{
        const exist = dishItem.find((x)=> x.id === dessert.id)
        if(exist){
            setDishItem(
                dishItem.map((x)=>
                    x.id === dessert.id ? {...exist,qty:exist.qty+1} : x
                )
            );
        }else{
            setDishItem([...dishItem,{...dessert,qty:1}]);
        }
    }
    const onAdd5 = (appetizer) =>{
        const exist = dishItem.find((x)=> x.id === appetizer.id)
        if(exist){
            setDishItem(
                dishItem.map((x)=>
                    x.id === appetizer.id ? {...exist,qty:exist.qty+1} : x
                )
            );
        }else{
            setDishItem([...dishItem,{...appetizer,qty:1}]);
        }
    }

  return (
    <Router>
      <div className='content'>
        <Sidebar />
        <Switch>
          <div className='container'>
              <Route exact path="/" >
                <HomePage resItems={dishItem}  onAdd={onAdd} onAdd1={onAdd1} onAdd2={onAdd2}
                onAdd3={onAdd3} onAdd4={onAdd4} onAdd5={onAdd5}/>
              </Route>
              <Route path="/dashboard" component={DashPage} />
              <Route path="/settings" component={SettingsPage} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
