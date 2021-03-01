import React from 'react';
import Label from './elements';

const Switch = (props) => {
    const {
        label = 'Add a label',
        labelPosition = 'left',
        value = '',
        checked = false,
        disabled = false,
        size = 'default',
        className = '',
        onClick = (ev) => {
            console.log(`This switch doesn't do anything.\nAdd an onClick function`);
            console.log('ev.target.checked: ', ev.target.checked);
        },
        ...other
    } = props;

    return (
        <Label size={size} className={className}>
            {labelPosition === 'left' && label}
            <input
                type="checkbox"
                value={value}
                defaultChecked={checked}
                disabled={disabled}
                onClick={onClick}
                {...other}
            />
            <span />
            {labelPosition === 'right' && label}
        </Label>
    );
};

export default Switch;
