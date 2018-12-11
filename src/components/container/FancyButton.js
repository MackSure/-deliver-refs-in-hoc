import React, {Component} from 'react';
import hoc from '../hoc/hoc';

class FancyButton extends Component {

    componentDidMount () {
        console.log(this.props)
    }

    render () {
        const {forwardRef} = this.props;
        return (
            <button ref={forwardRef}>Fancy Button</button>
        );
    }
}


export default hoc(FancyButton);