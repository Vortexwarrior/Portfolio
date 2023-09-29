import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header.js';
import Navigation from './navigation.js';
import AboutMe from './aboutme.js';
import PortfolioPage from './portfoliopage.js';
import Footer from './footer.js';
import Portfolio from './portfolio.js';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/portfolio" component={PortfolioPage} />
      </Switch>
      <Portfolio />
      <Footer />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));