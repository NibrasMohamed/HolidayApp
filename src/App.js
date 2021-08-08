import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import holidays from './pages/holiday';
import addHoliday from './pages/add-holiday';
import EditHoliday from './pages/edit_holiday';



function App() {
  return(
          <Router>
              <Switch>
                <Route exact path='/' component={holidays} />   
                <Route path='/add-holiday' component={addHoliday} />
                <Route path='/edit-holiday/:id' component={EditHoliday} />   
              </Switch>
          </Router>

  );
}

export default App;
