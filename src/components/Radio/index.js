import React, { Component } from 'react';
import classNames from 'classNames';
import * as PropTypes from 'prop-types';
import './index.css';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onRadio: this.props.checked || false
        };
    }

    // radio 开关
    radioHandle = (e) => {
        const { onChange, checked = 3 } = this.props;
        const { onRadio } = this.state;
        if(checked != 3) {
            this.setState({
                onRadio: checked
            });
            onChange(checked, e);
            return;
        }
        if(!onRadio) {
            this.setState({
                onRadio: true
            });
        }
        if(onChange) {
            onChange(onRadio, e);
        }
    }

    render() {
        const { onRadio } = this.state;
        const { checked = 3, children } = this.props;
        const radioClass = classNames({
            'corki-radio': true,
            'corki-radio-checked': checked == 3 ? onRadio : checked
        });
        return (
            <div className="corki-radio-wrapper">
                <span className={radioClass}>
                    <input className="corki-radio-input" type="radio" onClick={this.radioHandle} />
                    <span className="corki-radio-inner"></span>
                </span>
                <span className="corki-radio-text">
                    {children}
                </span>
            </div>
        );
    }
}

Radio.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

module.exports = Radio;