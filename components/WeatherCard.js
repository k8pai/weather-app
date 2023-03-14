import React from 'react';

const WeatherCard = ({ elem }) => {
	return (
		<div className="max-w-md p-4 m-4 rounded-lg dark:bg-gray-900 dark:text-gray-100">
			<div className="flex justify-between space-x-8">
				<div className="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="w-24 h-24 p-2 dark:text-yellow-400 fill-current"
					>
						<path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
						<rect width="32" height="48" x="240" y="16"></rect>
						<rect width="32" height="48" x="240" y="448"></rect>
						<rect width="48" height="32" x="448" y="240"></rect>
						<rect width="48" height="32" x="16" y="240"></rect>
						<rect
							width="32"
							height="45.255"
							x="400"
							y="393.373"
							transform="rotate(-45 416 416)"
						></rect>
						<rect
							width="32.001"
							height="45.255"
							x="80"
							y="73.373"
							transform="rotate(-45 96 96)"
						></rect>
						<rect
							width="45.255"
							height="32"
							x="73.373"
							y="400"
							transform="rotate(-45.001 96.002 416.003)"
						></rect>
						<rect
							width="45.255"
							height="32.001"
							x="393.373"
							y="80"
							transform="rotate(-45 416 96)"
						></rect>
					</svg>
					<h1 className="text-xl font-semibold">Stockholm</h1>
				</div>
				<span className="font-bold text-8xl">14°</span>
			</div>
			<div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
				<div className="flex flex-col items-center space-y-1">
					<span className="uppercase">wed</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="w-8 h-8 fill-current"
					>
						<path d="M398.2,137.208a144.013,144.013,0,0,0-284.545.979,122.364,122.364,0,0,0-64.357,32.926A109.4,109.4,0,0,0,16,249.619c0,31.119,12.789,60.762,36.01,83.469q2.84,2.776,5.845,5.347l11.327-33.981C56.091,289.3,48,270.017,48,249.619c0-42.362,35.724-78.015,81.329-81.168l14.055-.972.814-14.065a111.995,111.995,0,0,1,223.589-.22l.891,14.888,14.913.155c46.592.488,80.409,34.714,80.409,81.382,0,33.152-16.706,61.38-41.84,75.9L409.032,364.9a110.012,110.012,0,0,0,54.938-32.358C484.625,310.339,496,280.889,496,249.619,496,190.507,454.859,144.4,398.2,137.208Z"></path>
						<polygon points="126.029 496 159.817 496 223.153 309.136 192.847 298.864 126.029 496"></polygon>
						<polygon points="294.029 496 327.817 496 391.153 309.136 360.847 298.864 294.029 496"></polygon>
						<polygon points="290.11 251.033 225.781 448 259.445 448 320.529 260.967 290.11 251.033"></polygon>
						<polygon points="128.791 251.033 64.461 448 98.125 448 159.209 260.967 128.791 251.033"></polygon>
					</svg>
					<span>11°</span>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
