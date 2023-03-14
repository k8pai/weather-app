import React from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { BiChevronRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

const FavoriteCard = ({ cityName, deleteFav }) => {
	return (
		<div className="w-full mx-4 mb-4">
			<div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
				<div className="p-4 flex items-center justify-between">
					<h2 className="text-lg font-bold">{cityName}</h2>
					<span className="flex-grow"></span>
					<Link
						href={`/`}
						className="px-3 py-1 rounded-full transition-colors duration-300"
					>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<BiChevronRight />
						</IconContext.Provider>
					</Link>
					<button
						onClick={deleteFav}
						className="px-3 py-1 rounded-full transition-colors duration-300"
					>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<IoMdClose />
						</IconContext.Provider>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FavoriteCard;
