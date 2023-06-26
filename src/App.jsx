import './App.css';
import DealsDirectory from './components/DealsDirectory';

function App() {
	return (
		<>
			<h1 className='text-5xl mt-5'>DevDeals</h1>
			<h2 className='text-4xl'>
				The best lifetime deals for developers
			</h2>
			<DealsDirectory />
		</>
	);
}

export default App;
