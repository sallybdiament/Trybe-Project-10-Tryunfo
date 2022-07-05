import React from 'react';
import PropTypes from 'prop-types';

class AllCards extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteCard,
    } = this.props;
    return (
      <div className="carta">
        <p data-testid="name-card">
          { `Personagem: ${cardName}` }
        </p>
        <p data-testid="description-card">
          Descrição:
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          Nível de coragem:
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Nível de superação:
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Nível de Persistência:
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          Esta carta é:
          { cardRare }
        </p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <button
          type="button"
          data-testid="delete-button"
          onClick={ () => deleteCard(cardName) }
          // (newCard.cardName)
        >
          Excluir
        </button>
      </div>
    );
  }
}

AllCards.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default AllCards;
