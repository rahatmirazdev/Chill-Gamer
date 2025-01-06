import { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validatePassword } from "../utils/validation";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import signUpImage from "../assets/lottie/signup.svg";

const Register = () => {
	const { register, signInWithGoogle } = useContext(AuthContext);
	const navigate = useNavigate();
	const [passwordError, setPasswordError] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const photoURL = e.target.photoURL.value;
		const email = e.target.email.value;
		const password = e.target.password.value;

		const passwordValidationError = validatePassword(password);
		if (passwordValidationError) {
			setPasswordError(passwordValidationError);
			toast.error(passwordValidationError);
			return;
		}

		register(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				updateProfile(user, {
					displayName: name,
					photoURL: photoURL,
				}).then(() => {
					toast.success("Registration successful!");
					navigate("/");
				});
			})
			.catch((error) => {
				const errorMessage = error.message;
				toast.error(errorMessage);
			});
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-[#778DA9]">
			<div className="flex flex-col md:flex-row items-center justify-center max-w-[1440px] w-full mx-2 gap-2 md:gap-8">
				<div className="md:w-1/2 max-w-[500px] max-h-[690px] bg-[#1B263B] text-white card-body rounded-md">
					<h2 className="text-2xl font-bold mb-4 text-white">
						Create a new account
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text opacity-70  text-primaryButton">
									Name
								</span>
							</label>
							<input
								name="name"
								type="text"
								placeholder="Name"
								className="input text-black"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text opacity-70 text-primaryButton">
									Photo URL
								</span>
							</label>
							<input
								name="photoURL"
								type="text"
								placeholder="Photo URL"
								className="input text-black"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text opacity-70 text-primaryButton">
									Email
								</span>
							</label>
							<input
								name="email"
								type="email"
								placeholder="Email"
								className="input text-black"
								required
							/>
						</div>
						<div className="form-control relative">
							<label className="label">
								<span className="label-text opacity-70 text-primaryButton">
									Password
								</span>
							</label>
							<input
								name="password"
								type={passwordVisible ? "text" : "password"}
								placeholder="Password"
								className="input text-black"
								required
							/>
							<span
								className="absolute right-3 top-[52px] cursor-pointer text-black"
								onClick={() =>
									setPasswordVisible(!passwordVisible)
								}
							>
								{passwordVisible ? <FaEyeSlash /> : <FaEye />}
							</span>
							{passwordError && (
								<p className="text-red-500">{passwordError}</p>
							)}
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary" type="submit">
								Register
							</button>
						</div>
					</form>
					<button
						className="btn btn-secondary mt-4"
						onClick={() =>
							signInWithGoogle().then(() => navigate("/"))
						}
					>
						Register with Google
					</button>
					<div className="mt-4">
						<NavLink to="/login" className="link link-hover">
							Already have an account? Login
						</NavLink>
					</div>
				</div>
				<div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
					<img
						src={signUpImage}
						alt="Sign Up"
						className="w-3/4 md:w-full"
					/>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Register;
