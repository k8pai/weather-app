import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import FavoriteCard from '../components/FavoriteCard';
import { MdOutlineAdd } from 'react-icons/md';
import { randomId } from '../lib/helper';
import { BsSearch } from 'react-icons/bs';
import SuggestionCard from '../components/SuggestionCard';

const Favorites = () => {
	const [state, setState] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [cities, setCities] = useState([]);

	useEffect(() => {
		setCities(
			JSON.parse(localStorage.getItem('weather-app'))?.favorite || [],
		);
	}, []);

	const addToFavorite = (suggestion) => {
		console.log('selected suggestion : ', suggestion);
		var response = JSON.parse(localStorage.getItem('weather-app')) || {
			favorite: [],
		};
		const res = {
			name: suggestion.address.trim(),
			id: randomId(),
			longitude: suggestion.longitude,
			latitude: suggestion.latitude,
		};
		response.favorite.unshift(res);
		localStorage.setItem('weather-app', JSON.stringify(response));
		setState('');
		setSuggestions([]);
		setCities(JSON.parse(localStorage.getItem('weather-app')).favorite);
	};

	const deleteFav = (uniqId) => {
		var response = JSON.parse(localStorage.getItem('weather-app')) || {
			favorite: [],
		};
		const res = response.favorite.filter((el) => el.id !== uniqId);
		localStorage.setItem('weather-app', JSON.stringify({ favorite: res }));
		setCities(res);
	};

	const fetchLocation = (event) => {
		event.preventDefault();
		const placeOptions = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key':
					'74dcbb2682msha0be34e87a8094cp16a5dejsn094540852091',
				'X-RapidAPI-Host':
					'address-from-to-latitude-longitude.p.rapidapi.com',
			},
		};

		fetch(
			`https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${state}`,
			placeOptions,
		)
			.then((response) => response.json())
			.then((response) => {
				const location = response.Results.slice(0, 8);
				console.log(location);
				setSuggestions(location);
				// setFav((prev) => ({ ...prev, latitude, longitude }));
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="max-w-7xl w-full mx-auto py-10 px-4">
			<div className="flex flex-col items-start lg:flex-row box-border">
				<div className="w-full box-border mb-8 mx-0 lg:mx-4 lg:mb-0 lg:w-1/3">
					<h1 className="text-3xl font-bold mb-4">
						Add To Favourites
					</h1>

					<div className="w-full mb-px rounded-lg flex items-center">
						<form className="relative w-full">
							<input
								type="text"
								name="address"
								className="py-2 px-3 pr-11 border-2 rounded-lg border-black w-full"
								value={state}
								onChange={(e) => setState(e.target.value)}
								placeholder="Bengaluru, Karnataka, India"
							/>
							<button
								onClick={fetchLocation}
								className="absolute right-0 top-0 bottom-0 m-3 mr-4 rounded-lg"
							>
								<IconContext.Provider
									value={{
										size: '1.4em',
										className: 'global-class-name',
									}}
								>
									<BsSearch />
								</IconContext.Provider>
							</button>
						</form>
					</div>
					<div className="relative">
						{suggestions &&
							suggestions.map((suggestion, index) => (
								<SuggestionCard
									key={index}
									cityName={suggestion.address}
									addToFavorite={() =>
										addToFavorite(suggestion)
									}
								/>
							))}
					</div>
				</div>
				<div className="w-full box-border mx-0 lg:mx-4 lg:w-2/3">
					<h1 className="text-3xl font-bold mb-4">
						My Favorite Cities
					</h1>
					<div className="flex flex-wrap -mx-4">
						{cities &&
							cities.map((city, index) => (
								<FavoriteCard
									key={city.id}
									cityName={city.name}
									deleteFav={() => deleteFav(city.id)}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Favorites;
