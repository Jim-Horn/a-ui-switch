import React from 'react';
import Label from './elements';

const Switch = (props) => {
    const {
        value = '',
        checked = false,
        disabled = false,
        size = 'default',
        onClick = (ev) => {
            console.log(`This switch doesn't do anything.\nAdd an onClick function`);
            console.log('ev.target.checked: ', ev.target.checked);
        },
    } = props;

    return (
        <Label size={size}>
            <input type="checkbox" value={value} defaultChecked={checked} disabled={disabled} onClick={onClick} />
            <span />
        </Label>
    );
};

export default Switch;
