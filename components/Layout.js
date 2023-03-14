import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
	return (
		<div>
			<Head></Head>
			<main className="w-full min-h-screen flex flex-col">
				<Navigation />
				<div className="flex-grow w-full">{children}</div>
				<Footer />
			</main>
		</div>
	);
};

export default Layout;
