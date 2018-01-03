import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

function matchStateToTerm(state, value) {
      return (
        state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
      )
}

function sortSkills(a, b, value) {
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

function getSkills(value) {

  fetch('/skills/search?candidat='+value).then(function(response) {
    console.log(response.headers.get('Content-Type'))
    console.log(response.headers.get('Date'))
    console.log(response.status)
    console.log(response.statusText)
  })
}

class SkillSelector extends Component {

    state = { value: 'Ma' }

    onSkillSelected(value, skill) {
        this.props.onSkillSelected(skill);
        this.setState({value:''});
    }

    onKeyPress(event) {
        const keyCode =  event.which || event.keyCode;
        console.log("event", keyCode)
        if(keyCode === 13) {
            this.props.onUnknownSkillSelected(this.state.value);
            this.setState({value:''});
        }
    }

    render() {
        const self = this;
        return <Autocomplete
          value={this.state.value}
          inputProps={{ id: 'states-autocomplete', style: this.props.inputStyle || {} }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={getSkills(this.state.value)}
          getItemValue={(item) => item.name}
          shouldItemRender={matchStateToTerm}
          sortItems={sortSkills}
          onChange={(event, value) => this.setState({ value })}
          onSelect={(value, skill) => this.onSkillSelected(value, skill)}
          renderMenu={children => (
            <div className="menu">
              {children}
            </div>
          )}
          renderInput={(props) => (
            <input {...props} type='text' onKeyPress={(e) => self.onKeyPress(e)} />
          )}
          renderItem={(item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={item.abbr}
            >{item.name}</div>
          )}
        />
    }
}


export default SkillSelector;