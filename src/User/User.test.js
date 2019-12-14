import React from 'react';
import { render } from '@testing-library/react';
import { User } from './User';

test('renders user name', () => {
   const { getByText } = render(<User />);
   const linkElement = getByText(/Neil Armstrong/i);

   expect(linkElement).toBeInTheDocument();
});
