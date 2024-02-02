import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import axios from "axios";
import logo from "../../Assets/EasyformLogo.png";
import LoginImage from "../../Assets/LoginLogo.jpeg";

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		if (name === "" || email === "" || password === "") {
			alert("Fill all the  Fields");
			return;
		}

		try {
			const res = await axios.post("http://localhost:8080/sign-up", {
				name: name,
				email: email,
				password: password,
			});
			console.log(res);
		} catch (error) {
			console.log(error);
		}

		// Add your sign up logic here
	};

	return (
		<Row className="justify-content-between vh-100">
			<Col className="mx-5 align-self-center">
				<h1 className="text-center mt-5">Join Easyform</h1>
				<p>Sign up for free!</p>

				<Form>
					<Form.Group controlId="name">
						<Form.Label className="float-start">Name</Form.Label>
						<Form.Control type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
					</Form.Group>

					<Form.Group controlId="email">
						<Form.Label className="float-start mt-3">Email address</Form.Label>
						<Form.Control type="email" placeholder="demo@abc.com" value={email} onChange={(e) => setEmail(e.target.value)} />
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label className="float-start mt-3">Password</Form.Label>
						<Form.Control type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
					</Form.Group>

					<Form.Group controlId="confirmPassword">
						<Form.Label className="float-start mt-3">Confirm Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="*******"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</Form.Group>

					<div className="d-grid gap-2 mt-4">
						<button className="btn btn-success" type="button" onClick={handleSubmit}>
							Create Account
						</button>
					</div>
				</Form>

				<div className="text-center mt-3">
					<p>
						Already have an account? <a href="#">Log in</a>
					</p>
				</div>
			</Col>

			<Col className="vh-100 align-self-center " style={{ backgroundColor: "#00d78a" }}>
				<div>
					<Image src={LoginImage} />
				</div>
			</Col>
		</Row>
	);
};

export default SignUp;
