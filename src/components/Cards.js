const Card = ({
	publisher = '',
	headline = '',
	media = 'none',
	date = '',
	isActive = false,
	onClick = () => {},
}) => (
	/* Card Interpolation */
	<div
		className={`card ${media !== '' ? media : 'none'} ${
			isActive ? 'active-card' : ''
		} `}
		onClick={onClick}
	>
		<div className='text-container'>
			<h1 className='publisher'>{publisher}</h1>
			<p className='headline'>{headline}</p>
			<h3 className='date'>{date}</h3>
		</div>
		<div className='media'>
			{/* Video Play Button */}
			<div className='video-button-container'>
				{media !== 'video' ? (
					media
				) : (
					<button className='video-button'>PLAY</button>
				)}
			</div>
		</div>
	</div>
);

const Cards = ({ cards, activeCard, setActiveCard }) => {
	return (
		<div className='card-container'>
			{/* Card Iteration */}
			<div className='card-list'>
				{cards.map((card, i) => (
					<Card
						key={i}
						{...card}
						isActive={activeCard === i}
						onClick={() => setActiveCard(i)}
					/>
				))}
			</div>
		</div>
	);
};

export default Cards;
