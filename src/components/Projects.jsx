import Cards from './Cards.jsx';

const cards = [
  {
    id: 1,
    name: 'Wild Trip',
    url: 'https:www.wildtrip.fr',
    details: '',
  },
];

const Projects = () => {
  return (
    <div>
      {cards.map((card) => {
        return (
          <Cards
            name={card.name}
            details={card.details}
            key={card.id}
            url={card.url}
            id={card.id}
          />
        );
      })}
    </div>
  );
};

export default Projects;
