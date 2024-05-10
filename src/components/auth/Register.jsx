
import React, { useState } from "react"
import { Form,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { registerUser } from "~/services/AuthService"

const Register = () => {
	const [registration, setRegistration] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	})

	const [errorMessage, setErrorMessage] = useState("")
	const [successMessage, setSuccessMessage] = useState("")

	const handleInputChange = (e) => {
		setRegistration({ ...registration, [e.target.name]: e.target.value })
	}

	const handleRegistration = async (e) => {
		e.preventDefault()
		try {
			const result = await registerUser(registration)
			setSuccessMessage(result)
			setErrorMessage("")
			setRegistration({ firstName: "", lastName: "", email: "", password: "" })
		} catch (error) {
			setSuccessMessage("")
			setErrorMessage(`Registration error : ${error.message}`)
		}
		setTimeout(() => {
			setErrorMessage("")
			setSuccessMessage("")
		}, 5000)
	}

	return (
		<section className="container col-6 mt-5 mb-5 p-5">
			{errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
			{successMessage && <p className="alert alert-success">{successMessage}</p>}

			<h2>Register</h2>
			<Form onSubmit={handleRegistration}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>İsim</Form.Label>
					<Form.Control
						id="firstName"
						name="firstName"
						type="text"
						className="form-control"
						value={registration.firstName}
						onChange={handleInputChange} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Soyisim</Form.Label>
					<Form.Control
						id="lastName"
						name="lastName"
						type="text"
						className="form-control"
						value={registration.lastName}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Email adresi</Form.Label>
					<Form.Control
						id="email"
						name="email"
						type="email"
						className="form-control"
						value={registration.email}
						onChange={handleInputChange} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Şifre</Form.Label>
					<Form.Control
						type="password"
						className="form-control"
						id="password"
						name="password"
						value={registration.password}
						onChange={handleInputChange} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Button variant="primary" type="submit">Register</Button>{' '}
					<span style={{ marginLeft: "10px" }}>
					Zaten hesabınız var mı? <Link to={"/login"}>Login</Link>
					</span>
				</Form.Group>
			</Form>
		</section>
	)
}

export default Register
