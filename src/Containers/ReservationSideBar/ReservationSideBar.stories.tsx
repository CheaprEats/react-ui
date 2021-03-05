import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ReservationSideBar, IReservationSideBar } from './ReservationSideBar';
import { createStoryTitle } from '../../Constants';

export default {
    title: createStoryTitle('ReservationSideBar'),
    component: ReservationSideBar,
} as Meta;

const Template: Story<IReservationSideBar> = (args) => (
    <ReservationSideBar {...args} />
);

export const ReservationSideBarComponent = Template.bind({});

ReservationSideBarComponent.args = {
    ReservationList: [
        {
            tableID: 'T1',
            partyName: 'Corey Taylor',
            occupancyStatus: 'Reserved',
            time: '4:00 PM',
            partySize: 5,
        },
    ],
    WaitingRoomList: [
        {
            tableID: 'T1',
            partyName: 'Bob Marley',
            partySize: 5,
            time: '5:00 PM',
            occupancyStatus: 'Vacant',
        },
    ],
    AvailableRoomsList:[
        "Dining Room",
        "Kitchen",
        "Living Room",
        "Patio"
    ]
};
