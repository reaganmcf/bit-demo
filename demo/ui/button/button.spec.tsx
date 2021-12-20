import React from 'react';
import { render } from '@testing-library/react';
import { DefaultButton, PrimaryButton } from './button.composition';

it('default button renders with correct text', () => {
  const { getByText } = render(<DefaultButton />);
  const rendered = getByText('Default Button');
  expect(rendered).toBeTruthy();
});

it('primary button renders with correct text', () => {
  const { getByText } = render(<PrimaryButton />);
  const rendered = getByText('Primary Button');
  expect(rendered).toBeTruthy();
});
