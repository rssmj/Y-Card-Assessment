const Form = ({ cards, saving, activeCard, setCards, newCard, deleteCard }) => {
	/* Update Cards */
	const update = ({ key, value }) => {
		const updateCard = [...cards];
		updateCard[activeCard] = { ...cards[activeCard], [key]: value };
		setCards(updateCard);
	};
	
	/* Update Inputs */
	const updatePublisher = ({ target: { value } }) =>
		update({ key: 'publisher', value });
	const updateMedia = ({ target: { value } }) =>
		update({ key: 'media', value });
	const updateHeadline = ({ target: { value } }) =>
		update({ key: 'headline', value });
	const updateDate = ({ target: { value } }) =>
		update({ key: 'date', value });
	
	const { publisher, headline, media, date } = cards[activeCard];

	return (
		<div className='form-container'>
			{/* Add Card Button */}
			<div className='new-card-button-container'>
				<button className='new-card-button' onClick={newCard}>
					New Card
				</button>
				<span className='save-timeout'>{saving ? 'Saving...' : 'Saved'}</span>
			</div>

			<div className='input-container'>
				{/* Publisher Input */}
				<h2 className='content-title'>Publisher</h2>
				<select id='publisher' onChange={updatePublisher} value={publisher}>
					<option disabled value=''></option>
					<option>CNN</option>
					<option>Houston Chronicle</option>
					<option>Yahoo!</option>
				</select>
				{/* Headline Text Area Input */}
				<h2 className='content-title'>Text</h2>
				<textarea
					placeholder='Enter headline text'
					rows='5'
					value={headline}
					onChange={updateHeadline}
				></textarea>
				{/* Radio Buttons Input */}
				<div className='radio-buttons'>
					<h2 className='content-title'>Media</h2>
					<label htmlFor='none'>
						None
						<input
							type='radio'
							value='none'
							checked={media === 'none'}
							onChange={updateMedia}
						/>
					</label>
					<label htmlFor='image'>
						Image
						<input
							type='radio'
							value='image'
							checked={media === 'image'}
							onChange={updateMedia}
						/>
					</label>
					<label htmlFor='video'>
						Video
						<input
							type='radio'
							value='video'
							checked={media === 'video'}
							onChange={updateMedia}
						/>
					</label>
				</div>
				{/* Published Time Input */}
				<h2 className='content-title'>Published Time</h2>
				<input type='datetime-local' onChange={updateDate} value={date} />
			</div>
			{/* Delete Card Button */}
			<div className='delete-card-button-container'>
				<button
					className='delete-card-button'
					onClick={() => deleteCard(activeCard)}
				>
					Delete Card
				</button>
			</div>
		</div>
	);
};

export default Form;
