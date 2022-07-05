import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class Form extends React.Component {
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
    } = this.props;
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    const { hasTrunfo } = this.props;
    return (
      <div className="card">
        <div className="campoForm">
          <label htmlFor="cardName">
            Nome de uma mulher de sucesso:
            <input
              required
              data-testid="name-input"
              type="text"
              id="cardName"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="cardDescription">
            Descrição:
            <textarea
              required
              data-testid="description-input"
              id="cardDescription"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="cardAttr1">
            Nível de Coragem:
            <input
              type="number"
              maxLength="2"
              data-testid="attr1-input"
              id="cardAttr1"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="cardAttr2">
            Nível de Superação:
            <input
              type="number"
              maxLength="2"
              data-testid="attr2-input"
              id="cardAttr2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="cardAttr3">
            Nível de Persistência:
            <input
              type="number"
              maxLength="2"
              data-testid="attr3-input"
              id="cardAttr3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="cardImage">
            Link para Imagem:
            <input
              data-testid="image-input"
              required
              type="text"
              id="cardImage"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="campoForm">
          <label htmlFor="cardRare">
            Opções de raridade:
            <select
              data-testid="rare-input"
              required
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <div className="campoForm">
          {
            hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <label htmlFor="cardTrunfo">
                  É super trunfo?
                  <input
                    data-testid="trunfo-input"
                    type="checkbox"
                    id="cardTrunfo"
                    name="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )
          }
        </div>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
