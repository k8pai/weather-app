import { useState } from 'react';
import { BsClouds } from 'react-icons/bs';
import SimpleContent from '../components/SimpleContent';
import WeatherCard from '../components/WeatherCard';

export default function Home() {
	const [address, setAddress] = useState('');
	const [subregion, setSubregion] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const latitude = 12.966180000000065;
	const longitude = 77.58690000000007;
	const [data, setData] = useState([]);

	// const placeOptions = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key':
	// 			'74dcbb2682msha0be34e87a8094cp16a5dejsn094540852091',
	// 		'X-RapidAPI-Host':
	// 			'address-from-to-latitude-longitude.p.rapidapi.com',
	// 	},
	// };

	// fetch(
	// 	`https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${address}%20${subregion}%20${state}%20${country}`,
	// 	placeOptions,
	// )
	// 	.then((response) => response.json())
	// 	.then((response) => console.log(response))
	// 	.catch((err) => console.error(err));

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
			`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${latitude}&lon=${longitude}`,
			options,
		)
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				setData(res.data);
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

	return (
		<div className=" w-full min-h-screen h-full flex justify-center items-center">
			<div className="flex flex-col space-y-8">
				<div className="flex justify-center">
					{/* <input
						className="py-2 px-3 rounded-md border border-black"
						type={'text'}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						placeholder="Enter address ... "
					/>
					<input
						className="py-2 px-3 rounded-md border border-black"
						type={'text'}
						value={subregion}
						onChange={(e) => setSubregion(e.target.value)}
						placeholder="Enter subregion ... "
					/>
					<input
						className="py-2 px-3 rounded-md border border-black"
						type={'text'}
						value={state}
						onChange={(e) => setState(e.target.value)}
						placeholder="Enter state ... "
					/>
					<input
						className="py-2 px-3 rounded-md border border-black"
						type={'text'}
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						placeholder="Enter country ... "
					/> */}
					<button onClick={(e) => handleSubmit()}> call fetch</button>
				</div>
				<SimpleContent />
				<div className="grid grid-cols-5">
					{data &&
						data?.map((ele) => {
							return <WeatherCard elem={ele} />;
						})}
				</div>
			</div>
		</div>
	);
}
