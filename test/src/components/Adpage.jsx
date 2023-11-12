import React, { Component } from 'react';
import Ad from './Ad';

class Adpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAd: true,
        };
    }

    handleToggleClick = () => {
        this.setState((prevState) => ({
            showAd: !prevState.showAd,
        }));
    };

    render() {
        return (
            <div className="adpage">
                <Ad showAd={this.state.showAd} />
                <button onClick={this.handleToggleClick}>{this.state.showAd ? '광고안보기' : '광고보기'}</button>
            </div>
        );
    }
}

export default Adpage;
