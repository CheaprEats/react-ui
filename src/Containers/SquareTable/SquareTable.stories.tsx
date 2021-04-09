import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SquareTable, ISquareTable } from '@Containers';
import { createStoryTitle } from '../../Constants';

export default {
    title: createStoryTitle('SquareTable'),
    component: SquareTable,
} as Meta;

const Template: Story<ISquareTable> = (args) => <SquareTable {...args} />;

/**
 * Prints the Selected Child index to the console when Table is clicked
 * @param selectedChildIndex
 */
const handleTableClick = (selectedChildIndex: number) => {
    console.log(selectedChildIndex);
};

/**
 *Creates a square table with 7 chairs
 */
export const SevenTopSquareTable = Template.bind({});
SevenTopSquareTable.args = {
    tableShape: 'Square',
    tableID: 'T1',
    partyName: 'Dmytro',
    occupancyStatus: 'Vacant',
    chairs: [
        {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Scott',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'left',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'left',
            isSeated: true,
            occupiedBy: 'Corey',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'right',
            isSeated: false,
            occupiedBy: '',
            isVisible: false,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'right',
            isSeated: true,
            occupiedBy: 'Jack',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'bottom',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'bottom',
            isSeated: true,
            occupiedBy: 'Sam',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
    ],
    isSquare: true,
    tableUse: 'TableForManagement',
    onTableClick: handleTableClick,
};

/**
 *Creates a vertical rectangle table with 8 chairs
 */
export const EightTopVertRectangleTable = Template.bind({});
EightTopVertRectangleTable.args = {
    tableShape: 'Square',
    tableID: 'T1',
    partyName: 'Dmytro',
    occupancyStatus: 'Occupied',
    chairs: [
        {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Scott',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'left',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'left',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'left',
            isSeated: true,
            occupiedBy: 'Corey',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'right',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'right',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'right',
            isSeated: true,
            occupiedBy: 'Jack',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
        {
            position: 'bottom',
            isSeated: true,
            occupiedBy: 'Sam',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
        },
    ],
    isSquare: false,
    tableUse: 'TableForManagement',
    onTableClick: handleTableClick,
};

/**
 *Creates a horizontal rectangle table with 6 chairs
 */
export const SixTopHorizontalRectangleTable = Template.bind({});
SixTopHorizontalRectangleTable.args = {
    tableShape: 'Square',
    tableID: 'T1',
    partyName: 'Dmytro',
    occupancyStatus: 'Reserved',
    chairs: [
        {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Scott',
            isVisible: true,
            relativeSize: 0.5,
            tableUse: 'TableForManagement',
        },
        {
            position: 'left',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 0.5,
            tableUse: 'TableForManagement',
        },
        {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Corey',
            isVisible: true,
            relativeSize: 0.5,
            tableUse: 'TableForManagement',
        },
        {
            position: 'right',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 0.5,
            tableUse: 'TableForManagement',
        },
        {
            position: 'bottom',
            isSeated: true,
            occupiedBy: 'Jack',
            isVisible: true,
            relativeSize: 0.5,
            tableUse: 'TableForManagement',
        },
        {
            position: 'bottom',
            isSeated: true,
            occupiedBy: 'Sam',
            isVisible: true,
            relativeSize: 0.5,
            tableUse: 'TableForManagement',
        },
    ],
    isSquare: false,
    relativeSize: 0.5,
    tableUse: 'TableForManagement',
    onTableClick: handleTableClick,
};
