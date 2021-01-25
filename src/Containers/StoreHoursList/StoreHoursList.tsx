import React, { useState } from 'react';
import styled from 'styled-components';
import { BusinessTime } from '@styled-icons/fa-solid/BusinessTime';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Revision } from '@styled-icons/boxicons-regular/Revision';
import { useFormik } from 'formik';
import { SaveButton } from '@Containers/SaveButton/SaveFootnote';
import { deepCopy } from '@Utils/deepCopy';
import { ICategoryWithHoursTypes, IHoursByDay } from './constants';
import { TimeDisplay } from './TimeDisplay';
import { ErrorModal } from './ErrorModal';
import { ConfirmModal } from './ConfirmModal';
import { EditModal } from './EditModal';
import { EditCategoryModal } from './EditCategoryModal';
import { CreateHoursModal } from './CreateHoursModal';
import { SettingsCard } from '../SettingsCard/SettingsCard';
import { Heading } from '../../Text';
import { Button } from '../../Inputs/Button/Button';
import { Mixins } from '../../Utils';
import { ITextHeaders } from './interfaces';
import { MainInterface, ResponsiveInterface } from '../../Utils/BaseStyles';


export interface StoreHoursListProps
    extends MainInterface,
        ResponsiveInterface,
        React.HTMLAttributes<HTMLDivElement> {
    allCategories: ICategoryWithHoursTypes[];
    textHeaders: ITextHeaders;
    width: string;
    onSave: (updatedCategories: ICategoryWithHoursTypes[]) => void;
}

