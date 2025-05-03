import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { sum } from './App.tsx'

// To Test
import App from './App.tsx'

// Tests
describe('Renders main page correctly', async () => {
  /**
     * Resets all renders after each test
     */
  afterEach(() => {
    cleanup();
  });

  it('Should render the page correctly', async () => {
    // Setup
    render(<App />);
    const h1 = await screen.queryByText('Vite + React');

    // Expectations
    expect(h1).toBeInTheDocument();
  });

  /**
     * Passes - shows the button count correctly present
     */
  it('Should show the button count set to 0', async () => {
    // Setup
    await render(<App />);
    const button = await screen.queryByText('count is 0');

    // Expectations
    expect(button).toBeInTheDocument();
  });

  /**
   * Passes - clicks the button 3 times and shows the correct count
   */
  it('Should show the button count set to 3', async () => {
    // Setup
    await render(<App />);
    const button = await screen.queryByText('count is 0');

    // Pre Expectations
    expect(button).toBeInTheDocument();

    // Actions
    fireEvent.click(button as HTMLElement);
    fireEvent.click(button as HTMLElement);
    fireEvent.click(button as HTMLElement);

    // Post Expectations
    expect(button?.innerHTML).toBe('count is 3');
  });

  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
});
