import React from 'react';
import styled from 'styled-components';

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
			<InfoContainer>
				<Name className='name'>{name}</Name>
				<CreatorAndTypeContainer>
					<Creator className='creator'>{creator}</Creator>
					<span style={{ marginInline: '10px' }}>|</span>
					<Type className='type'>{type}</Type>
				</CreatorAndTypeContainer>
				<ShortDescription className='short-description'>
					{short_description}
				</ShortDescription>
			</InfoContainer>
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
	grid-template-rows: repeat(2, auto);
	row-gap: 5px;
	column-gap: 30px;
	padding: 24px 32px;
	width: 100%;
	border: 1px solid black;
	border-radius: 8px;
`;
const Logo = styled.img`
	border-radius: 100%;
	width: 100%;
	max-width: 100px;
	grid-column: 1;
	grid-row: 1;
	justify-self: center;
`;
const InfoContainer = styled.div`
	grid-column: 2;
	grid-row: 1;
	align-self: stretch;
	display: flex;
	flex-direction: column;
	gap: 8px;
	text-align: left;
`;
const Name = styled.h3`
	margin: 0;
`;
const CreatorAndTypeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	color: #676767;
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
`;

const Price = styled.p`
	grid-column: 1;
	grid-row: 2;
	place-self: center;
	font-weight: bold;
	font-size: 24px;
`;
const BuyDeal = styled.a`
	grid-column: 2;
	grid-row: 2;
	justify-self: end;
	align-self: center;
	background-color: black;
	color: white;
	border-radius: 8px;
	text-decoration: none;
	padding: 8px 16px;
`;

export default Deal;
