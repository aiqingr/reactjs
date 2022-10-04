import { Component } from "react";

class ErrBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasErr: false
        }
    }
    componentDidCatch(error) {
        this.setState({hasErr: true})
    }

    render() {
        console.log(this.state);
        if(this.state.hasErr) {
            return <p>Something went wrong</p>
        }
        return this.props.children;
    }
}

export default ErrBoundary;