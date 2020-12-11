import React, {useState} from 'react';
import { SegmentedButton, ISegmentedButtonProps } from '../../src';

import { createStoryTitle } from '../Constants';
import { Meta, Story } from '@storybook/react';
import { Save } from '@styled-icons/fa-solid/Save';

export default {
    title: createStoryTitle('SegmentedButton'),
    component: SegmentedButton,
    args: {
        width: '400px',
        height: '100px'
    },
} as Meta;

export const Basic: Story<ISegmentedButtonProps> = (args) => {
    const [segments, setSegments] = useState([ {name: 'button3', active: false},  {name: 'button4', active: true}])
    const onClick = (event, index) => {
        const newSegments = [...segments];
        newSegments[index].active = !segments[index].active;
        setSegments(newSegments);
    }
    return <SegmentedButton onClick={onClick} segments={segments} {...args}/>
};
