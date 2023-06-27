import './App.css';
import { styled } from 'styled-components';
import DealsDirectory from './components/DealsDirectory';

function App() {
	return (
		<>
			<Header>DevDeals</Header>
			<SubHeader>The best lifetime deals for developers</SubHeader>
			<DealsDirectory />
		</>
	);
}

const Header = styled.h1``;
const SubHeader = styled.h2`
	margin-bottom: 2rem;
`;

export default App;
