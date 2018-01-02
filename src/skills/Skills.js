import React, { Component } from 'react';
import Rating from 'react-rating';
import SkillSelector from './SkillSelector';


class SkillList extends Component {

	render () {
		return (
			<div>
				<Rating />
				<Rating />
			</div>
		);
	}
}

class Skills extends Component {
	render() {
		return (
			<div>
				<SkillSelector/>
				<SkillList/>
			</div>
		);
	}
}

export default Skills;