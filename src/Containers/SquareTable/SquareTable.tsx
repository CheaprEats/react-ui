/**
 * Documentation – the order of chairs are in the chairs array will populate the table from top left to the bottom right
 * “the purpose of the order in the array is to populate the chairs from top left to bottom right”
 */
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { IChair } from '../Chair';
import { ChairRow } from './_ChairRow';

type Position = 'top' | 'bottom' | 'left' | 'right';

type occupancyStatusTypes = 'Vacant' | 'Reserved' | 'Occupied';

type getSquareTableSizeType = (
    top: number,
    bottom: number,
    left: number,
    right: number,
) => number;

type getRectangleTopType = (top: number, bottom: number) => number;

type getRectangleSideType = (left: number, right: number) => number;

type getOccupancyColorType = () => string;

type fillArrayType = (
    array: Array<IChair>,
    targetSize: number,
    position: Position,
) => void;

export interface ISquareTable {
    /**
     * The unique identifier for the table
     */
    tableID: string;
    /**
     * The name of the party assigned to the table
     */
    partyName: string;
    /**
     * The occupancy status for the table
     */
    occupancyStatus: occupancyStatusTypes;
    /**
     * Array of chairs
     */
    chairs: Array<IChair>;
    /**
     * Whether the table is a square
     */
    isSquare: boolean;
    /**
     * The size for the component relative to the parent
     */
    relativeSize: number;
}

/**
 * Primary UI component for user interaction
 * Square Table
 */
export const SquareTable: React.FC<ISquareTable> = ({
    tableID = 'T1',
    partyName = 'Null',
    occupancyStatus = 'Vacant',
    chairs = [],
    relativeSize = 1.0,
    isSquare = false,
    ...props
}) => {
    /**
     * Split chairs array into four arrays for each table side
     */
    const topArray = chairs.filter((i) => i.position === 'top');
    const rightArray = chairs.filter((i) => i.position === 'right');
    const leftArray = chairs.filter((i) => i.position === 'left');
    const bottomArray = chairs.filter((i) => i.position === 'bottom');

    /**
     * Get proper theme color for the table
     */
    const { colors } = useTheme();

    /**
     * Determines how many chairs to put per each side
     * of a square table (left, right, top, bottom)
     * @param top {number} - Number of chairs on top side
     * @param bottom {number} - Number of chairs on bottom side
     * @param left {number} - Number of chairs on left side
     * @param right {number} - Number of chairs on right side
     * @return {number} - The largest number of chairs
     */
    const getSquareTableSize: getSquareTableSizeType = (
        top,
        bottom,
        left,
        right,
    ) => {
        const maxSideValue = Math.max(top, bottom, left, right);
        return maxSideValue > 0 ? maxSideValue : 1;
    };

    const squareTableSize = getSquareTableSize(
        topArray.length,
        bottomArray.length,
        leftArray.length,
        rightArray.length,
    );

    /**
     * Determines how many chairs to put on the top and bottom sides
     * of a rectangle table (top, bottom)
     * @param top {number} - Number of chairs on top side
     * @param bottom {number} - Number of chairs on bottom side
     * @return {number} - The largest number of chairs
     */
    const getRectangleTopSize: getRectangleTopType = (top, bottom) => {
        const maxSideValue = Math.max(top, bottom);
        return maxSideValue > 0 ? maxSideValue : 1;
    };

    const rectangleTopSize = getRectangleTopSize(
        topArray.length,
        bottomArray.length,
    );

    /**
     * Determines how many chairs to put on the left and right sides
     * of a rectangle table (left, right)
     * @param left {number} - Number of chairs on left side
     * @param right {number} - Number of chairs on right side
     * @return {number} - The largest number of chairs
     */
    const getRectangleSideSize: getRectangleSideType = (left, right) => {
        const maxSideValue = Math.max(left, right);
        return maxSideValue > 0 ? maxSideValue : 1;
    };

    const rectangleSideSize = getRectangleSideSize(
        leftArray.length,
        rightArray.length,
    );

    /**
     * Checks an array to see if it has fewer chairs than the target size
     * and adds invisible chairs if needed so array size matches target size
     */
    const fillArray: fillArrayType = (array, size, position) => {
        while (array.length < size) {
            array.push({
                position,
                isSeated: false,
                occupiedBy: '',
                isVisible: false,
                relativeSize,
            });
        }
    };

    // Add empty/invisible chairs to the arrays as needed so there are chairs at each
    // spot on the table
    if (isSquare) {
        fillArray(topArray, squareTableSize, 'top');
        fillArray(bottomArray, squareTableSize, 'bottom');
        fillArray(leftArray, squareTableSize, 'left');
        fillArray(rightArray, squareTableSize, 'right');
    } else {
        fillArray(topArray, rectangleTopSize, 'top');
        fillArray(bottomArray, rectangleTopSize, 'bottom');
        fillArray(leftArray, rectangleSideSize, 'left');
        fillArray(rightArray, rectangleSideSize, 'right');
    }

    /**
     * Determines the correct color for Status and ColorDiv based on occupancyStatus
     * and returns the hexadecimal color value as a string
     *
     * @return {string} - Hexadecimal color value
     */
    const getOccupancyColor: getOccupancyColorType = () => {
        switch (occupancyStatus) {
            case 'Vacant':
                return colors.occupancyStatusColors.Vacant;

            case 'Reserved':
                return colors.occupancyStatusColors.Reserved;

            case 'Occupied':
                return colors.occupancyStatusColors.Occupied;

            default:
                return '';
        }
    };

    return (
        <div {...props}>
            {/** chairs top */}
            <ChairRow
                position="top"
                chairs={topArray}
                relativeSize={relativeSize}
            />

            {/** table itself */}
            <div>
                <Row relativeSize={relativeSize}>
                    {/** chairs left */}
                    <ChairRow
                        relativeSize={relativeSize}
                        position="left"
                        chairs={leftArray}
                    />

                    <TableBody
                        relativeSize={relativeSize}
                        chairNumOnSide={
                            isSquare ? squareTableSize : rectangleSideSize
                        }
                        chairNumOnTop={
                            isSquare ? squareTableSize : rectangleTopSize
                        }
                    >
                        <Row relativeSize={relativeSize}>
                            <TableInfo relativeSize={relativeSize}>
                                <div>
                                    {`${tableID}\n${partyName}`}
                                    <Status
                                        occupancyColor={getOccupancyColor()}
                                    >
                                        {occupancyStatus}
                                    </Status>
                                </div>
                            </TableInfo>
                            <ColorDiv
                                relativeSize={relativeSize}
                                chairNumOnSide={
                                    isSquare
                                        ? squareTableSize
                                        : rectangleSideSize
                                }
                                occupancyColor={getOccupancyColor()}
                            />
                        </Row>
                    </TableBody>

                    {/** chairs right */}
                    <ChairRow
                        relativeSize={relativeSize}
                        position="right"
                        chairs={rightArray}
                    />
                </Row>
            </div>

            {/** chairs bottom */}
            <ChairRow
                relativeSize={relativeSize}
                position="bottom"
                chairs={bottomArray}
            />
        </div>
    );
};

