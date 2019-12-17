import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: [],
    date: new Date(),
  }

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }  
  
  render() {
    const { characters, date } = this.state

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <h6>generated: {date.toLocaleString()}</h6>
      </div>
    )
  }
}

export default App