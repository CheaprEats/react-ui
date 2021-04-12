import React from 'react'; 
import { Meta, Story } from '@storybook/react';
import { createStoryTitle } from '../../Constants';
import { Invite, InviteProps } from './Invite';

export default {
    title: createStoryTitle('Invite Component'),
    component: Invite,
} as Meta;

const args = {
    title: 'Invite only',
    heading: 'Request an invitation to Stripe Treasury',
    description: 'While Stripe Treasury is in initial roll-out, we’re inviting a limited number of platforms that serve US-based businesses to participate. If you’d like to request an invitation, please provide additional information and we’ll keep you updated.',
    footer: 'Because Stripe Treasury is in beta, it is available to a limited number of invited platforms and capabilities will continue to change.', 
    buttonText: 'Submit',
    inviteArgs: [
        {
            label: 'First Name',
            placeholder: 'Jane',
            type: 'text',
        },
        {
            label: 'Last Name',
            placeholder: 'Diaz',
            type: 'text',
        },
        {
            label: 'Work email',
            placeholder: 'jane@account.com',
            type: 'email',
        },
        {
            label: 'Company website',
            placeholder: 'example.com',
            type: 'text',
        },
        {
            label: 'Other info',
            subLabel: "Optional",
            placeholder: 'What do you want...',
            type: 'textarea',
        }
    ]
};

export const Basic: Story<InviteProps> = (args) => (
    <Invite {...args} />
);
Basic.args = { ...args };

