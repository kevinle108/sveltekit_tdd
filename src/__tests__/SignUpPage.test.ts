/**
 * @jest-environment jsdom
 */

import SignUpPage from '$lib/SignUpPage.svelte';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';
import 'whatwg-fetch';

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

    it('has a Sign Up button', () => {
      render(SignUpPage);
      const button = screen.getByRole('button', {name: 'Sign Up'});
      expect(button).toBeInTheDocument();
    });
    
    it('has a Sign Up button disabled', () => {
      render(SignUpPage);
      const button = screen.getByRole('button', {name: 'Sign Up'});
      expect(button).toBeDisabled();
    });

  });
  
  describe('Interactions', () => {
    it('enables button once both password inputs match', async () => {
      render(SignUpPage);
      const pw1 = screen.getByLabelText('Password') as HTMLElement;
      const pw2 = screen.getByLabelText('Password Repeat') as HTMLElement;
      await userEvent.type(pw1, 'P4ssword');
      await userEvent.type(pw2, 'P4ssword');

      const button = screen.getByRole('button', {name: 'Sign Up'});
      expect(button).toBeEnabled();
    });

    it('sends username, email, and password to backend after clicking the button', async () => {
      render(SignUpPage);
      const username = screen.getByLabelText('Username') as HTMLElement;
      const email = screen.getByLabelText('Email') as HTMLElement;
      const pw1 = screen.getByLabelText('Password') as HTMLElement;
      const pw2 = screen.getByLabelText('Password Repeat') as HTMLElement;

      await userEvent.type(username, 'user1');
      await userEvent.type(email, 'user1@mail.com');
      await userEvent.type(pw1, 'P4ssword');
      await userEvent.type(pw2, 'P4ssword');
      const button = screen.getByRole('button', {name: 'Sign Up'});

      const mockFn = jest.fn();
      // axios.post = mockFn;
      window.fetch = mockFn;

      await userEvent.click(button);
      const firstCall = mockFn.mock.calls[0]; // axios( url, {body} )
      const body = JSON.parse(firstCall[1].body);
      expect(body).toEqual({
        username: "user1",
        email: "user1@mail.com",
        password: "P4ssword"
      });
    });
  });
});

