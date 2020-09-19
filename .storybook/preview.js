import React  from 'react';
import { Global } from '../src';
import { addDecorator } from '@storybook/react';
import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

const customViewports = {
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px',
        },
    },
    kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
            width: '533px',
            height: '801px',
        },
    },
};

export const parameters = {
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Design System'],
            locales: 'en-US',
        },
    },
    backgrounds: {
        default: '',
        values: [
            {
                name: 'CheaprEats White',
                value: '#00aced'
            },
            {
                name: 'CheaprEats Black',
                value: '#3b5998'
            },
        ],
    },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
    },
};

// Global provider
const style = theme => `
    body {
        padding: 20px;
        box-sizing: border-box;
        min-height: 100vh;
    }
`;

addDecorator(story => {
    if (!document.querySelector('#modal')) {
        const modal = document.createElement('div');
        document.body.append(modal);
        modal.id = 'modal';
    }
    return <Global style={ style }>{ story() }</Global>;
});