// TODO: Double Check deepCopy functioning properly with allcategories
export const StoreHoursList: React.FC<StoreHoursListProps> = ({
    allCategories,
    textHeaders,
    width,
    onSave
}): React.ReactElement => {
    const editModal = useState(false);
    const [editModalState, setEditModalState] = editModal;
    const addModal = useState(false);
    const editCategoryModal = useState(false);
    const [confirmModal, setConfirmModalState] = useState(false);
    const errorModal = useState(false);
    const [allCategoriesWithHours, setAllCategoriesWithHours] = useState<ICategoryWithHoursTypes[]>(allCategories);
    const [activeCategory, setActiveCategory] = useState(0);
    const {
        values,
        dirty,
        resetForm,
        setFieldValue
    } = useFormik({
        initialValues: {categories: allCategoriesWithHours},
        onSubmit: ()=> undefined,
        enableReinitialize: true,
    });
    const {categories} = values;
    const [is24, setIs24] = useState(false);

    /**
    *@param {day} - Day of the week to update hours
    *@param {hoursIndex} - location in array of the hours in the day array to update 
    * */
    const handleRemoveHours = (day: string, hoursIndex: number) => {
        const allCategoriesWithHoursCopy = deepCopy(categories);
        // Should remove the hours index of the array
        allCategoriesWithHoursCopy[activeCategory].hoursByDay[day].splice(hoursIndex, 1);
        setFieldValue('categories', allCategoriesWithHoursCopy)
    }

    // saves store hours and resets the initial form state to current values
    const saveStoreHours = () => {
        onSave(categories)
        setAllCategoriesWithHours(categories);
    }

    /**
    *@param {updateHoursByDay} - complete week of hours to be updated in the store
    *@param {categoryIndex} - the category to be updated with new week of hours
    * */
    const handleStoreHoursUpdate = ( updateHoursByDay: IHoursByDay, categoryIndex: number,) => {
        const updatedAllCategories = deepCopy(categories);
        updatedAllCategories[categoryIndex].hoursByDay = updateHoursByDay;
        setFieldValue('categories', updatedAllCategories)
    }

    const confirmFormReset = () => {
        setConfirmModalState(false)
        resetForm({values: {categories: allCategories}});
    }

    return (
        <>
            <SettingsCard
                heading={textHeaders.TITLES.HEADING}
                icon={BusinessTime}
                width={width}
            >
                <ButtonsContainer>
                    <Section
                        as={Button}
                        icon={Edit}
                        onClick={(): void => {
                            setEditModalState(!editModalState);
                        }}
                    >
                        {textHeaders.BUTTONS.EDIT}
                    </Section>
                    <Section as={Button} onClick={(): void => setIs24(!is24)}>
                        {textHeaders.BUTTONS.TOGGLE}
                    </Section>
                </ButtonsContainer>
                <StyledHeading type="h6">
                    {textHeaders.TITLES.OPERATIONS}
                    {categories[activeCategory].category}
                </StyledHeading>
                <TimeDisplay
                    allCategoriesWithHours={categories[activeCategory].hoursByDay}
                    handleRemoveHours={handleRemoveHours}
                    is24={is24}
                />
                <SaveButton show={dirty} buttonText='Save' action={()=> saveStoreHours()}>
                    <Section
                        as={Button}
                        icon={Revision}
                        onClick={() => setConfirmModalState(true)}
                    >
                        Reset
                    </Section>
                </SaveButton>
            </SettingsCard>
            <EditModal
                isVisible={editModal}
                FIRST_MODAL_HEADER={textHeaders.TITLES.FIRST_MODAL_HEADER}
                allCategories={categories}
                addModal={addModal}
                editCategoryModal={editCategoryModal}
                ADD_HOURS_BUTTON={textHeaders.BUTTONS.ADD_HOURS}
                EDIT_CATEGORY_BUTTON={textHeaders.BUTTONS.EDIT_CATEGORIES}
                CHANGE_ACTIVE={textHeaders.TITLES.CHANGE_ACTIVE}
                CHANGE_ACTIVE_SUBTITLE={
                    textHeaders.TITLES.CHANGE_ACTIVE_SUBTITLE
                }
                SET_ACTIVE_BUTTON={textHeaders.BUTTONS.SET_ACTIVE}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <EditCategoryModal
                isVisible={editCategoryModal}
                thirdModalHeader={textHeaders.TITLES.THIRD_MODAL_HEADER}
                CANNOT_ADD_EMPTY={textHeaders.ERRORS.CANNOT_ADD_EMPTY}
                CATEGORY_EXISTS={textHeaders.ERRORS.CATEGORY_EXISTS}
                ALL_CATEGORIES={textHeaders.TITLES.ALL_CATEGORIES}
                ADD_CATEGORIES_SUBTITLE={
                    textHeaders.TITLES.ALL_CATEGORIES_SUBTITLE
                }
                CANNOT_DELETE_ACTIVE={
                    textHeaders.ERRORS.CANNOT_DELETE_ACTIVE_CATEGORY
                }
                ADD_CATEGORY_BUTTON={textHeaders.BUTTONS.ADD_CATEGORY}
                yesButtonLabel={textHeaders.BUTTONS.YES}
                noButtonLabel={textHeaders.BUTTONS.NO}
                allCategories={categories}
                setFieldValue={setFieldValue}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <CreateHoursModal
                isVisible={addModal}
                MODAL_HEADER={textHeaders.TITLES.SECOND_MODAL_HEADER}
                SELECT_A_DAY_TITLE={textHeaders.TITLES.SELECT_A_DAY}
                SELECT_A_CATEGORY={textHeaders.TITLES.SELECT_A_CATEGORY}
                ADD_HOURS_BUTTON={textHeaders.BUTTONS.ADD_HOURS}
                allCategories={categories}
                activeCategory={activeCategory}
                handleStoreHoursUpdate={handleStoreHoursUpdate}
            />
            <ConfirmModal
                isVisible={[confirmModal, setConfirmModalState]}
                confirmDelete={textHeaders.TITLES.RESET_FORM}
                yesButtonLabel={textHeaders.BUTTONS.YES}
                noButtonLabel={textHeaders.BUTTONS.NO}
                onConfirm={confirmFormReset}
            />
            {/** TODO: Error message */}
            <ErrorModal modalState={errorModal} errorMessage='Are you sure you want to reset' />
        </>
    );
};

const ButtonsContainer = styled.div`
    ${Mixins.flex('center')};
    ${Mixins.media(
        'phone',
        `
        ${Mixins.flex('column')};  
    `,
    )}
`;
const Section = styled.div`
    margin: 5px;
`;
const StyledHeading = styled(Heading)`
    font-weight: bold;
    flex-wrap: wrap;
    text-align: center;
    margin: 10px;
`;
