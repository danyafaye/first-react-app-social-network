import { render, screen } from '@testing-library/react';
import App from './App';
import SocialApp from "./App";
import {unmountComponentAtNode} from "react-dom";

test('renders learn react link', () => {
  const div = document.createElement('div');
  render(<SocialApp />, div);
  unmountComponentAtNode(div);
});
