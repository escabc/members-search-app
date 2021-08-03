import React from 'react'
import { ApolloClient, HttpLink, ApolloProvider } from '@apollo/client';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Navigation from './Navigation'
import ProfessionalMembers from './ProfessionalMembers'
import CorporateMembers from './CorporateMembers'
import GovernmentMembers from './GovernmentMembers'

// Base stylesheets
import './normalize.css'

// console.log(`${process.env.MEMBERS_SEARCH_API}/graphql`);
// console.log(process.env.CLIENT_ID);
// console.log(process.env.API_KEY);
// console.log(process.env.API_PASSWORD);
// console.log(process.env.ENDPOINT);

// Set `RestLink` with your endpoint
// const restLink = new RestLink({ uri: process.env.ENDPOINT });

// fetch(`${process.env.ENDPOINT}/ams/authenticate`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     "UserType": "Admin",
//     "ClientID": 78913,
//     "Username": "a2a9acd0-3690-444b-8444-f4a93a5b9a08",
//     "Password": "99646ace-462f-4f01-88e7-15313e753793"
//   })
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })


const createClient = () => (
  new ApolloClient({
    // networkInterface: createNetworkInterface({
    //   uri: `${process.env.MEMBERS_SEARCH_API}/graphql`,
    // })
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
