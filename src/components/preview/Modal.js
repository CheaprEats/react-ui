import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { position, flex, transition, scroll, media } from '../mixins';
import { SHADOW_RAISE_1 } from '../variables';

const Container = styled.div`
    ${ flex('center') }
    ${ ({ delay }) => transition('opacity', delay) }
    ${ ({ pos }) => position(pos, 'auto', 0) };
    pointer-events: ${ ({ unmount }) => unmount === false ? 'all' : 'none' };
    opacity: ${ ({ unmount }) => unmount === false ? 1 : 0 };
    z-index: ${ ({ zIndex }) => zIndex };
    min-height: 100%;
    min-width: 100%;
`;

const ModalBox = styled.div`
    ${ scroll }
    ${ ({ delay }) => transition(['transform', 'height', 'width', 'border-radius'], delay) }
    ${ ({ margin }) => position('absolute', margin, 'auto') };
    ${ ({ width, height }) => `
        width: ${ width };
        height: ${ height };
    ` }
    transform: translate3d(0, ${
        ({ unmount }) => unmount === false ? '0' : '-20%'
    }, 0);
    padding: ${ ({ padding }) => padding + (typeof(padding) !== 'string' ? 'px' : '') };
    box-shadow: ${ SHADOW_RAISE_1 };
    background-color: white;
    box-sizing: border-box;
    border-radius: 12px;
    overflow: auto;

    ${ media.tablet`
        width: 100%;
        height: 100%;
        border-radius: 0;
    ` }
`;

const Close = styled.button`
    ${ position('absolute', '12px 12px auto auto') }
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    width: 22px;
    height: 22px;
    &::before, &::after {
        ${ transition('background-color', 150) }
        ${ position('absolute') }
        background-color: black;
        content: '';
        width: 100%;
        height: 2px;
    }

    &:hover::before, &:hover::after {
        background-color: ${ ({ theme }) => theme.colors.primary };
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`;

const Backdrop = styled.div`
    ${ ({ base }) => base && 'background-color: rgba(0,0,0,0.4);' }
    z-index: ${ ({ zIndex }) => zIndex };
    cursor: pointer;
    width: 100%;
    height: 100%;
`;

let timer;
// fade - user controls
// unmount - Component control for animations
// null - mounted but hidden, false - mounted and shown, true - unmounted
export const Modal = ({
    className,
    children,
    base,
    onClose = () => {},
    position = 'fixed',
    margin = 'auto',
    padding = 20,
    zIndex = 99,
    delay = 300,
    width = '550px',
    height = 'auto',
    state,
}) => {
    const [ show, setShow ] = state;
    const [ unmount, setUnmount ] = useState(true);
    const close = () => setShow(false);

    useEffect(() => {
        if (show) {
            window.clearInterval(timer);
            setUnmount(null);
            window.setTimeout(() => setUnmount(false), 1);
        } else if (!unmount) {
            setUnmount(null);
            timer = window.setTimeout(() => {
                if (!show) {
                    setUnmount(true);
                    onClose();
                }
            }, delay);
        }
    }, [ show ]);

    return unmount !== true && (
        <Container zIndex={ zIndex } pos={ position } unmount={ unmount } delay={ delay }>
            <ModalBox
                className={ className }
                unmount={ unmount }
                padding={ padding }
                width={ width }
                height={ height }
                margin={ margin }
                delay={ delay }
                base={ base }
            >
                <Close onClick={ close }/>
                { children }
            </ModalBox>
            <Backdrop onClick={ close } base={ base }/>
        </Container>
    );
}