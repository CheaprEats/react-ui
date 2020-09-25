import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon';
import { Heading } from '../../Text/Heading';
import { TextLayoutProps } from '../../__Layouts';
import { Mixins } from '../../Utils';

interface ListHeaderProps extends TextLayoutProps {
    label?: string;
    headerFlex?: string;
    icon?: StyledIcon;
    iconClick?: React.MouseEventHandler;
    iconProps?: string;
    type?: string;
}

export const ListHeader: React.FC<ListHeaderProps> = ({
    label,
    children,
    headerFlex,
    icon,
    iconClick,
    iconProps,
    ...props
}): React.ReactElement => (
    <Header>
        <Row display={headerFlex}>
            <Heading bold type="h2" margin="0 0 5px" {...props}>
                {label}
            </Heading>
            {icon && (
                <Icon as={icon} onClick={iconClick} iconProps={iconProps} />
            )}
        </Row>
        {children}
    </Header>
);

interface RowProps {
    display?: string;
}
interface IconProps {
    iconProps?: string;
}

const Header = styled.div`
    padding: 10px 20px;
`;

const Row = styled.div<RowProps>`
    ${(props): string | undefined =>
        props.display && Mixins.flex(props.display)};
`;

const Icon = styled.svg<IconProps>`
    ${(props): string | undefined => props.iconProps}
`;
