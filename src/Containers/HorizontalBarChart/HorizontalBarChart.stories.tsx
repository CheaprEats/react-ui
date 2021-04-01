import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HorizontalBarChart, IHorizontalBarChartProps, } from './HorizontalBarChart';
import { createStoryTitle } from '../../Constants';

export default {
    title: createStoryTitle('Horizontal Bar Chart'),
    component: HorizontalBarChart,
    args:{
        data : [
            {
                label: "Today’s average Preperation Time",
                value: 31
            },
            {
                label: "Total Average Preparation Time",
                value: 35,
                isTotal:true,
            },
        ],
        header:'Order Preparation Times',
        summaryHeader:'How fast orders are being prepared',
        summaryDescription:'Description of how fast sadlfkj sdflkj sdlfkj sldkfj lsdkjf lskdjf ',
        margin:{top:10,right:100,bottom:10,left:30},
        unit:'minutes',
    },
} as Meta;

export const Basic: Story<IHorizontalBarChartProps> = (args) => <HorizontalBarChart {...args} />;