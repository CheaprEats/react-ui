export interface IDraggableComponent {
    [key: string]: {
        key: string,
        field: string,
        isRequired: boolean,
        isRecommended: boolean
    }
};

export interface ICategoryInterface {
    key: string,
    editorCategory: string,
    isCollapsed: boolean,
    draggableComponents: IDraggableComponent
};

export interface ILeftSideBarInterface {
    textElements: ICategoryInterface,
    imageElements: ICategoryInterface,
    layoutElements: ICategoryInterface,
    numberElements: ICategoryInterface,
    priceElements: ICategoryInterface,
    codesElements: ICategoryInterface,
    settingsElements: ICategoryInterface
};

export const ReceiptElements: ILeftSideBarInterface = {
    textElements: {
        key: 'Text',
        editorCategory: 'Text',
        isCollapsed: false,
        draggableComponents: {
            NAME_OF_BUSINESS: {   
                key: '1',
                field: 'Name of business',
                isRequired: true,
                isRecommended: false
            },
            ADDRESS_OF_BUSINESS: {
                key: '2',
                field: 'Address of business',
                isRequired: true,
                isRecommended: false
            },
            CONTACT_INFORMATION: {
                key: '3',
                field: 'Business contact information',
                isRequired: true,
                isRecommended: false
            },
            NAME_OF_SALES_ASSOCIATE: {
                key: '4',
                field: 'Name of sales associate',
                isRequired: true,
                isRecommended: false
            },
            NAME_OF_PRODUCT: {
                key: '5',
                field: 'Name of product or service',
                isRequired: true,
                isRecommended: false
            },
            ORDER_TYPE: {
                key: '6',
                field: 'Order type',
                isRequired: false,
                isRecommended: true
            },
            PAYMENT_METHOD: {
                key: '7',
                field: 'Payment method',
                isRequired: false,
                isRecommended: true
            }
        }
    },
    imageElements: {
        key: 'Image',
        editorCategory: 'Image',
        isCollapsed: false,
        draggableComponents: {
            BUSINESS_LOGO: {
                key: '8',
                field: 'Business logo',
                isRequired: false,
                isRecommended: true
            },
            ADDITIONAL_BRANDING: {
                key: '9',
                field: 'Additional branding',
                isRequired: false,
                isRecommended: true
            }
        }
    },
    layoutElements: {
        key: 'Layout',
        editorCategory: 'Layout',
        isCollapsed: false,
        draggableComponents: {
            MENU_TABLE: {
                key: '10',
                field: 'Menu table',
                isRequired: true,
                isRecommended: false
            },
            WHITE_SPACE: {
                key: '11',
                field: 'White space',
                isRequired: false,
                isRecommended: true
            },
            DIVIDER: {
                key: '12',
                field: 'Divider',
                isRequired: false,
                isRecommended: true
            }
        }
    },
    numberElements: {
        key: 'Number',
        editorCategory: 'Number',
        isCollapsed: false,
        draggableComponents: {
            STATION_NUMBER: {
                key: '13',
                field: 'Station number',
                isRequired: true,
                isRecommended: false
            },
            QUANTITY_PRODUCT: {
                key: '14',
                field: 'Quantity of product or service',
                isRequired: true,
                isRecommended: false
            },
            NUMBER_OF_GUESTS: {
                key: '15',
                field: 'Number of guests',
                isRequired: false,
                isRecommended: true
            },
            TRANSACTION_ORDER_NUMBER: {
                key: '16',
                field: 'Transaction order number',
                isRequired: false,
                isRecommended: true
            },
        }
    },
    priceElements: {
        key: 'Price',
        editorCategory: 'Price',
        isCollapsed: false,
        draggableComponents: {
            SALE_PRICE: {
                key: '17',
                field: 'Sale price',
                isRequired: true,
                isRecommended: false
            },
            TOTAL_TAX: {
                key: '18',
                field: 'Total amount of tax',
                isRequired: true,
                isRecommended: false
            },
            RATE_OF_SALES_TAX: {
                key: '19',
                field: 'Rate of sales tax',
                isRequired: true,
                isRecommended: false
            },
            TOTAL_SALE_PRICE: {
                key: '20',
                field: 'Total price of sale',
                isRequired: false,
                isRecommended: true
            },
            TIP: {
                key: '21',
                field: 'Tips',
                isRequired: false,
                isRecommended: true
            },
            TOLAL_PRICE_WITH_TAX: {
                key: '22',
                field: 'Total price of sale with tax',
                isRequired: false,
                isRecommended: true
            },
            TOTAL_PRICE_WITH_TIPS: {
                key: '23',
                field: 'Total price with tip',
                isRequired: false,
                isRecommended: true
            }
        }
    },
    codesElements: {
        key: 'Codes',
        editorCategory: 'Codes',
        isCollapsed: false,
        draggableComponents: {
            UPC_CODE: {
                key: '24',
                field: 'UPC code',
                isRequired: true,
                isRecommended: false
            },
            QR_CODE: {
                key: '25',
                field: 'QR code',
                isRequired: false,
                isRecommended: true
            }
        }
    },
    settingsElements: {
        key: 'Settings',
        editorCategory: 'Settings',
        isCollapsed: false,
        draggableComponents: {
            DATE: {
                key: '26',
                field: 'Date',
                isRequired: true,
                isRecommended: false
            },
            TIME: {
                key: '27',
                field: 'Time',
                isRequired: true,
                isRecommended: false
            }
        }
    }
};

export const draggableComponentsObj: IDraggableComponent = Object.values(ReceiptElements).map((ReceiptElement)  => {
    return ReceiptElement.draggableComponents;
}).reduce((prev, current) => {
    return {...prev, ...current};
});

export interface IElementWithCategory {
    editorCategory: string,
    field: string[]
};

export const ElementWithCategory: IElementWithCategory [] = [
    {
        editorCategory: 'Text',
        field: [
            'Name of business',
            'Address of business',
            'Business contact information',
            'Name of sales associate',
            'Name of product or service',
            'Order type',
            'Payment method'
        ]
    },
    {
        editorCategory: 'Image',
        field: [
            'Business logo',
            'Additional branding'
        ]
    },
    {
        editorCategory: 'Layout',
        field: [
            'Menu table',
            'White space',
            'Divider'
        ]
    },
    {
        editorCategory: 'Number',
        field: [
            'Station number',
            'Quantity of product or service',
            'Number of guests',
            'Transaction order number',
            'Sale price',
            'Total amount of tax',
            'Rate of sales tax',
            'Total price of sale',
            'Tips',
            'Total price of sale with tax',
            'Total price with tip'
        ]
    },
    {
        editorCategory: 'Codes',
        field: [
            'UPC code',
            'QR code'
        ]
    },
    {
        editorCategory: 'Settings',
        field: [
            'Date',
            'Time'
        ]
    }
];