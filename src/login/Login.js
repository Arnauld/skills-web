import React, { Component } from 'react';
import Rating from 'react-rating';
import { Grid, Col, Row } from 'react-bootstrap';

class Login extends Component {

	render () {
		const self = this;
		return (
			<form action="/api/login" method="post">
				<div class="form-group">
					<label for="username">UserName: </label>
					<input type="text" class="form-control" id="username" name="username"/>
				</div>
				<div class="form-group">
					<label for="pwd">Password:</label>
					<input type="password" class="form-control" id="pwd" name="password"/>
				</div>
				<button type="submit" class="btn btn-success">Submit</button>
				<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
			</form>)
	}
}

export default Login;