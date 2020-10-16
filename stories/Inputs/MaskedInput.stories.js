import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { MaskedInputPreset, MaskedInput } from '../../src/Inputs';
import { ViewArray } from 'styled-icons/material';
import { createStoryTitle } from '../Constants';

storiesOf(createStoryTitle('Masked Input'), module)
    .addDecorator(withKnobs)
    .add('with dollar formatter', () => {
        const [value, setValue] = useState('90');
        return (
            <MaskedInput
                name="demo"
                label={text('Enter a value', 'Enter a value')}
                placeholder={text('Enter a value', 'Enter a value')}
                description={text('Enter a value', 'Enter a value')}
                realValue={value}
                onRealValueChange={setValue}
                mask={MaskedInputPreset.DOLLAR}
            />
        );
    })
    .add('with percentage formatter', () => {
        const [value, setValue] = useState('0');
        return (
            <MaskedInput
                name="demo"
                label={text('Enter a number', 'Enter a number')}
                description={text(
                    'Enter a number below',
                    'Enter a number below',
                )}
                placeholder={text('10.00', '10.00')}
                realValue={value}
                onRealValueChange={setValue}
                mask={MaskedInputPreset.PERCENTAGE}
            />
        );
    })
    .add('with sensitive info hider', () => {
        const [value, setValue] = useState('some sensitive info');
        return (
            <MaskedInput
                name="demo"
                label={text('Enter a value', 'Enter a value')}
                description={text('Enter a value below', 'Enter a value below')}
                placeholder={text('10.00', '10.00')}
                realValue={value}
                onRealValueChange={setValue}
                mask={() => '*****'}
            />
        );
    })
    .add('with changing mask', () => {
        const [value, setValue] = useState('90');

        return (
            <MaskedInput
                name="demo"
                label={text('Enter a value', 'Enter a value')}
                placeholder={text('Enter a value', 'Enter a value')}
                description={text('Enter a value', 'Enter a value')}
                realValue={value}
                onRealValueChange={setValue}
                mask={select(
                    'Masks',
                    {
                        dollar: 'DOLLAR',
                        percentage: 'PERCENTAGE',
                    },
                    'DOLLAR',
                )}
            />
        );
    });
