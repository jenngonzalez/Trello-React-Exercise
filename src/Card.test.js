import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe ('Card component', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title="New Card" content="Lorem ipsum"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});

// it('renders the UI as expected when no messages', () => {
//     const tree = renderer
//     .create(<Messages name="Messages" unread={0}/>)
//     .toJSON();
//     expect(tree).toMatchSnapshot();
//     });
// });