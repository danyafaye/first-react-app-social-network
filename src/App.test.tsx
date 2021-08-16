import { render} from '@testing-library/react';
import SocialApp from "./App";
import {unmountComponentAtNode} from "react-dom";

test('renders learn react link', () => {
  const div = document.createElement('div');
  render(<SocialApp />);
  unmountComponentAtNode(div);
});
