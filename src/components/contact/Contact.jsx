import { Element } from "react-scroll";

const Contact = () => {
	return (
		<Element
			name="contact-us"
			className="my-24 max-w-[1440px] mx-auto px-2 text-center"
		>
			<h2 className="text-3xl font-bold text-primaryText mt-8 mb-4">
				Contact Us
			</h2>
			<p className="text-secondaryText mb-4">
				Have any questions or feedback? We love to hear from you! Reach
				out to us using the form below.
			</p>
			<form className="bg-secondaryAccent shadow-md rounded-lg p-8">
				<div className="mb-4">
					<label
						className="block text-primaryText text-sm font-bold mb-2"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Your Name"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-primaryText text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Your Email"
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-primaryText text-sm font-bold mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
						id="message"
						rows="5"
						placeholder="Your Message"
					></textarea>
				</div>
				<div className="flex items-center justify-center">
					<button
						className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none"
						type="button"
					>
						Send Message
					</button>
				</div>
			</form>
		</Element>
	);
};

export default Contact;
