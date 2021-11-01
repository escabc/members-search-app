import React from 'react'
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Navigation from './Navigation'
import ProfessionalMembers from './ProfessionalMembers'
import CorporateMembers from './CorporateMembers'
import GovernmentMembers from './GovernmentMembers'

// Base stylesheets
import './normalize.css'

const createClient = () => (
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${process.env.MEMBERS_SEARCH_API}/graphql`
    }),
  })
)

const App = () => (
  <ApolloProvider client={createClient()}>
    <Router>
      <div style={{ padding: 0, width: '100%', maxWidth: 1000 }}>
        <Navigation />

        <Route exact path="/" render={() => <Redirect to="/professional" />} />
        <Route path="/professional" component={ProfessionalMembers} />
        <Route path="/corporate" component={CorporateMembers} />
        <Route path="/government" component={GovernmentMembers} />
      </div>
    </Router>
  </ApolloProvider>
)

export default App
