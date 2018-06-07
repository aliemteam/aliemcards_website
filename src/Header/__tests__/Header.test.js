import React from 'react';
import Header from '../Header';
import ShallowRenderer from 'react-test-renderer/shallow';



it('renders correctly', () => {
  const renderer = new ShallowRenderer;
  const tree = renderer.render(<Header />);
  expect(tree).toMatchSnapshot();
});
