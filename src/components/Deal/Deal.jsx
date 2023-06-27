import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

function Deal({
	logo,
	name,
	creator,
	type,
	short_description,
	price,
	link,
}) {
	return (
		<Article>
			<Logo className='logo' src={logo} />
			<Name className='name'>{name}</Name>
			<CreatorAndTypeContainer>
				<Creator className='creator'>{creator}</Creator>
				<span style={{ marginInline: '10px' }}>|</span>
				<Type className='type'>{type}</Type>
			</CreatorAndTypeContainer>
			<ShortDescription className='short-description'>
				{short_description}
			</ShortDescription>
			<Price className='price'>{price}</Price>
			<BuyDeal className='button' href={link}>
				Buy this deal
			</BuyDeal>
		</Article>
	);
}

const Article = styled.article`
	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-template-rows: repeat(5, auto);
	row-gap: 10px;
	column-gap: 30px;
	padding: 24px 32px;
	max-width: 550px;
	width: 100%;
	border: 1px solid black;
	border-radius: 8px;
	@media ${QUERIES.tabletAndUp} {
		grid-template-rows: repeat(4, auto);
	}
`;
const Logo = styled.img`
	border-radius: 100%;
	width: 100%;
	max-width: 75px;
	grid-column: 1;
	grid-row: 1 / 3;
	justify-self: start;
`;
// const InfoContainer = styled.div`
// 	grid-column: 2;
// 	grid-row: 1;
// 	align-self: stretch;
// 	display: flex;
// 	flex-direction: column;
// 	gap: 8px;
// 	text-align: left;
// `;
const Name = styled.h3`
	margin: 0;
	grid-column: 2;
	grid-row: 1;
	align-self: center;
`;
const CreatorAndTypeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	color: #676767;
	grid-column: 2;
	grid-row: 2;
	font-size: 14px;
`;
const Creator = styled.p`
	margin: 0;
`;
const Type = styled.p`
	margin: 0;
`;
const ShortDescription = styled.p`
	text-align: left;
	margin: 0;
	grid-column: 1 / -1;
	grid-row: 3;

	@media ${QUERIES.tabletAndUp} {
		padding-block: 10px;
	}
`;

const Price = styled.p`
	grid-column: 1 / -1;
	grid-row: 4;
	font-weight: bold;
	font-size: 24px;
	@media ${QUERIES.tabletAndUp} {
		grid-column: 1;
		grid-row: 4;
		justify-self: start;
	}
`;
const BuyDeal = styled.a`
	grid-column: 1 / -1;
	grid-row: 5;
	align-self: end;
	background-color: black;
	color: white;
	border-radius: 8px;
	text-decoration: none;
	padding: 8px 16px;

	@media ${QUERIES.tabletAndUp} {
		grid-column: 2 / -1;
		grid-row: 4;
		justify-self: end;
	}
`;

export default Deal;
