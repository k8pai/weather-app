import React from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { MdOutlineAdd } from 'react-icons/md';

const SuggestionCard = ({ cityName, addToFavorite }) => {
	return (
		<div className="w-full mb-px">
			<div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
				<div className="p-2 flex items-center justify-between">
					<h2 className="text-lg font-semibold">{cityName}</h2>
					<span className="flex-grow"></span>
					<button
						onClick={addToFavorite}
						className="px-3 py-1 rounded-full transition-colors duration-300"
					>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<MdOutlineAdd />
						</IconContext.Provider>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SuggestionCard;
