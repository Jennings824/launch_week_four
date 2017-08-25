import Question from '../../src/components/Question';
import App from '../../src/containers/App';
import React from 'react'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    let response = new window.Response(
      JSON.stringify([
        {
          "id": 1,
          "question": "What is Launch Academy?",
          "answer": "Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team"
        }
      ]), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json'}
      }
    )
    spyOn(global, 'fetch').and.returnValue(Promise.resolve(response))
    wrapper = mount(
      <App

      />
    )
  });

  it('should render a Question component', done => {
    setTimeout(() => {
      expect(wrapper.find(Question)).toBePresent();
      done();
    }, 0)
  });

  // it('should initially mount with the selectedTweetId set to null', () => {
  //   expect(wrapper.state()).toEqual({selectedQuestion: null});
  // });
})
