import Tweet from '../../src/components/Tweet';

describe('Tweet', () => {

  let text,
      name,
      userPhoto,
      className,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Tweet
        text= "This doesn't look like Kansas"
        name="Todo"
        userPhoto= 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
        className= 'selected'
      />
    )
  });

  it('should render a div tag', () => {
    expect(wrapper.find('div')).toBePresent();
  });

  it('should have a span tag with the correct text', () => {
    expect(wrapper.find('span')).toBePresent();
    expect(wrapper.find('span').text()).toBe("Todo");
  })

  it('should have an img tag with the correct img', () => {
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    })
  })

  it('should have a p tag with teh correct text', () => {
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.find('p').text()).toBe("This doesn't look like Kansas")
  })
})
