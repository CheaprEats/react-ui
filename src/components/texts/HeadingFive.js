import React from 'react';
import { TextLayoutProps } from '../_helpers/TextLayout';
import { Heading } from '../';

export const HeadingFive = ({
    className,
    margin,
    lineHeight,
    bold,
    children,
    text,
}) => (
    <Heading
        className={ className }
        margin={ margin }
        lineHeight={ lineHeight }
        bold={ bold }
        type='h5'
        text={ text || children }
    />
);

HeadingFive.propTypes = TextLayoutProps;