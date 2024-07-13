import { fireEvent, render, screen } from '@testing-library/react';
import Collapsible from '../components/Collapsible';

describe('Collapsible', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('render collapsible with title and content', () => {
        render(<Collapsible title="my title">my content</Collapsible>);

        const collapsibleTitle = screen.getByTestId('collapsible-title');
        const collapsibleContent = screen.getByTestId('collapsible-content');

        expect(collapsibleTitle.textContent).toBe('my title');
        expect(collapsibleContent.textContent).toBe('my content');
    });

    test('render collapsible main height is 0 when close', () => {
        render(<Collapsible title="my title">my content</Collapsible>);

        const collapsibleMain = screen.getByTestId('collapsible-main');

        expect(collapsibleMain.style.height).toBe('0px');
    });

    test('toggle the open/close css class on the button on click', () => {
        render(<Collapsible title="my title">my content</Collapsible>);

        let button = screen.getByRole('button');
        expect(button.classList).toContain('collapsible-header--close');
        expect(button.classList).not.toContain('collapsible-header--open');

        fireEvent.click(button);

        button = screen.getByRole('button');
        expect(button.classList).not.toContain('collapsible-header--close');
        expect(button.classList).toContain('collapsible-header--open');
    });
});
