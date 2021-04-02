import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DeliveryRadius, IDeliveryRadiusProps, } from './DeliveryRadius';
import { createStoryTitle } from '../../Constants';

export default {
    title: createStoryTitle('Delivery Radius'),
    component: DeliveryRadius,
    args:{
        title:'Delivery Radius',
        description:'Set your Delivery Radius, for how far away you would like the delivery option to be available for your customers',
        width:600,
        leftMarkContent:'No Delivery',
        rightMarkContent:'Unlimited',
        unit:'km',
    },
} as Meta;

export const Basic: Story<IDeliveryRadiusProps> = (args) => <DeliveryRadius {...args} />;