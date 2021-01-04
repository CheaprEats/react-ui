import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Scissors } from '@styled-icons/entypo/Scissors';
import { Documents } from '@styled-icons/entypo/Documents';
import { Cross } from '@styled-icons/entypo/Cross';
import { User } from '@styled-icons/boxicons-solid/User';
import { TransactionList, ITransactionProps } from '../../index';
import { createStoryTitle } from '../../Constants';

const sampleData = [
    {
        id: '1',
        icon: <Scissors size="40" color="white" />,
        title: "$100.00 off discount applied to the customer's account ",
        time: '3 days ago',
    },
    {
        id: '2',
        icon: <Documents size="40" color="white" />,
        title: 'Changed subscription from bronze plan to gold plan',
        time: '1 day ago',
    },
    {
        id: '3',
        icon: <Cross size="40" color="white" />,
        title: 'Payment failed and an alert was sent',
        time: '5 hours ago',
    },
    {
        id: '4',
        icon: <User size="40" color="white" />,
        title: 'User Amin Ajao was created for testing the dashboard',
        time: '6 hours ago',
    },
    {
        id: '5',
        icon: <User size="40" color="white" />,
        title: 'User Amin Ajao was created for testing the dashboard',
        time: '6 hours ago',
    },
];

export default {
    title: createStoryTitle('TransactionList'),
    component: TransactionList,
    argTypes: {
        action: { action: 'Clicked!' },
    },
    args: {
        cardData: sampleData,
        pointer: true,
        onClick: () => {console.log('you clicked wow')},
        width: '150px',
        height: '150px',
        animationTime: 2,
        animationDelay: 0
    },
} as Meta;

export const Basic: Story<ITransactionProps> = (args) => (
    <TransactionList {...args} />
);