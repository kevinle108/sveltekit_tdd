/**
 * @jest-environment jsdom
 */

import SignUpPage from '$lib/SignUpPage.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom'

describe('Sign Up Page', () => {
  describe('Layout', () => {
    it('has Sign Up header', () => {
      render(SignUpPage);
      const header = screen.getByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });

    it('has username input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Username');
      expect(input).toBeInTheDocument();
    });

    it('has email input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Email');
      expect(input).toBeInTheDocument();
    });
    
    it('has password input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Password');
      expect(input).toBeInTheDocument();
    });

    it('has password type for password input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Password') as HTMLInputElement;
      expect(input.type).toBe('password')
    });
    
    it('has password repeat input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Password Repeat');
      expect(input).toBeInTheDocument();
    });

    it('has password type for password repeat input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Password Repeat') as HTMLInputElement;
      expect(input.type).toBe('password')
    });

    it('has a sign up button', () => {
      render(SignUpPage);
      const button = screen.getByRole('button', {name: 'Sign Up'});
      expect(button).toBeInTheDocument();
    });


  });  
});

