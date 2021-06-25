import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// UI Components
import Sample from '../components/Sample';

function PageRoutes() {
  return (
    <div>
      <Router>
        <section className="content">
          <Switch>
            <Route path="/" component={Sample} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default PageRoutes;