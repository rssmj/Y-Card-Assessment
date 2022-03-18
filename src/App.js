import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Cards from './components/Cards';

const initialCard = {
	publisher: '',
	headline: '',
	media: 'none',
	date: '',
};

const App = () => {
	/* Card State */
	const [cards, setCards] = useState([{ ...initialCard }]);
	const [activeCard, setActiveCard] = useState(0);
	const [saving, setSaving] = useState(false);

	/* Save Timeout */
	const saveTimeout = () => {
		setSaving(true);
		setTimeout(() => setSaving(false), 1000);
	};

	/* Add Card */
	const newCard = () => {
		const updateCard = [...cards];
		updateCard.push({ ...initialCard });
		setCards(updateCard);
		setActiveCard(updateCard.length - 1);
		saveTimeout();
	};

	/* Delete Card */
	const deleteCard = (index) => {
		const updateCard = [...cards];
		updateCard.splice(index, 1);
		setCards(updateCard.length > 0 ? updateCard : [{ ...initialCard }]);
		setActiveCard(Math.max(index - 1, 0));
	};

	const saveSetCard = (...args) => {
		setCards(...args);
		saveTimeout();
	};

	return (
		<div className='App'>
			<div className='main-container'>
				<Form
					cards={cards}
					activeCard={activeCard}
					setCards={saveSetCard}
					newCard={newCard}
					deleteCard={deleteCard}
					saving={saving}
				/>
				<Cards
					cards={cards}
					activeCard={activeCard}
					setActiveCard={setActiveCard}
				/>
			</div>
		</div>
	);
};

export default App;
