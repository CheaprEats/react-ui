import React from 'react';
import styled from 'styled-components';
import { Mixins } from '../../Utils';
import { Main } from '../../Utils/BaseStyles';

interface ListItemProps
    extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
    onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
    padding?: string;
    setIsToggled?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ListItem: React.FC<ListItemProps> = ({
    children,
    onClick,
    padding = '16px 20px',
    setIsToggled,
    ...props
}): React.ReactElement => {
    const setIsToggledState:
        | React.Dispatch<React.SetStateAction<boolean>>
        | undefined = setIsToggled;

    return (
        <Item
            onClick={(el): void => {
                if (setIsToggledState) setIsToggledState(false);
                if (onClick) onClick(el);
            }}
            padding={padding}
            {...props}
        >
            {children}
        </Item>
    );
};

interface ItemProps {
    padding?: string;
}

const Item = styled.li<ItemProps>`
    ${Mixins.flex()}
    ${({ theme }): string => `
        border-bottom: 2px solid ${theme.colors.text}20;
    `}
    ${({ padding, ...props }): string => Main({ padding, ...props })}
    &:last-child {
        border-bottom: none;
    }
`;
