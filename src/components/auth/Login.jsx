import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '~/services/AuthService';
import { useAuth } from './AuthProvider';

const Login = () => {
	const [errorMessage, setErrorMessage] = useState("")
	const [login, setLogin] = useState({
		email: "",
		password: ""
	})

	const navigate = useNavigate()
	const auth = useAuth()
	const location = useLocation()
	const redirectUrl = location.state?.path || "/"

	const handleInputChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const success = await loginUser(login)
		if (success) {
			const token = success.token
			auth.handleLogin(token)
			navigate(redirectUrl, { replace: true })
		} else {
			setErrorMessage("Invalid username or password. Please try again.")
		}
		setTimeout(() => {
			setErrorMessage("")
		}, 4000)
	}

	return (
		<section className="container col-6 mt-5 mb-5 p-5">
			{errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
			<h2>Giriş sayfası</h2>
			<br />
			<p>admin: smhacar@gmail.com : admin12345</p>
			<p>user: smh@gmail.com : admin123</p>
			<p>user: semih_acar01@hotmail.com : user123</p>


			<form onSubmit={handleSubmit} className='form-signin'>
				<div className="row mb-3">
					<label htmlFor="email" className="col-sm-2 col-form-label">
						Email adresi
					</label>
					<div>
						<input
							id="email"
							name="email"
							type="email"
							className="form-control"
							value={login.email}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="password" className="col-sm-2 col-form-label">
						Şifre
					</label>
					<div>
						<input
							id="password"
							name="password"
							type="password"
							className="form-control"
							value={login.password}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="mb-3">
					<button type="submit" className="btn btn-primary btn-block" style={{ marginRight: "10px" }}>
						Giriş yap
					</button>
					<span style={{ marginLeft: "10px" }}>
						Henüz bir hesabınız yok mu?<Link to={"/register"}> Register</Link>
					</span>
				</div>
			</form>
			<br />
		</section>
	)
}
export default Login;
