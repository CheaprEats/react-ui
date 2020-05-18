import React from 'react';
import styled from 'styled-components';
import { position, darken, flex, transition } from '../Utils/Mixins';
import { LabelLayout, LabelLayoutProps } from '../Fragments';

const COMPONENT = (
    props = {},
    innerProps = {},
    value?: boolean,
): React.ReactElement => (
    <Container>
        <Input
            type="checkbox"
            {...props}
            value={value === undefined ? '' : value.toString()}
            checked={value}
        />
        <SwitchBox {...innerProps}>
            <SwitchDot />
        </SwitchBox>
    </Container>
);

const withTags = (
    props: object,
    innerProps: {
        activeStyle?: Function;
        switchStyle?: Function;
    },
    tags?: string[],
    value?: boolean,
): React.ReactElement => {
    if (tags) {
        return (
            <Tags>
                {tags[0] && <Tag>{tags[0]}</Tag>}
                {COMPONENT(props, innerProps, value)}
                {tags[1] && <Tag>{tags[1]}</Tag>}
            </Tags>
        );
    }

    return COMPONENT(props, innerProps, value);
};

export interface SwitchProps extends LabelLayoutProps {
    tags?: string[];
    activeStyle?: Function;
    switchStyle?: Function;
    value?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
    tags,
    activeStyle,
    switchStyle,
    value,
    ...props
}): React.ReactElement => {
    const component = withTags(
        props,
        { activeStyle, switchStyle },
        tags,
        value,
    );
    return <LabelLayout {...props}>{component}</LabelLayout>;
};

const Tag = styled.label`
    margin: 0 10px;
    font-weight: bold;
    font-size: 0.85rem;
`;

const Container = styled.div`
    border-radius: 999px;
    margin-right: auto;
    position: relative;
    overflow: hidden;
`;

const Tags = styled.div`
    ${flex('center')}
    margin: 0 auto 0 -10px;
    ${Container} {
        margin-right: none;
    }
`;

const Input = styled.input`
    ${position('absolute', 0, 0)}
    height: 200%;
    width: 100%;
    opacity: 0;
    z-index: 1;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }
`;

const SwitchBox = styled.div<SwitchProps>`
    ${flex('flex-start', 'center')}
    box-sizing: border-box;

    ${({ theme }): string => `
        background-color: ${darken(theme.colors.input.default, 0.05)};
        padding: ${theme.dimensions.switch.spacing}px;
        width: ${theme.dimensions.switch.size * 2}px;
        height: ${theme.dimensions.switch.size}px;
    `}

    // Disabled
    ${Input}:disabled ~ & {
        opacity: 0.6;
    }

    ${({ activeStyle, ...props }): string =>
        activeStyle
            ? `
       ${Input}:checked ~ & { 
           ${activeStyle(props)}
       }
    `
            : ''}
    ${({ switchStyle, ...props }): string =>
        switchStyle ? switchStyle(props) : ''}
`;

const SwitchDot = styled.div`
    ${transition(['transform'])}
    border-radius: 50%;
    background-color: white;
    ${({ theme }): string => {
        const { size, spacing } = theme.dimensions.switch;
        const dotSize = size - spacing * 1.5;
        return `
            width: ${dotSize}px;
            height: ${dotSize}px;

            ${Input}:checked ~ ${SwitchBox} & {
                transform:
                    translate3d(100%, 0, 0)
                    translate3d(${spacing}px, 0, 0)
                ;
            }
        `;
    }}
`;

export default Switch;
