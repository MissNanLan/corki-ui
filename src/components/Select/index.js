import React, { Component } from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import './index.css';
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSwitch: this.props.checked || true,
            isShowDropDown: false,
            value: ''
        };
    }

    componentDidMount() {
        document.body.addEventListener('click', (e) => {
            if(document.querySelector('.corki-select').className.includes('corki-select-open')) {
                this.setState({
                    isShowDropDown: false
                }); 
            }
        });
        document.querySelector('.corki-select').addEventListener('click', (e) => {
            e.stopPropagation();
            this.setState({
                isShowDropDown: !this.state.isShowDropDown
            });
            const offsetHeight = document.querySelector('.corki-select').offsetHeight;
            const offsetWidth = document.querySelector('.corki-select').offsetWidth;
            if(document.querySelector('.corki-select-dropdown')) document.querySelector('.corki-select-dropdown').setAttribute('style', `top: ${offsetHeight + 2}px; width: ${offsetWidth}px`);
            if(document.querySelector('.corki-select-dropdown-menu')) {
                document.querySelector('.corki-select-dropdown-menu').addEventListener('click', (e) => {
                    this.setState({
                        selectVal: e.target.innerHTML
                    });
                });
            }
        });
    }
 
    render() {
        const { isShowDropDown, value } = this.state;
        return (
            <div className={isShowDropDown ? "corki-select corki-select-open" : "corki-select"} style={{ width: '120px' }}>
                <div className="corki-select-selection">
                    {value}
                </div>
                <span className="corki-select-arrow">
                    <i className={isShowDropDown ? "corki-select-arrow-icon" : "corki-select-arrow-down-icon"} aria-label="图标: down">
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            class=""
                            data-icon="down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                    </i>
                </span>
                {
                    isShowDropDown &&
                    <div className="corki-select-dropdown">
                        <ul className="corki-select-dropdown-menu" role="listbox" tabindex="0">
                            <li className="corki-select-dropdown-menu-item corki-select-dropdown-menu-item-selected" role="option" unselectable="on" aria-selected="false">
                                Jack
                            </li>
                            <li className="corki-select-dropdown-menu-item" role="option" unselectable="on" aria-selected="true">
                                Lucy
                            </li>
                            <li className="corki-select-dropdown-menu-item" role="option" unselectable="on" aria-disabled="true" aria-selected="false">
                                Disabled
                            </li>
                            <li className="corki-select-dropdown-menu-item" role="option" unselectable="on" aria-selected="false">
                                yiminghe
                            </li>
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

Select.propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func
};

module.exports = Select;