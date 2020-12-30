import React, { useState } from 'react';
import styled from 'styled-components';
import { List } from '../List';
import { CollapsibleHeading, ICollapsibleHeadingProps } from '../CollapsibleHeading/CollapsibleHeading';
import { FilterSelect, IFilterSelectProps } from '../CollapsibleHeading/FilterSelect';
import { Heading, HeadingProps } from '../../Text/Heading';
import { Button, ButtonProps } from '../../Inputs/Button/Button';
import { MainInterface, ResponsiveInterface } from '../../Utils/BaseStyles';

export interface IFilterItems {
    title: string;
    selectOptions: string[];
    placeholder: string;
};

export interface IVendorsFilterProps
    extends MainInterface,
        ResponsiveInterface,
        React.HTMLAttributes<HTMLDivElement> {
    headingTitle: string;
    buttonText: string;
    filterItems: IFilterItems[];
    headingProps?: HeadingProps;
    buttonProps?: ButtonProps;
    collapsibleHeadingProps?: ICollapsibleHeadingProps;
    filterSelectProps?: IFilterSelectProps;
}

const LOADING = false;
const BACKGROUND_COLOR = '#FFFFFF';
const FIRST_ITEM = 0;

export const VendorsFilter: React.FC<IVendorsFilterProps> = ({
    headingTitle,
    buttonText,
    filterItems,
    headingProps,
    buttonProps,
    collapsibleHeadingProps,
    ...props
}): React.ReactElement => {
    const [filterApplied, setFilterApplied] = useState(false);
    const [isCollapsedArr, setIsCollapsedArr] = useState(Array(filterItems.length).fill(false));
    return (
        <div>
            <List
                id="vendors-filter"
                loading={LOADING}
                cssPosition="absolute"
                margin="0"
                left="0"
                right="auto"
                onCloseTranslateXAxis="-100%"
                backgroundColor={BACKGROUND_COLOR}
                header={(
                    <Heading bold {...headingProps}>
                        {headingTitle}
                    </Heading>
                )}
            >
                <Wrapper {...props}>
                    {!!filterItems && filterItems.map((filterItem, index) => (
                        <CollapsibleHeading 
                            title={filterItem.title}
                            isCollapsed={isCollapsedArr[index]} 
                            setCollapsed={() => setIsCollapsedArr[index](!isCollapsedArr[index])}
                            ChildElement={(
                                <FilterSelect 
                                    selectOptions={filterItem.selectOptions}
                                    selectedValue={filterItem.selectOptions[FIRST_ITEM]}
                                    placeholder={filterItem.placeholder}
                                    filterApplied={filterApplied}
                                    setFilterApplied={setFilterApplied}
                                />
                            )}
                            {...collapsibleHeadingProps}
                        />
                    ))}
                    <Button 
                        primary 
                        onClick={() => setFilterApplied(!filterApplied)}
                        {...buttonProps}
                    >
                        {buttonText}
                    </Button>
                </Wrapper>
            </List>
        </div>
    );
};

const Wrapper = styled.div`
    
`;
