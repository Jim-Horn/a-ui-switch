import React from 'react';
import { render } from 'react-dom';
import Switch from './components/Switch';

const DefaultView = () => {
    return (
        <>
            <Switch />
            <Switch checked />
            <Switch disabled />
            <Switch checked disabled />
            <Switch size="inline" />
            <Switch size="inline" checked />
            <Switch size="inline" disabled />
            <Switch size="inline" checked disabled />
            <Switch size="centerpiece" />
            <Switch size="centerpiece" checked />
            <Switch size="centerpiece" disabled />
            <Switch size="centerpiece" checked disabled />
        </>
    );
};
render(<DefaultView />, document.getElementById('base-target'));
