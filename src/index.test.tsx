import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
    it('renders an empty fragment', () => {
        const { container } = render(<App />);
        expect(container).toBeEmptyDOMElement();
    });
});
