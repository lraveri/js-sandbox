import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('App', () => {
    it('renders a greeting card after submitting a name', async () => {
        render(<App />);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: /submit/i });

        await userEvent.type(input, 'Ada');
        await userEvent.click(button);

        expect(screen.getByText(/Hello, Ada!/i)).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument();
    });

    it('does not render a card when submitting an empty name', async () => {
        render(<App />);

        const button = screen.getByRole('button', { name: /submit/i });
        await userEvent.click(button);

        expect(screen.queryByText(/Hello,/i)).not.toBeInTheDocument();
    });
});
