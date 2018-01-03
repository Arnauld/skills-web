import React, { Component } from 'react';
import Rating from 'react-rating';
import SkillSelector from './SkillSelector';
import { Grid, Col, Row } from 'react-bootstrap';

const SkillLabelStyle = {
	textAlign: 'left',
	fontSize: '2.0em'
};

const SkillRowStyle = {
	borderBottom: '1px dotted #eee'
};

const SkillRatingStyle = {
	marginTop: '2px'
}

const SkillListStyle = {
	marginTop: '10px'
}

const SkillSelectorStyle = {
	width: '100%',
	fontSize: '3.0em'
}

class SkillList extends Component {

	onSkillUpdate(skill, rank) {
		console.log("this:", this, this.props);
		this.props.updateSkill(skill, rank);
	}

	render () {
		const self = this;
		return (
			<Grid style={SkillListStyle}>
				{this.props.skills.map(function(skill){
            		return (
            			<Row key={skill.abbr} style={SkillRowStyle}>
            				<Col xs={6} md={4} style={SkillLabelStyle}>{skill.name}</Col>
            				<Col xs={6} md={4} style={SkillRatingStyle}><Rating initialRate={skill.rank} 
            				                                                    onChange={(rate) => self.onSkillUpdate(skill, rate)}/></Col>
            			</Row>
        			);
          		})}
			</Grid>
		);
	}
}

class SkillsView extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	    	skills: props.skills.all()
	    }
	}

	declareNewSkill(skill) {
		this.props.skills.declareNewSkill(skill);
		this.setState({skills: this.props.skills.all()});
	}

	declareNewUnknownSkill(skillName) {
		this.props.skills.declareNewUnknownSkill(skillName);
		this.setState({skills: this.props.skills.all()});
	}

	updateSkill(skill, rank) {
		console.log("Update skill", skill, rank)
		this.props.skills.updateSkill(skill, rank);
		this.setState({skills: this.props.skills.all()});	
	}

	render() {
		return (
			<div>
				<SkillSelector 
						onSkillSelected={skill => this.declareNewSkill(skill)} 
						onUnknownSkillSelected={skillName => this.declareNewUnknownSkill(skillName)}
						inputStyle={SkillSelectorStyle}/>
				<SkillList updateSkill={(skill, rank) => this.updateSkill(skill, rank)} skills={this.state.skills}/>
			</div>
		);
	}
}

export default SkillsView;