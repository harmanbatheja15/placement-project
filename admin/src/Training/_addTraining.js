import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../Base/Base';

const initialTrainingInfo = {
	name: '',
	price: '',
	image: '',
	type: '',
	description: '',
};

function AddTraining(props) {
	const [trainingInfo, setTrainingInfo] = useState(initialTrainingInfo);

	useEffect(() => {}, []);

	const addNewTraining = async () => {
		try {
			const response = await axios.post(
				`${BASE_URL}/training/`,
				trainingInfo
			);
			if (response) {
				props.setTrainingAdded();
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className='Course-view _add-view'>
			<div className='box'>
				<div className='row'>
					<div className='col-sm-12 col-md-6'>
						<p>
							<span>Training Name:</span>
							<input
								type='text'
								className='form-control'
								placeholder='Enter Training Name ...'
								value={trainingInfo.name}
								onChange={(e) =>
									setTrainingInfo({
										...trainingInfo,
										name: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className='col-sm-12 col-md-6'>
						<p>
							<span>Price:</span>
							<input
								type='Number'
								className='form-control'
								placeholder='Enter Price ...'
								value={trainingInfo.price}
								onChange={(e) =>
									setTrainingInfo({
										...trainingInfo,
										price: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className='col-sm-12 col-md-6'>
						<p>
							<span>Image Link:</span>
							<input
								type='text'
								className='form-control'
								placeholder='Enter Image Address'
								value={trainingInfo.image}
								onChange={(e) =>
									setTrainingInfo({
										...trainingInfo,
										image: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className='col-sm-12 col-md-6'>
						<p>
							<span>Enter Type</span>
							<input
								type='text'
								className='form-control'
								placeholder='Enter Type here ...'
								value={trainingInfo.type}
								onChange={(e) =>
									setTrainingInfo({
										...trainingInfo,
										type: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className='col-sm-30 col-md-50'>
						<p>
							<span>Description</span>
							<textarea
								type='text'
								className='form-control'
								placeholder='Write Description here'
								value={trainingInfo.description}
								onChange={(e) =>
									setTrainingInfo({
										...trainingInfo,
										description: e.target.value,
									})
								}
							/>
						</p>
					</div>
				</div>
			</div>

			<button
				className='btn btn-success'
				onClick={() => addNewTraining()}
			>
				Add New Training
			</button>
		</div>
	);
}

export default AddTraining;
