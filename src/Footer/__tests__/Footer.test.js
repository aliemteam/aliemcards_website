import React from 'react';
import Footer from '../Footer';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
  const renderer = new ShallowRenderer;
  const tree = renderer.render(<Footer />);
  expect(tree).toMatchSnapshot();
});
