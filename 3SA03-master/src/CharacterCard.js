import React from 'react';
import './App.css';
class CharacterCard extends React.Component {

    state = {
        active: false
    }
    activate = () => {
        this.setState({
            active: true
        });
        if (this.props.attempt > 2) {
            this.setState({
                active: true
            });
        }
        else if (this.state.active === false)
            this.props.activationHandler(this.props.value);
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.attempt !== this.props.attempt) {
            this.setState({ active: false })
            console.log('...');
        }
    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                    <h1>{this.props.value}</h1>
            </div>
        )
    }
}

export default CharacterCard;