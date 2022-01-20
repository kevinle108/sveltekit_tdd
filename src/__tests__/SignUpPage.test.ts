/**
 * @jest-environment jsdom
 */

import SignUpPage from '$lib/SignUpPage.svelte';
import { render, screen, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom'

describe('Sign Up Page', () => {
  it('has Sign Up header', () => {
    render(SignUpPage);
    const header = screen.getByRole('heading', { name: 'Sign Up' });
    expect(header).toBeInTheDocument();
  });
});

