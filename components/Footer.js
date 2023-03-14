import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-gray-400 py-6">
			<div className="container mx-auto flex justify-between items-center px-4">
				<div>
					<p>&copy; 2023 Weather-app@k8pai</p>
				</div>
				<div>
					<Link
						href="/privacy"
						className="text-gray-400 hover:text-gray-200 mr-4"
					>
						Privacy Policy
					</Link>
					<Link
						href="/terms"
						className="text-gray-400 hover:text-gray-200"
					>
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
