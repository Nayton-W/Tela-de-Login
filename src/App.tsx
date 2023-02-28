import { Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap"
import { useState, useEffect, useRef } from 'react'

export default function App() {
	const [name, setName] = useState(null);
	const [nameFieldText, setNameFieldText] = useState("");

	if (name == null) return <div style={{ padding: "15px" }}>
		<h1>Bem vindo, ao sistema Nero!</h1>
		<h5>Digite seu nome caro usuario:</h5>
		<Stack direction="horizontal" gap={2}>
			<Form.Control value={nameFieldText} onChange={e => setNameFieldText(e.target.value)} required placeholder="Name" type="text"></Form.Control>
			<Button variant="outline-primary" onClick={e => setName(nameFieldText)}>Enviar</Button>
		</Stack>
	</div>;

	return <div style={{ padding: "15px" }}>
		<h1>Bem vindo, {name}!</h1>

		<hr />
		<h4>Login</h4>
		<hr />
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
				
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Logar
			</Button>
		</Form>
		<hr />
	</div>
}