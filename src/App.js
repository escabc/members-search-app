import React from 'react'
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RestLink } from "apollo-link-rest";
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Navigation from './Navigation'
import ProfessionalMembers from './ProfessionalMembers'
import CorporateMembers from './CorporateMembers'
import GovernmentMembers from './GovernmentMembers'

// Base stylesheets
import './normalize.css'


// Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: process.env.ENDPOINT });
console.log(restLink)

fetch(`${process.env.ENDPOINT}/ams/authenticate`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "UserType": "Admin",
    "ClientID": process.env.CLIENT_ID,
    "Username": process.env.API_KEY,
    "Password": process.env.API_PASSWORD
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);

  fetch(`${process.env.ENDPOINT}/ams/${data.ClientID}/PeopleIDs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html',
      'X-ss-id': data.SessionId,
      // 'ClientID': data.ClientID,
      // "Access-Control-Allow-Origin": "*"
      // 'Authorization': 
    },
    // body: JSON.stringify({
    //   "UserType": "Member",
    //   "PageSize": 25,
    //   "PageNumber": 1
    // })
  })
  .then(response => console.log(response))
  // .then(data2 => console.log(data2));
})


const createClient = () => (
  new ApolloClient({
    // networkInterface: createNetworkInterface({
    //   uri: `${process.env.MEMBERS_SEARCH_API}/graphql`,
    // })
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
