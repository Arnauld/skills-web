const DEFAULT_RANK = 3;
class Skills {



	userSkills = [
		{abbr:"java", name: "Java", rank:5}, 
		{abbr:"clojure", name: "Clojure", rank: 3}, 
		{abbr:"erlang", name: "Erlang", rank: 3}, 
		{abbr:"gwt", name: "GWT", rank: 1}
	];

	declareNewUnknownSkill(skillName) {
		if(this.userSkills.filter(declared => declared.name.toLowerCase() === skillName.toLowerCase()).length > 0) {
			console.log("Already there");
		}
		else {
			this.userSkills.push({abbr:skillName.toLowerCase, name:skillName, rank:DEFAULT_RANK});
		}
	}

	declareNewSkill(skill) {
		if(this.userSkills.filter(declared => declared.abbr === skill.abbr).length > 0) {
			console.log("Already there");
		}
		else {
			this.userSkills.push({...skill, rank:DEFAULT_RANK});
		}
	}

	updateSkill(skill, rank) {
		this.userSkills
				.filter(declared => declared.abbr === skill.abbr)
				.forEach(declared => declared.rank = rank);
	}

	all() {
		console.log("All skills: ", this.userSkills);
		return [...this.userSkills].reverse();
	}
}

export default Skills;