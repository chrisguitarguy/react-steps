import Hello from '../../src/components/Hello';

describe('components/Hello', function () {
    it('should render the name passed into the props', function () {
        const tree = TestUtils.renderIntoDocument(<Hello name="Kentucky JavaScript Users" />);

        // is this method name not rediculous?
        const h1 = TestUtils.findRenderedDOMComponentWithTag(tree, 'h1');

        expect(h1.innerHTML).toContain('Kentucky JavaScript Users');
    });
});
