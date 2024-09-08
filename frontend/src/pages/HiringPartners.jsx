import React from 'react';

const HiringPartners = () => {

	const hiringPartners = [
		{
			companyName: 'Apple',
			averageStipend: '35LPA',
		},
		{
			companyName: 'Nvidia',
			averageStipend: '35LPA',
		},
		{
			companyName: 'Meta',
			averageStipend: '35LPA',
		},
		{
			companyName: 'Netflix',
			averageStipend: '35LPA',
		},
		{
			companyName: 'Tesla',
			averageStipend: '35LPA',
		},
		{
			companyName: 'Uber',
			averageStipend: '25LPA',
		},
		{
			companyName: 'Google',
			averageStipend: '25LPA',
		},
		{
			companyName: 'Salesforce',
			averageStipend: '25LPA',
		},
		{
			companyName: 'Microsoft',
			averageStipend: '16LPA',
		},
		{
			companyName: 'Oracle',
			averageStipend: '25LPA',
		},
		{
			companyName: 'Samsung',
			averageStipend: '16LPA',
		},
		{
			companyName: 'Adobe',
			averageStipend: '12LPA',
		},
		{
			companyName: 'PayTM',
			averageStipend: '12LPA',
		},
		{
			companyName: 'PayPal',
			averageStipend: '12LPA',
		},
		{
			companyName: 'IBM',
			averageStipend: '12LPA',
		},
		{
			companyName: 'Accenture',
			averageStipend: '12LPA',
		},
		{
			companyName: 'TCS',
			averageStipend: '12LPA',
		},
		{
			companyName: 'Infosys',
			averageStipend: '10LPA',
		},
		{
			companyName: 'Wipro',
			averageStipend: '12LPA',
		},
		{
			companyName: 'HCL',
			averageStipend: '12LPA',
		},
		{
			companyName: 'Tech Mahindra',
			averageStipend: '12LPA',
		},
		{
			companyName: 'Cognizant',
			averageStipend: '12LPA',
		},
	];

	return (
		<>
			<div className='w-full'>
				<div className='mx-auto p-4'>
					<div className='flex flex-col' data-aos='fade-up'>
						<div className='lg:max-w-4xl w-full mx-auto overflow-x-auto'>
							<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
								<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
									<table className='min-w-full divide-y divide-gray-200'>
										<thead>
											<tr>
												<th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider'>
													Company Name
												</th>
												<th className='px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-bold text-gray-500 uppercase tracking-wider'>
													Average Stipend
												</th>
											</tr>
										</thead>
										<tbody className='bg-white divide-y divide-gray-200'>
											{hiringPartners.map(
												(hiringPartner, index) => (
													<tr key={index}>
														<th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
															{hiringPartner.companyName}
														</th>
														<th className='px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
															{hiringPartner.averageStipend}
														</th>
													</tr>
												)
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HiringPartners;
