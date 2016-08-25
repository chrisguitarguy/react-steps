import UncontrolledHello from '../../src/components/UncontrolledHello';

describe('components/UncontrolledHello', function () {
    it('should render Hello, World by default', function () {
        const tree = TestUtils.renderIntoDocument(<UncontrolledHello />);

        const h1 = TestUtils.findRenderedDOMComponentWithTag(tree, 'h1');
        expect(h1.innerHTML).toContain('World');
    });

    it('should change the greeting when the form is submitted', function () {
        const tree = TestUtils.renderIntoDocument(<UncontrolledHello />);

        // remember the input is uncontrolled so we can't simiulate a change
        // here. We have manipuate it directly.
        const input = TestUtils.findRenderedDOMComponentWithTag(tree, 'input');
        input.value = 'changed';

        const form = TestUtils.findRenderedDOMComponentWithTag(tree, 'form');
        Simulate.submit(form);

        const h1 = TestUtils.findRenderedDOMComponentWithTag(tree, 'h1');
        expect(h1.innerHTML).toContain('changed');
    });
});
