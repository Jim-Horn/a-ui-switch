import React from 'react';
import './switch.scss';

export const getClassName = (size = 'default') => {
    const baseClassName = 'ui-switch';
    let postfix = '';
    if (size === 'inline') postfix = '--inline';
    if (size === 'centerpiece') postfix = '--centerpiece';
    return baseClassName + postfix;
};

const Switch = (props) => {
    const {
        value = '',
        checked = false,
        disabled = false,
        size = 'default',
        onClick = () => {
            console.log('click');
        },
    } = props;

    return (
        <div className="row">
            <label className={getClassName(size)}>
                <input
                    className="ui-switch__input"
                    type="checkbox"
                    value={value}
                    defaultChecked={checked}
                    disabled={disabled}
                    onClick={onClick}
                />
                <span className="ui-switch__toggle" />
            </label>
        </div>
    );
};

export default Switch;
