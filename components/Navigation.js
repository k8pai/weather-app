import Link from 'next/link';

const Navigation = () => {
	return (
		<nav className="bg-gray-800 text-gray-400 py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				<Link
					href="/"
					className="text-xl font-bold tracking-wide hover:text-white"
				>
					Weather
				</Link>
				<div>
					<Link href="/" className="mr-4 hover:text-white">
						Home
					</Link>
					<Link href="/favorites" className="mr-4 hover:text-white">
						Favorites
					</Link>
					<Link href="/about" className="hover:text-white">
						About
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
