import React, { Component } from 'react';
import Rating from 'react-rating';
import { Grid, Col, Row, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';

const LoginDivStyle = {
	align: 'center',
	border: '1px solid #ededed',
	borderRadius: '3px',
	boxShadow: '0 1px 3px rgba(0,0,0,.25)',
	backgroundColor: '#fff',
	padding: '10px',
	position: 'relative',
	paddingTop: '1.75em',
	maxWidth:'500px'

};



function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id} >
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

class Login extends Component {


	render () {
		const self = this;
		return (
			//<div style={LoginDivStyle}>
				<form action="/api/login" method="post">
					<Grid style={LoginDivStyle} >
					<Col >
					<FieldGroup
						id="formControlsText"
						type="login"
						label="Identifiant"
						placeholder="Prénom Nom"
						/>
					<FieldGroup
						id="formControlsEmail"
						type="password"
						label="Mot de passe"
						placeholder="Le même que sur l'ensemble des outils Arolla"
						/>

					<Button bsStyle="primary" type="submit">
						Me connecter
					</Button>
					</Col>
						</Grid>
				</form>//</div>
		 )
	}
}

export default Login;