import React from 'react';
import AllCards from './components/AllCards';
import Card from './components/Card';
import Form from './components/Form';
import './CSS/App.css';

class App extends React.Component {
  // constructor() {
  //   super();
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    newCard: [],
    hasTrunfo: false,
  };
  // }

        validate = () => {
          const {
            cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
          } = this.state;
          const soma = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
          const noventa = 90;
          const somaMax = 210;
          if (
            cardName && cardDescription && cardImage
            && soma <= somaMax
            && Number(cardAttr1) <= noventa
            && Number(cardAttr2) <= noventa
            && Number(cardAttr3) <= noventa
            && Number(cardAttr1) >= 0
            && Number(cardAttr2) >= 0
            && Number(cardAttr3) >= 0) {
            this.setState({
              isSaveButtonDisabled: false });
          } else {
            this.setState({
              isSaveButtonDisabled: true });
          }
        }

        onInputChange = (event) => {
          const { target } = event;
          this.setState({
            [target.name]: target.type === 'checkbox'
              ? target.checked
              : target.value,
          }, () => this.validate());
        }

        hasTrunfo = () => {
          const { newCard } = this.state;
          return newCard.some((carta) => carta.cardTrunfo);
        }

        onSaveButtonClick = () => {
          const {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
            isSaveButtonDisabled,
            // newCard,
          } = this.state;
          const objVazio = {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
            isSaveButtonDisabled,
          };
          this.setState((estadoAnterior) => ({
            newCard: [...estadoAnterior.newCard, objVazio],
            cardName: '',
            cardDescription: '',
            cardAttr1: '0',
            cardAttr2: '0',
            cardAttr3: '0',
            cardImage: '',
            cardRare: 'normal',
            cardTrunfo: false,
            isSaveButtonDisabled: true,
          }), () => this.setState({ hasTrunfo: this.hasTrunfo() }));
        }

        deleteCard = (cardName) => {
          // console.log(cardName);
          this.setState((prev) => ({
            newCard: prev.newCard.filter((carta) => carta.cardName !== cardName),
          }), () => this.setState({ hasTrunfo: this.hasTrunfo() }));
        }

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
            isSaveButtonDisabled,
            newCard,
            hasTrunfo,
          } = this.state;
          return (
            <div>
              <h1 className="titulo">Tryunfo Grandes Mulheres</h1>
              <div className="preencherForm">
                <form>
                  <Form
                    className="card"
                    cardName={ cardName }
                    cardDescription={ cardDescription }
                    cardAttr1={ cardAttr1 }
                    cardAttr2={ cardAttr2 }
                    cardAttr3={ cardAttr3 }
                    cardImage={ cardImage }
                    cardRare={ cardRare }
                    cardTrunfo={ cardTrunfo }
                    onInputChange={ this.onInputChange }
                    onSaveButtonClick={ this.onSaveButtonClick }
                    isSaveButtonDisabled={ isSaveButtonDisabled }
                    hasTrunfo={ hasTrunfo }
                  />
                </form>
                {/* <h1>Sua nova carta será:</h1> */}
                <div className="card">
                  <Card
                    cardName={ cardName }
                    cardDescription={ cardDescription }
                    cardAttr1={ cardAttr1 }
                    cardAttr2={ cardAttr2 }
                    cardAttr3={ cardAttr3 }
                    cardImage={ cardImage }
                    cardRare={ cardRare }
                    cardTrunfo={ cardTrunfo }
                  />
                </div>
              </div>
              <h1 className="titulo">Cartas criadas:</h1>
              <div className="topic-list">
                {
                  newCard.map((carta) => (<AllCards
                    key={ carta.cardName }
                    { ...carta }
                    deleteCard={ this.deleteCard }
                  />))
                }
              </div>
            </div>
          );
        }
}

export default App;
