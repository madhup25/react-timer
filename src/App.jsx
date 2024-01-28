// import { useState } from 'react'
import './App.css'
import Countdown from 'react-countdown';
import Player from './Player';


function App() {

	const renderer = ({ hours, minutes, seconds, completed }) => {
		if(completed){
			return (
				<>
					<span className="text-3xl font-semibold">Timer Completed</span>
					<Player url="http://streaming.tdiradio.com:8000/house.mp3" />
				</>
			)
		}
		return(
			<div className="flex">
				{/* <div className="flex-auto">
					<span className="text-3xl font-semibold">{days}</span>
					<div className="text-3xl">Days</div>
				</div> */}
				<div className="flex-auto">
					<span className="text-8xl font-semibold">{hours}</span>
					<div className="text-2xl font-bold">Hours</div>
				</div>
				<div className="flex-auto">
					<span className="text-8xl font-semibold">{minutes}</span>
					<div className="text-2xl font-bold">Minutes</div>
				</div>
				<div className="flex-auto">
					<span className="text-8xl font-semibold">{seconds}</span>
					<div className="text-2xl font-bold">Seconds</div>
				</div>
			</div>
		)
	}

	return (
		<div className='container mx-auto px-4'>
			<div className='flex flex-row justify-center items-center'>
				<div className="basis-1/4 mt-5 mx-2 p-2">
					<h2 className="text-5xl font-bold mb-4">Timer App</h2>
				</div>

			</div>

			<div className="flex flex-row justify-center items-center">
				<div className="basis-1/2 mx-2 rounded-lg p-2 text-center border border-black mt-80">
					<Countdown date={Date.now() + 10000} renderer={renderer} />
				</div>
			</div>
		</div>
	)
}

export default App
