import React from 'react';
import { styled, keyframes } from 'styled-components';
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
	grid-template-columns: auto 1fr;
	grid-template-rows: repeat(5, auto);
	row-gap: 10px;
	column-gap: 10px;
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
		align-self: center;
	}
`;

const glow = keyframes`
to {
	transform: translateX(100%);
}
`;

const BuyDeal = styled.a`
	height: 48px;
	grid-column: 1 / -1;
	grid-row: 5;
	align-self: end;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	color: white;
	border-radius: 8px;
	border: none;
	text-decoration: none;
	font-weight: 600;
	padding: 8px 24px;
	position: relative;
	overflow: hidden;

	@media (prefers-reduced-motion: no-preference) {
		&::before {
			content: '';
			color: rgba(255, 228, 230, 0.9);
			background: rgb(2, 0, 36);
			background: linear-gradient(
				90deg,
				rgba(2, 0, 36, 0) 0%,
				rgba(255, 255, 255, 0.3505996148459384) 50%,
				rgba(0, 212, 255, 0) 100%
			);
			position: absolute;
			height: 300px;
			width: 300px;
			transform: translateX(-100%);
			animation: ${glow} 5s ease-in-out infinite;
			pointer-events: none;
		}
	}

	@media ${QUERIES.tabletAndUp} {
		grid-column: 2 / -1;
		grid-row: 4;
		justify-self: end;
	}
`;

export default Deal;
