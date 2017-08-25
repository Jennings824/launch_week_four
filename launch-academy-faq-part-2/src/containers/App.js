import React from 'react';
import Question from '../components/Question';
import 'whatwg-fetch'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      allData: []
    }
    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/questions')
    .then(response => response.json())
    .then(body => {
      this.setState({allData: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }


  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  render() {
    let questions = this.state.allData.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We are Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>
      </div>
    )
  }
}

export default App;
