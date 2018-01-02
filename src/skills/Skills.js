class Skills {

	skills = [{abbr:"java", name: "Java"}, {abbr:"clojure", name: "Clojure"}];

	declareNewUnknownSkill(skillName) {
		if(this.skills.filter(declared => declared.name.toLowerCase() === skillName.toLowerCase()).length > 0) {
			console.log("Already there");
		}
		else {
			this.skills.push({abbr:skillName.toLowerCase, name:skillName});
		}
	}

	declareNewSkill(skill) {
		console.log("New skill: ", skill);
		if(this.skills.filter(declared => declared.abbr === skill.abbr).length > 0) {
			console.log("Already there");
		}
		else {
			this.skills.push(skill);
		}
	}

	all() {
		console.log("All skills: ", this.skills);
		return this.skills;
	}
}

export default Skills;