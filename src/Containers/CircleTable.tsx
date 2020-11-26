import React from 'react';
import styled, { useTheme } from 'styled-components';

export interface ICircleTable {
    /**
     * The unique identifier for the table
     */
    tableID: string;
    /**
     * The number of chairs at the table
     */
    numOfChairs?: number;
    /**
     * The name of the party assigned to the table
     */
    partyName: string;
    /**
     * The occupancy status for the table
     */
    occupancyStatus: occupancyStatusTypes;
    /**
     * The seating/reservation time for the party at the table
     */
    reservationTime?: Date;
}

enum occupancyStatusTypes {
    Vacant = 'Vacant',
    Reserved = 'Reserved',
    Occupied = 'Occupied',
}

/**
 * Primary UI component for user interaction
 */
export const CircleTable: React.FC<ICircleTable> = ({
    tableID = 'T1',
    partyName = 'Null',
    occupancyStatus = occupancyStatusTypes.Vacant,
    ...props
}) => {
    const { colors } = useTheme();

    /**
     * This function will determine what color should be the Status and ColorDiv
     * and return hexadecimal color value
     *
     * @return {string} - Hexadecimal color value
     */
    function getOccupancyColor(): string {
        switch (occupancyStatus) {
            case occupancyStatusTypes.Vacant:
                return colors.occupancyStatusColors.Vacant;

            case occupancyStatusTypes.Reserved:
                return colors.occupancyStatusColors.Reserved;

            case occupancyStatusTypes.Occupied:
                return colors.occupancyStatusColors.Occupied;

            default:
                return '';
        }
    }

    return (
        <>
            <TableBody {...props}>
                <RowMargin0>
                    <Col6P0>
                        <RowM0H25 />
                        <RowM0H25 />
                        <RowM0H25>
                            <Col6MxAutoMt5>
                                <TextWhiteDiv>{tableID}</TextWhiteDiv>
                                <TextWhiteDiv>{partyName}</TextWhiteDiv>
                                <TextOccupancyColor
                                    occupancyColor={getOccupancyColor()}
                                >
                                    {occupancyStatus}
                                </TextOccupancyColor>
                            </Col6MxAutoMt5>
                        </RowM0H25>
                    </Col6P0>
                    <Col4P0 />
                </RowMargin0>
            </TableBody>
        </>
    );
};

/**
 * variables for the styled components
 */
const TableBody = styled.div`
    height: 22em;
    width: 22em;
    background-color: #bbb;
    border-radius: 50%;
    border-style: solid;
    border-color: black;
    border-width: 3px;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 15px;
    margin-left: 15px;
`;

const RowMargin0 = styled(Row)`
    margin: 0;
`;

const RowM0H25 = styled(RowMargin0)`
    height: 25%;
`;

const Col = styled.div`
    position: relative;
    width: 100%;
`;

const Col4P0 = styled(Col)`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
`;

const Col6P0 = styled(Col)`
    flex: 0 0 50%;
    max-width: 50%;
`;

const Col6MxAutoMt5 = styled(Col6P0)`
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
`;

const TextWhiteDiv = styled.div`
    color: #fff;
`;

interface ITextOccupancyColor {
    occupancyColor: string;
}

const TextOccupancyColor = styled.div<ITextOccupancyColor>`
    color: ${({ occupancyColor }) => occupancyColor};
`;
