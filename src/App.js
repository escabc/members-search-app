import React from 'react'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Navigation from './Navigation'
import ProfessionalMembers from './ProfessionalMembers'
import CorporateMembers from './CorporateMembers'
import GovernmentMembers from './GovernmentMembers'

// Base stylesheets
import './normalize.css'

const createClient = () => (
  new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: `${process.env.MEMBERS_SEARCH_API}/graphql`,
    }),
  })
)

const App = () => (
  <ApolloProvider client={createClient()}>
    <Router>
      <div>
        <Navigation />

        <Route exact path="/" component={ProfessionalMembers} />
        <Route path="/professional" component={ProfessionalMembers} />
        <Route path="/corporate" component={CorporateMembers} />
        <Route path="/government" component={GovernmentMembers} />
      </div>
    </Router>
  </ApolloProvider>
)

export default App
