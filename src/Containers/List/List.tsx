import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Mixins } from '../../Utils';
import { Responsive, Main } from '../../Utils/BaseStyles';
import { Loading } from '../Loading';

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    loading: boolean;
    header?: React.ReactElement;
    footer?: React.ReactElement;
    toggleComponent?: React.ReactElement;
    id: string;
    columnWidth?: string;
    margin?: string;
    right?: string;
    left?: string;
    onCloseTranslateXAxis?: string;
    cssPosition?: string;
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    zIndex?: number;
}

export const List: React.FC<ListProps> = ({
    loading,
    children,
    header,
    footer,
    columnWidth = '280px',
    isOpen = true,
    setIsOpen,
    toggleComponent,
    id,
    ...props
}): React.ReactElement => {
    useEffect((): void | (() => void | undefined) => {
        const handler = ({ type }: { type: string }): void => {
            if (setIsOpen) {
                switch (type) {
                    case 'swipeRight':
                        setIsOpen(true);
                        break;
                    case 'swipeLeft':
                        setIsOpen(false);
                        break;
                    default:
                        break;
                }
            }
        };
        window.addEventListener('swipeRight', handler);
        window.addEventListener('swipeLeft', handler);
        return (): void => {
            window.removeEventListener('swipeRight', handler);
            window.removeEventListener('swipeLeft', handler);
        };
    }, []);

    return (
        <Wrapper isOpen={isOpen} {...props}>
            <Container columnWidth={columnWidth} id={id}>
                {header}
                <Items>{loading ? <Loading /> : children}</Items>
                {footer}
            </Container>
            {toggleComponent}
        </Wrapper>
    );
};

interface WrapperProps {
    isOpen: boolean;
    columnWidth?: string;
    margin?: string;
    right?: string;
    left?: string;
    cssPosition?: string;
    onCloseTranslateXAxis?: string;
    zIndex?: number;
}

interface ColumnProps {
    columnWidth: string;
}

const Wrapper = styled.div<WrapperProps>`
    ${Mixins.flex()}
    ${Mixins.transition(['transform'])} 
    height: 100%;
    ${({
        isOpen,
        onCloseTranslateXAxis,
        columnWidth,
        margin,
        right,
        left,
        cssPosition,
        zIndex,
    }): string => `
        transform: translateX(${isOpen ? '0' : onCloseTranslateXAxis});
        width: ${columnWidth};
        z-index: ${zIndex};
        ${Mixins.position(cssPosition, margin, 0, right, 0, left)}        
    `}
`;

const Container = styled.div<ColumnProps>`
    ${Mixins.flex('column')}
    background-color: white;
    flex-shrink: 0;
    flex-grow: 1;
    z-index: 1;
    ${({ theme, columnWidth }): string => `
        box-shadow: ${theme.depth[1]};
        width: ${columnWidth};
        ${Responsive}
        ${Main}
    `}
`;

const Items = styled.ul`
    ${Mixins.scroll}
    list-style-type: none;
    overflow: auto;
    padding: 0;
    margin: 0;
`;
