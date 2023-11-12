import React, { Component } from 'react';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        };
    }

    handleLoginClick = () => {
        this.setState((prevState) => ({
            isLoggenIn: !prevState.isLoggedIn,
        }));
    };

    handleLogoutClick = () => {
        this.setState((prevState) => ({
            isLoggedOut: !prevState.isLoggedOut,
        }));
    };

    render() {
        return (
            <div className="logBtn">
                {this.state.isLoggedIn ? (
                    <div>
                        <button onClick={this.handleLoginClick}>로그아웃</button>
                        환영합니다!
                    </div>
                ) : (
                    <div>
                        <button onClick={this.handleLoginClick}>로그인</button>
                        로그인 해주세요!
                    </div>
                )}
            </div>
        );
    }
}

export default LoginControl;
