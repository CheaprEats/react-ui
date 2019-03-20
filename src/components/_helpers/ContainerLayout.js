import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputLayout, { InputLayoutProps } from './InputLayout';
import { ExtractProps } from './Util';

const KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
};

const Layout = styled(InputLayout)`
    ${ ({ disabled }) => disabled ? 'pointer-events: none;' : '' }
    flex-shrink: 0;
`;

const Items = styled.div`
    ${ ({ column }) => column ? '' : 'flex-direction: row;' }
    ${ ({ wrap }) => wrap ? 'flex-wrap: wrap;' : '' }
    justify-content: ${ ({ justify }) => justify };
    align-items: ${ ({ align }) => align };
`;

export const ContainerLayout = props => {
    const [
        layoutProps,
        { children, spacing, column, wrap, justify, align }
    ] = ExtractProps(
        InputLayoutProps, props, { name: '' }, [ 'disabled' ]
    );
    const max = Math.max(React.Children.count(children) - 1, 0);

    const handleKeys = ({ keyCode, target }) => {
        let index = parseInt(target.getAttribute('data-index'));
        switch(keyCode) {
            case KEYS.DOWN:
            case KEYS.RIGHT:
                index++;
                break;
            case KEYS.UP:
            case KEYS.LEFT:
                index--;
                break;
            default:
                break;
        }
        index = index < 0 ? max : index > max ? 0 : index;
        target.parentNode.children[index].focus();
    };

    return (
        <Layout
            { ...layoutProps }
            name=''
        >
            <Items
                justify={ justify }
                column={ column }
                align={ align }
                wrap={ wrap }
            >
                { 
                    React.Children.map(
                        children,
                        (child, dataIndex) => (
                            child &&
                            React.cloneElement(child, {
                                onKeyDown: handleKeys,
                                margin: spacing,
                                dataIndex
                            })
                        )
                    )
                }
            </Items>
        </Layout>
    );
};

ContainerLayout.defaultProps = {
    spacing: 10,
    align: 'flex-start',
    justify: 'flex-start'
};

delete InputLayoutProps.name;
ContainerLayout.propTypes = {
    ...InputLayoutProps,
    spacing: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    column: PropTypes.bool,
    wrap: PropTypes.bool,
    align: PropTypes.oneOf([
        'stretch', 'center', 'flex-start', 'inherit',
        'flex-end', 'baseline', 'initial'
    ]),
    justify: PropTypes.oneOf([
        'flex-start', 'flex-end', 'center', 'inherit',
        'space-between', 'space-around', 'initial'
    ])
};

export default ContainerLayout;