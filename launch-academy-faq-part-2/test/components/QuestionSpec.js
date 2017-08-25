import Question from '../../src/components/Question'

describe('Question', () => {
  let onClickSpy,
      question,
      answer,
      selected,
      wrapper;

  beforeEach(() => {
    onClickSpy = jasmine.createSpy('onClick Spy')
    wrapper = mount(
      <Question
        question='What is your camp like?'
        answer='ok'
        selected={true}
        handleClick={onClickSpy}
      />
    )
  })

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.find('h5').text()).toEqual('What is your camp like?')
  })

  it('should have an area for answer in a p tag with the answer in it if it is selected', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toEqual('ok')
  })

  it('should receive props', () => {
    expect(wrapper.find(Question)).toBePresent()
  })

  it('should invoke the onClick function from props when h3 clicked', () => {
    wrapper.find('h5').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  })
})
