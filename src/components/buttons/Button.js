import React                                          from 'react';
import styled, {css, ThemeProvider}                                  from 'styled-components';
import PropTypes                                      from 'prop-types';
import {PRIMARY_COLOUR, PRIMARY_FONT, SHADOW_RAISE_1} from "../variables";


const ButtonWrapper = styled.button`
    color: ${({primary, black}) => primary ? "white" : black ? 'black' : PRIMARY_COLOUR};
    background-color: ${props => props.primary ? PRIMARY_COLOUR : "transparent"};
    ${({flat}) => flat ? '': `box-shadow: ${SHADOW_RAISE_1};`};
    ${({size}) => size? `
        font-size: ${size}px;
        padding: ${10 * size / 14}px ${20 * size / 14}px;
    `: `
        font-size: 0.9rem;
        padding: 10px 20px;   
    `}
    transition: background-color ease 0.3s;
    font-family: ${PRIMARY_FONT};
    flex-shrink: 0;
    border-radius: 999px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    
    ${({ margin }) => `margin: ${ margin };`}
    ${({ disabled }) => !disabled ? css`
        &:hover {
            background-color: ${props => props.primary ? "#B22330" : "#f4f4f4"};
        }
        &:active {
            background-color: ${props => props.primary ? "#6C121A" : "#e8e8e8"};
        }
    `: `opacity: 0.7;`}
`;

const StyledIcon = styled.svg`
    ${({size}) => `
        width: ${ size ? 12 * size / 14 : 12 }px;
        margin-right: ${ size ? 6 * size / 14 : 6 }px;
    `}
    height: auto;
`;

export const Button = ({
    primary,
    flat,
    black,
    text,
    onClick,
    icon,
    margin = 0,
    size,
    disabled,
    className,
    children
}) => {
    return (
        <ButtonWrapper
            className={className}
            primary={primary}
            black={black}
            flat={flat}
            size={size}
            margin={margin}
            onClick={onClick}
            disabled={disabled}
        >
            { icon ? <StyledIcon as={icon} size={size}/> : null }{text ? text : children}
        </ButtonWrapper>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    flat: PropTypes.bool,
    /** Highly recommend using styled-icons for SC or any other <svg/> */
    icon: PropTypes.object,
    /** Children can also be used, (However this attribute takes priority) */
    text: PropTypes.node,
    /** In pixels, defaults to 0.9rem */
    size: PropTypes.number,
    margin: PropTypes.string,
    black: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};
