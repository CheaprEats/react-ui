import moment from 'moment';
import { ITimeTypes } from './constants';

const START_INDEX_OF_SELECTION = 0;
const END_INDEX_OF_SELECTION_DATE_TO_HOURS = -3;

/**
 * Toggles between 24 hours and 12 hour time (AM/PM)
 * @param {boolean} categoryName - Name of category user creates
 * @returns {React.ReactElement | null} -
 */
export const convertTime = (date: string, toggle: boolean): string => {
    let convertedDate = moment(date, 'HHmm').format('h:mm a');
    if (toggle) {
        convertedDate = moment(date, 'HHmm').format('HH:mm')
    }
    return convertedDate;
};

/**
 * Converts a date type to time string type (hour:minute)
 * @param {ITimeTypes} timeObj - Date type for added
 * @returns {ITimeTypes | null}
 */
export const convertDateToHours = (timeObj: ITimeTypes): ITimeTypes => {
    const parsedToDate = new Date(timeObj.to);
    const to = parsedToDate
        .toLocaleTimeString('it-IT')
        .slice(START_INDEX_OF_SELECTION, END_INDEX_OF_SELECTION_DATE_TO_HOURS);
    const parsedFromDate = new Date(timeObj.from);
    const from = parsedFromDate
        .toLocaleTimeString('it-IT')
        .slice(START_INDEX_OF_SELECTION, END_INDEX_OF_SELECTION_DATE_TO_HOURS);
    timeObj = {
        to,
        from,
    };
    return timeObj;
};
