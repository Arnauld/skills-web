import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Autocomplete from 'react-autocomplete';
import Rating from 'react-rating';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Arolla Skillz</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

function sortStates(a, b, value) {
  const aLower = a.name.toLowerCase()
  const bLower = b.name.toLowerCase()
  const valueLower = value.toLowerCase()
  const queryPosA = aLower.indexOf(valueLower)
  const queryPosB = bLower.indexOf(valueLower)
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB
  }
  return aLower < bLower ? -1 : 1
}


function getStates() {
  return [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WY', name: 'Wyoming' }
  ]
}

class App extends Component {
  state = { value: 'Ma' }

  render() {
    return (
      <div className="App">
        {navbarInstance}
        <Autocomplete
          value={this.state.value}
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={getStates()}
          getItemValue={(item) => item.name}
          shouldItemRender={matchStateToTerm}
          sortItems={sortStates}
          onChange={(event, value) => this.setState({ value })}
          onSelect={value => this.setState({ value })}
          renderMenu={children => (
            <div className="menu">
              {children}
            </div>
          )}
          renderItem={(item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={item.abbr}
            >{item.name}</div>
          )}
        />
        <div>
          <span>Java</span> <Rating />
        </div>
      </div>
    );
  }
}

export default App;