/**
 * variables for the styled components
 */

interface ITableBody {
    chairNumOnSide: number;
    chairNumOnTop: number;
    relativeSize: number;
}

const TableBody = styled.div<ITableBody>`
    height: ${({ chairNumOnSide, relativeSize }) =>
        chairNumOnSide * 20 * relativeSize}rem;
    width: ${({ chairNumOnTop, relativeSize }) =>
        chairNumOnTop * 20 * relativeSize}rem;
    border-radius: ${({ relativeSize }) => 3 * relativeSize}rem;
    background-color: #6c757d;
`;

interface IColorDiv {
    chairNumOnSide: number;
    occupancyColor: string;
    relativeSize: number;
}

const ColorDiv = styled.div<IColorDiv>`
    height: ${({ chairNumOnSide, relativeSize }) =>
        chairNumOnSide * 20 * relativeSize}rem;
    width: ${({ relativeSize }) => 3 * relativeSize}rem;
    margin-left: auto;
    margin-right: ${({ relativeSize }) => 0.95 * relativeSize}rem;
    border-top-right-radius: ${({ relativeSize }) => 3 * relativeSize}rem;
    border-bottom-right-radius: ${({ relativeSize }) => 3 * relativeSize}rem;
    background-color: ${({ occupancyColor }) => occupancyColor};
`;

interface IRow {
    relativeSize: number;
}

const Row = styled.div<IRow>`
    display: flex;
    flex-wrap: wrap;
    margin-right: ${({ relativeSize }) => -15 * relativeSize}px;
    margin-left: ${({ relativeSize }) => -15 * relativeSize}px;
`;

interface ITableInfo {
    relativeSize: number;
}

const TableInfo = styled.div<ITableInfo>`
    color: ${({ theme }) => theme.colors.background};
    font-weight: bold;
    margin-top: ${({ relativeSize }) => 2 * relativeSize}rem;
    margin-left: ${({ relativeSize }) => 3 * relativeSize}rem;
    white-space: pre-line;
`;

interface IStatus {
    occupancyColor: string;
}

const Status = styled.div<IStatus>`
    color: ${({ occupancyColor }) => occupancyColor};
`;
