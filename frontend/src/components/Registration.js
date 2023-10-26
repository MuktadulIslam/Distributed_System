import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {registrationService} from '../services/accountServices.js'

export default function Registration(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const navigator = useNavigate();

	const registration = async (event) => {
		event.preventDefault();

		if (password != confirmPassword) {
			await alert("Password and Confirm Password does not match!!!");
			setPassword('');
			setConfirmPassword('');

			document.getElementById("password").value = '';
			document.getElementById("confirmpassword").value = '';
			return;
		}
		await registrationService(email, password, name, navigator, props.setUser)
	}

	return (
		<>
			<section className="w-100" style={{ backgroundColor: '#eee', borderRadius: '0.5rem 0.5rem 0 0', padding: '1rem', marginTop: '7vw' }}>

				<div className="row">
					<div className="col-12">
						<div className="card text-black" style={{ borderRadius: '25px' }}>
							<div className="card-body p-md-5">
								<div className="row justify-content-center">
									<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

										<p className="text-center h1 fw-bold mb-5 mt-4">Sign up</p>

										<form id='inputform'>

											<div className="d-flex flex-row align-items-center mb-4">
												<i className="me-3 bi bi-person-fill larger-icon"></i>
												<div className="form-outline flex-fill mb-0">
													<input type="text" className="form-control" placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
												</div>
											</div>

											<div className="d-flex flex-row align-items-center mb-4">
												<i className="me-3 bi bi-envelope-fill larger-icon"></i>
												<div className="form-outline flex-fill mb-0">
													<input type="email" className="form-control" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
												</div>
											</div>

											<div className="d-flex flex-row align-items-center mb-4">
												<i className="me-3 bi bi-lock-fill larger-icon"></i>
												<div className="form-outline flex-fill mb-0">
													<input type="password" className="form-control" id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
												</div>
											</div>

											<div className="d-flex flex-row align-items-center mb-4">
												<i className="me-3 bi bi-key-fill larger-icon"></i>
												<div className="form-outline flex-fill mb-0">
													<input type="password" id="confirmpassword" className="form-control" placeholder='Repeat your password' onChange={(e) => setConfirmPassword(e.target.value)} />
												</div>
											</div>

											<div className="form-check d-flex justify-content-center mb-5">
												<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
												<label className="form-check-label" htmlFor="form2Example3">
													I agree all statements in <a href="#!">Terms of service</a>
												</label>
											</div>

											<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
												<button type="button" className="btn btn-primary btn-lg" onClick={registration}>Register</button>
											</div>

											<p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
													className="link-danger">Login</Link></p>

										</form>

									</div>
									<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

										<img src="./assets/img/regBackground.webp"
											className="img-fluid" alt="Sample image" />

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}