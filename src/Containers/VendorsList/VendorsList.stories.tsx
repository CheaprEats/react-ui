import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TableView } from '@styled-icons/material/TableView';
import { List } from '@styled-icons/bootstrap/List';
import { ViewGrid } from '@styled-icons/heroicons-solid/ViewGrid';
import { 
    VendorsList, 
    IVendorsListProps, 
    Profile, 
    TagContainer, 
    SmallText 
} from '../../index';
import { DefaultFilter } from './DefaultFilter';
import { createStoryTitle } from '../../Constants';

export default {
    title: createStoryTitle('Vendors List'),
    component: VendorsList,
} as Meta;

const getVendorsListProps = (): IVendorsListProps => ({
    filterItems: [
        {
            title: 'Name',
            selectOptions: ['Contains', 'Equals'],
            placeholder: 'Add name'
        },
        {
            title: 'Tag',
            selectOptions: ['Contains', 'Equals'],
            placeholder: 'Add tag'
        },
        {
            title: 'Created',
            selectOptions: ['Created earlier than', 'Created on', 'Created later than'],
            placeholder: 'Select date'
        }
    ],
    columns: [
        {
            Header: 'Client',
            accessor: 'client',
            Cell: (cell: any) => (
                <Profile
                    key={cell.row.original.id}
                    name={cell.row.original.name}
                    email={cell.row.original.email}
                    imageUrl={cell.row.original?.imageUrl}
                    profileProps={{ style: { marginTop: '5px' } }}
                />
            ),
            Filter: DefaultFilter,
        },
        {
            Header: 'Tags',
            accessor: 'tags',
            Cell: (cell: any) => (
                <TagContainer 
                    tags={cell.row.original.tags} 
                    isHoverable={false} 
                    style={{ padding: '10px 0' }}
                    tagProps={{ style: { margin: '5px 10px 0 0' }}}
                />
            ),
            Filter: DefaultFilter,
        },
        {
            Header: 'Created',
            accessor: 'header',
            Cell: (cell: any) => (
                <div style={{ padding: '10px 0' }}>
                    <SmallText style={{ padding: '0 10px' }}>
                        {cell.row.original.createdAt}
                    </SmallText>
                </div>
            ),
            Filter: DefaultFilter,
        },
    ],
    filterButtonText: 'Apply',
    filterTitleText: 'Filters',
    headerRightButtonText: 'Add Client',
    headerText: "Clients",
    navigationBarItems: [
        {
            icon: TableView,
            label: 'Overview',
        },
        {
            icon: List,
            label: 'List View',
        },
        {
            icon: ViewGrid,
            label: 'Segment',
        },
    ],
    data: [
        {
            key: 1,
            id: '1',
            name: 'Emy Jackson',
            email: 'emy_jac@upmind.com',
            imageUrl:
                'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg',
            tags: ['VIP Client', 'Early Adopter'],
            createdAt: '24/05/2019',
        },
        {
            key: 2,
            id: '2',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '23/05/2019',
        },
        {
            key: 3,
            id: '3',
            name: 'Emy Jackson',
            email: 'emy_jac@upmind.com',
            imageUrl:
                'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg',
            tags: ['VIP Client', 'Early Adopter'],
            createdAt: '24/05/2019',
        },
        {
            key: 4,
            id: '4',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '23/05/2019',
        },
        {
            key: 5,
            id: '5',
            name: 'Emy Jackson',
            email: 'emy_jac@upmind.com',
            imageUrl:
                'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg',
            tags: ['VIP Client', 'Early Adopter'],
            createdAt: '24/05/2019',
        },
        {
            key: 6,
            id: '6',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '24/05/2019'
        },
        {
            key: 6,
            id: '7',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '24/05/2019'
        },
        {
            key: 8,
            id: '8',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '24/05/2019'
        },
        {
            key: 9,
            id: '9',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg',
            tags: ['VIP Client'],
            createdAt: '23/05/2019'
        },
        {
            key: 10,
            id: '10',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '24/05/2019'
        },
        {
            key: 11,
            id: '11',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '24/05/2019'
        },
        {
            key: 12,
            id: '12',
            name: 'Emy Jackson',
            email: 'emy_jac@upmind.com',
            imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg',
            tags: ['VIP Client', 'Early Adopter'],
            createdAt: '24/05/2019'
        },
        {
            key: 13,
            id: '13',
            name: 'Emy Jackson',
            email: 'emy_jac@upmind.com',
            imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg',
            tags: ['VIP Client', 'Early Adopter'],
            createdAt: '24/05/2019'
        },
        {
            key: 14,
            id: '14',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '24/05/2019'
        },
        {
            key: 15,
            id: '15',
            name: 'Emy Jackson',
            email: 'emy_jac@upmind.com',
            imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg',
            tags: ['VIP Client', 'Early Adopter'],
            createdAt: '24/05/2019'
        },
        {
            key: 16,
            id: '16',
            name: 'Amy Jackson',
            email: 'amy_jac@upmind.com',
            tags: ['VIP Client'],
            createdAt: '24/05/2019'
        }
    ],
});

const Template: Story<IVendorsListProps> = (args) => (
    <VendorsList {...args} />
);

export const Basic = Template.bind({});
Basic.args = getVendorsListProps();
