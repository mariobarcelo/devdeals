import React, { useEffect } from 'react';
import useSWR from 'swr';
import Deal from '../Deal';
import { styled } from 'styled-components';
import { DATABASE_URL } from '../../constants';

async function fetchProducts(query_url) {
	const response = await fetch(query_url);

	// If the status code is not in the range 200-299,
	// we still try to parse and throw it.
	if (!response.ok) {
		const error = new Error(
			'An error occurred while fetching the data.'
		);
		// Attach extra info to the error object.
		error.info = await response.json();
		error.status = response.status;
		throw error;
	}

	const data = await response.json();

	console.log(data);
	return data;
}

function DealsDirectory() {
	const { data, error, isLoading } = useSWR(
		DATABASE_URL,
		fetchProducts
	);

	console.log(data);
	console.log(error);

	return (
		<>
			{/* <form>
				{categoryNames.map((option) => (
					<div key={option}>
						<input
							type='checkbox'
							id={option}
							value={option}
							checked={categories[option] === true}
							onChange={(event) => {
								setCategories({
									...categories,
									[option]: event.target.checked,
								});
							}}
						/>
						<label htmlFor={option}>{option}</label>
					</div>
				))}
			</form> */}
			<Grid>
				{data?.data.map(
					({
						_id,
						logo,
						name,
						creator,
						short_description,
						type,
						price,
						link,
					}) => (
						<Deal
							key={_id}
							logo={logo}
							name={name}
							creator={creator}
							type={type}
							short_description={short_description}
							price={price}
							link={link}
						/>
					)
				)}
			</Grid>
		</>
	);
}

const Grid = styled.main`
	/* border: 1px solid black; */
	border-radius: 8px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	justify-items: center;
	gap: 20px;
`;

export default DealsDirectory;
