import { useEffect, useState } from 'react';
import { BsClouds } from 'react-icons/bs';
import SimpleContent from '../components/SimpleContent';
import WeatherCard from '../components/WeatherCard';

export default function Home() {
	const [location, setLocation] = useState({
		country: '',
		state: '',
		subregion: '',
		latitude: '',
		longitude: '',
	});
	const [data, setData] = useState([]);

	useEffect(() => {
		console.log(data);
	}, [data]);

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
			`https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${location.subregion}%20${location.state}%20${location.country}`,
			placeOptions,
		)
			.then((response) => response.json())
			.then((response) => {
				const { latitude, longitude } = response.Results[0];
				setLocation((prev) => ({ ...prev, latitude, longitude }));
			})
			.catch((err) => console.error(err));
	};

	function handleSubmit() {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key':
					'74dcbb2682msha0be34e87a8094cp16a5dejsn094540852091',
				'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
			},
		};

		fetch(
			`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${location.latitude}&lon=${location.longitude}`,
			options,
		)
			.then((response) => response.json())
			.then((res) => {
				setData(res.data.slice(0, 7));
				console.log(data);
			})
			.catch((err) => console.error('error message: duck you ' + err));
	}

	const returnClimateComponent = (value) => {
		switch (value) {
			case 'Few clouds':
				console.log('inside few clouds');
				return <BsClouds />;
			default:
				console.log('inside default');
		}
	};

	const toDateTime = (val) => {
		return val.replace('T', ' | ');
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setLocation((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className=" w-full min-h-screen h-full flex justify-center">
			<div className="flex flex-col space-y-8">
				<div>
					<form
						className="flex flex-col space-y-4 my-6 justify-center"
						onSubmit={fetchLocation}
					>
						<input
							className="py-2 px-3 rounded-md border border-black"
							type={'text'}
							name="subregion"
							value={location.subregion}
							onChange={handleChange}
							placeholder="Enter subregion ... "
						/>
						<input
							className="py-2 px-3 rounded-md border border-black"
							type={'text'}
							name="state"
							value={location.state}
							onChange={handleChange}
							placeholder="Enter state ... "
						/>
						<input
							className="py-2 px-3 rounded-md border border-black"
							type={'text'}
							name="country"
							value={location.country}
							onChange={handleChange}
							placeholder="Enter country ... "
						/>
						<button
							type="submit"
							className="rounded-md transition duration-150 mx-auto shadow-xl border-2 border-gray-700/40 text-gray-700/40 hover:border-gray-600/90 hover:text-gray-600/90 w-fit py-2 px-3"
						>
							{' '}
							get Lan & Lon
						</button>
					</form>
				</div>
				<div className="">
					<button
						onClick={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						className="rounded-md transition duration-150 mx-auto shadow-xl border-2 border-gray-700/40 text-gray-700/40 hover:border-gray-600/90 hover:text-gray-600/90 w-fit py-2 px-3"
					>
						{' '}
						get Data
					</button>
				</div>

				<div className="grid grid-cols-5">
					{data &&
						data?.map((ele, ind) => (
							<WeatherCard key={ind} elem={ele} />
						))}
				</div>
			</div>
		</div>
	);
}
