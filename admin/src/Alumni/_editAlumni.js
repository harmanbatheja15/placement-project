import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../Base/Base';

const initialAlumniInfo = {
	id: '',
	name: '',
	package: '',
	batch: '',
	image: '',
	company: '',
};

function EditAlumni(props) {
	const [alumniInfo, setAlumniInfo] = useState(initialAlumniInfo);

	useEffect(() => {
		setAlumniInfo({ ...alumniInfo, id: props.AlumniId });
		fetchAlumniData();
	}, []);

	const fetchAlumniData = async () => {
		try {
			const response = await axios.get(
				`${BASE_URL}/alumni/` + props.alumniId
			);
			if (response) {
				console.log(response);
				setAlumniInfo(response.data);
			}
			return;
		} catch (e) {
			console.log(e);
		}
	};

	const editExistingAlumni = async () => {
		try {
			const response = await axios.put(
				`${BASE_URL}/alumni/` + props.alumniId,
				alumniInfo
			);
			if (response) {
				props.setAlumniEdited();
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
							<span>Alumni Name:</span>
							<input
								type='text'
								className='form-control'
								placeholder='Enter Full Name'
								value={alumniInfo.name}
								onChange={(e) =>
									setAlumniInfo({
										...alumniInfo,
										name: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className='col-sm-12 col-md-6'>
						<p>
							<span>Package:</span>
							<input
								type='string'
								className='form-control'
								placeholder='Enter Package here ...'
								value={alumniInfo.package}
								onChange={(e) =>
									setAlumniInfo({
										...alumniInfo,
										package: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className='col-sm-12 col-md-6'>
						<p>
							<span>Batch:</span>
							<input
								type='number'
								className='form-control'
								placeholder='Enter Price'
								value={alumniInfo.batch}
								onChange={(e) =>
									setAlumniInfo({
										...alumniInfo,
										batch: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className='col-sm-12 col-md-6'>
						<p>
							<span>Company:</span>
							<input
								type='text'
								className='form-control'
								placeholder='Enter Website'
								value={alumniInfo.company}
								onChange={(e) =>
									setAlumniInfo({
										...alumniInfo,
										company: e.target.value,
									})
								}
							/>
						</p>
					</div>
					<div className='col-sm-12 col-md-12'>
						<p>
							<span>Image Link:</span>
							<input
								type='text'
								className='form-control'
								placeholder='Enter Phone Number'
								value={alumniInfo.image}
								onChange={(e) =>
									setAlumniInfo({
										...alumniInfo,
										image: e.target.value,
									})
								}
							/>
						</p>
					</div>
				</div>
			</div>
			<button
				className='btn btn-success'
				onClick={() => editExistingAlumni()}
			>
				Edit Alumni
			</button>
		</div>
	);
}

export default EditAlumni;
