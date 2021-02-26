import React from 'react';
import { render } from 'react-dom';
import Switch from './components/Switch';
import styled from 'styled-components';

const SwitchBundle = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    & > label {
        margin-bottom: 1rem;
    }
`;

const DefaultView = () => {
    return (
        <>
            <h1>Switch examples</h1>
            <SwitchBundle>
                <Switch
                    onClick={(ev) => {
                        console.log('ev.target: ', ev.target);
                        console.log('ev.target.checked: ', ev.target.checked);
                    }}
                />
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
            </SwitchBundle>
        </>
    );
};
render(<DefaultView />, document.getElementById('base-target'));
