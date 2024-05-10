import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthProvider"
import { FaSignOutAlt } from "react-icons/fa"

const Logout = () => {
	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogout = () => {
		auth.handleLogout()
		navigate("/", { state: { message: " You have been logged out!" } })
	}

	return (
		<>
			<li>
				<Link className="dropdown-item" to={"/profile"}>
					Profil
				</Link>
			</li>
			<li>
				<hr className="dropdown-divider" />
			</li>
			<button className="dropdown-item" onClick={handleLogout}>
				Çıkış yap <FaSignOutAlt/>
			</button>
		</>
	)
}

export default Logout