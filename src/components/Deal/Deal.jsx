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
					{'·'}
					<Type className='type'>{type}</Type>
				</CreatorAndTypeContainer>
				<ShortDescription className='short-description'>
					{short_description}
				</ShortDescription>
			</InfoContainer>
			<PriceContainer>
				<Price className='price'>{price}</Price>
				<BuyDeal className='button' href={link}>
					Buy this deal
				</BuyDeal>
			</PriceContainer>
		</Article>
	);
}

const Article = styled.article`
	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-template-rows: repeat(2, auto);
	row-gap: 5px;
	column-gap: 30px;
	padding: 10px;
	max-width: 300px;
	border: 1px solid black;
	border-radius: 8px;
`;
const Logo = styled.img`
	border-radius: 100%;
	width: 100%;
	max-width: 100px;
`;
const InfoContainer = styled.div`
	text-align: left;
`;
const Name = styled.h3`
	justify-self: flex-start;
	align-self: flex-end;
	margin: 0;
`;
const CreatorAndTypeContainer = styled.div`
	display: flex;
	gap: 10px;
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
const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-column: 1 / span 2;
`;
const Price = styled.p`
	font-weight: bold;
`;
const BuyDeal = styled.a`
	background-color: black;
	color: white;
	border-radius: 8px;
	text-decoration: none;
	padding: 8px 16px;
`;

export default Deal;
