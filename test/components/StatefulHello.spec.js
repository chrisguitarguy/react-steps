import StatefulHello from '../../src/components/StatefulHello';

describe('components/StatefulHello', function () {
    it('should render Hello, World by default', function () {
        const tree = TestUtils.renderIntoDocument(<StatefulHello />);

        const h1 = TestUtils.findRenderedDOMComponentWithTag(tree, 'h1');
        expect(h1.innerHTML).toContain('World');
    });

    it('should change the greeting when the form field changes', function () {
        const tree = TestUtils.renderIntoDocument(<StatefulHello />);

        const input = TestUtils.findRenderedDOMComponentWithTag(tree, 'input');
        Simulate.change(input, {
            target: {value: 'New Name'}
        });

        const h1 = TestUtils.findRenderedDOMComponentWithTag(tree, 'h1');
        expect(h1.innerHTML).toContain('New Name');
    });
});
