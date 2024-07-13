import { render, screen } from '@testing-library/react';
import Carousel from '../components/Carousel';

describe('Carousel', () => {
    test('does not render carousel with no image', () => {
        const { container } = render(<Carousel></Carousel>);

        expect(screen.queryByTestId('carousel-container')).toBeNull();
        expect(container).toMatchInlineSnapshot('<div />');
    });

    test('does not render arrows when carousel has 1 image', () => {
        render(
            <Carousel>
                <img src="../assets/logement1.jpg" alt="image1"></img>
            </Carousel>
        );

        const leftArrow = screen.queryByTestId('left-arrow');
        const rightArrow = screen.queryByTestId('right-arrow');

        expect(leftArrow).toBeNull();
        expect(rightArrow).toBeNull();
    });

    test('render arrows when carousel has 1+ images', () => {
        render(
            <Carousel>
                <img src="../assets/logement1.jpg" alt="image1"></img>
                <img src="../assets/logement1.jpg" alt="image1"></img>
            </Carousel>
        );

        const leftArrow = screen.queryByTestId('left-arrow');
        const rightArrow = screen.queryByTestId('right-arrow');

        expect(leftArrow).not.toBeNull();
        expect(rightArrow).not.toBeNull();
    });
});
