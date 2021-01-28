import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StoreHoursList, StoreHoursListProps } from '../../index';
import { createStoryTitle } from '../../Constants';

const defaultCategories = [
    {
        category: 'Winter',
        hoursByDay: {
            monday: [
                {
                    from: '5:00',
                    to: '6:00'
                },
                {
                    from: '9:00',
                    to: '10:00'
                },
                {
                    from: '12:00',
                    to: '20:00',
                },
            ],
            tuesday: [],
            wednesday: [],
            thursday: [
                {
                    from: '9:00',
                    to: '11:00'
                },
                {
                    from: '12:00',
                    to: '20:00',
                },
            ],
            friday: [],
            saturday: [],
            sunday: [],
        },
    },{
        category: 'Summer',
        hoursByDay: {
            monday: [
                {
                    from: '12:00',
                    to: '20:00',
                },
            ],
            tuesday: [],
            wednesday: [],
            thursday: [
                {
                    from: '12:00',
                    to: '20:00',
                },
            ],
            friday: [],
            saturday: [],
            sunday: [],
        },
    },
    {
        category: 'Holidays',
        hoursByDay: {
            monday: [
                {
                    from: '12:00',
                    to: '20:00',
                },
            ],
            tuesday: [],
            wednesday: [],
            thursday: [
                {
                    from: '12:00',
                    to: '20:00',
                },
            ],
            friday: [],
            saturday: [],
            sunday: [],
        }
    }
];

const textHeaders = {
    TITLES: {
        HEADING: 'Hours of Operation Management',
        FIRST_MODAL_HEADER: 'Edit Store Hours and Categories',
        SECOND_MODAL_HEADER: 'Add Store Hours',
        THIRD_MODAL_HEADER: 'Add Categories',
        OPERATIONS: 'Current Hours of Operations for ',
        CHANGE_ACTIVE: 'Change the active category',
        CHANGE_ACTIVE_SUBTILTE:
            'This will be the category of times shown to the customers',
        SELECT_A_DAY: 'Select days to add hours',
        SELECT_A_CATEGORY: 'Select a category',
        ALL_CATEGORIES: 'Current Categories',
        ALL_CATEGORIES_SUBTITLE:
            'Hover over and click the categories to delete them.',
        CONFIRM_DELETE: 'Are you sure you want to delete this category?',
        CHANGE_ACTIVE_SUBTITLE: 'Change Active',
        RESET_FORM: 'Are you sure you want to reset'
    },
    BUTTONS: {
        EDIT: 'Edit',
        TOGGLE: 'Toggle 24hrs',
        ADD_HOURS: 'Add Hours',
        EDIT_CATEGORIES: 'Edit Categories',
        ADD_CATEGORY: 'Add Category',
        SET_ACTIVE: 'Set As Active',
        YES: 'Yes',
        NO: 'No',
        RESET: 'Reset',
        SAVE: 'Save'
    },
    ERRORS: {
        CANNOT_DELETE_ACTIVE_CATEGORY: 'You cannot delete an active category',
        ONLY_ONE_TIME: 'You cannot add more than one time per day',
        FROM_TIME_TOO_BIG: 'The from time has to be earlier',
        TO_TIME_TOO_SMALL: 'Please choose another time',
        CANNOT_ADD_EMPTY: 'You cannot create an empty category',
        CATEGORY_EXISTS: 'This category already exists',
    },
};

const onSave = (categories: any) => console.log(categories);

export default {
    title: createStoryTitle('StoreHoursList'),
    component: StoreHoursList,
    args: {
        allCategories: defaultCategories,
        onSave
    },
} as Meta;





export const Basic: Story<StoreHoursListProps> = (args) => (
    <StoreHoursList {...args} textHeaders={textHeaders} />
);

export const NoCategories = Basic.bind({title: createStoryTitle('StoreHoursList Empty Categories')});
NoCategories.args = {
    allCategories: []
};