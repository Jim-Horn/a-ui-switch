import styled, { css } from 'styled-components';

const inline = css`
    display: inline-flex;
    align-items: center;
    span {
        position: relative;
        cursor: pointer;
        display: block;
        &:before,
        &:after {
            content: '';
            display: block;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        &:before {
            height: 1.25rem;
            width: 2rem;
            border-radius: 1.75rem;
            opacity: 1;
            margin: 0 0.5rem;
            background: #6e767d; //Neutral/deeper
        }
        &:after {
            position: absolute;
            top: 0.125rem;
            left: 0.6rem;
            height: 1rem;
            width: 1rem;
            border-radius: 50%;
            background: white;
        }
    }
    [type='checkbox'] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        &:focus + span {
            outline: #5d9dd5 solid 1px;
        }
        &:disabled + span {
            cursor: not-allowed;
            // filter: grayscale(100%);
            opacity: 0.4;
        }
        &:disabled + span::after {
            box-shadow: none;
        }
        &:checked + span::before {
            background: #4a68f9; //secondary color/blue
        }
        &:checked + span::after {
            left: calc(100% - 1.6rem);
            background: white;
        }
    }
`;

const centerpiece = css`
    display: inline-flex;
    align-items: center;
    span {
        position: relative;
        cursor: pointer;
        display: block;
        &:before,
        &:after {
            content: '';
            display: block;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        &:before {
            height: 3rem;
            width: 5rem;
            border-radius: 1.75rem;
            opacity: 1;
            margin: 0 0.5rem;
            background: #6e767d; //Neutral/deeper
        }
        &:after {
            position: absolute;
            top: 0.25rem;
            left: 0.75rem;
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 50%;
            background: white;
        }
    }
    [type='checkbox'] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        &:focus + span {
            outline: #5d9dd5 solid 1px;
        }
        &:disabled + span {
            cursor: not-allowed;
            opacity: 0.4;
        }
        &:disabled + span::after {
            box-shadow: none;
        }
        &:checked + span::before {
            background: #4a68f9; //secondary color/blue
        }
        &:checked + span::after {
            left: calc(100% - 3.25rem);
            background: white;
        }
    }
`;

export const getAdditionalStyling = (size = 'default') => {
    if (size === 'default') return;
    if (size === 'inline') return inline;
    if (size === 'centerpiece') return centerpiece;
};

const Label = styled.label`
    display: inline-flex;
    align-items: center;
    span {
        position: relative;
        cursor: pointer;
        display: block;
        &:before,
        &:after {
            content: '';
            display: block;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        &:before {
            height: 1.75rem;
            width: 2.9rem;
            border-radius: 1.75rem;
            opacity: 1;
            margin: 0 0.5rem;
            background: #6e767d;
        }
        &:after {
            position: absolute;
            top: 0.125rem;
            left: 0.7rem;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 50%;
            background: white;
        }
    }
    [type='checkbox'] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        &:focus + span {
            outline: #5d9dd5 solid 1px;
        }
        &:disabled + span {
            cursor: not-allowed;
            // filter: grayscale(100%);
            opacity: 0.4;
        }
        &:disabled + span::after {
            box-shadow: none;
        }
        &:checked + span::before {
            background: #4a68f9; //secondary color/blue
        }
        &:checked + span::after {
            left: calc(100% - 2.2rem);
            background: white;
        }
    }
    ${({size}) => getAdditionalStyling(size)}
`;

export default Label;
