import React, {Component} from 'react';

function hoc(WrappedComponent) {
    console.log('activate')
    class Hoc extends Component {

        componentDidMount () {
            console.log('activate inner class', this.props)
        }
        render () {
            const {forwardedRef, ...rest} = this.props;
            return (
                <WrappedComponent forwardRef={forwardedRef} {...rest}/>
            );
        }
    }

    function forwardRef(props, ref) {
        return <Hoc {...props} forwardedRef={ref} />
    }
    const name = Component.displayName || Component.name;
    forwardRef.displayName = `logProps(${name})`;
    return React.forwardRef(forwardRef);
}

export default hoc;