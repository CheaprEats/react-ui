import React from 'react';
import styled from 'styled-components';
import { Button } from '../../Inputs/Button/Button';
import { Card } from '../Card/Card';

export interface ILogoProps {
    listingTitle: string;
    titleSummary: string;
    buttonText: string;
    logoA: any;
    logoB: any;
    logoC: any;
    logoD: any;
    logoE: any;
}
export const ShowLogos: React.FC<ILogoProps> = ({
    listingTitle,
    titleSummary,
    buttonText,
    logoA,
    logoB,
    logoC,
    logoD,
    logoE
}) => {
    return (

        <Card>
            <GridContainer>
                <Section>
                    <TitleDiv> {listingTitle}</TitleDiv>
                    <SummaryDiv>{titleSummary}</SummaryDiv>
                    <Button primary> {buttonText} </Button>
                </Section>

                <Grid>
                    <ItemA><img src={logoA.url} width={logoA.width} /></ItemA>
                    <ItemB><img src={logoB.url} width={logoB.width} /></ItemB>
                    <ItemC><img src={logoC.url} width={logoC.width} /></ItemC>
                    <ItemD><img src={logoD.url} width={logoD.width} /></ItemD>
                    <ItemE><img src={logoE.url} width={logoE.width} /></ItemE>
                </Grid>
            </GridContainer>
        </Card>

    );
};
const Section = styled.div`
   padding: 10px;
   grid-column: 1/3;
   `;

const TitleDiv = styled.div`
   font-size: 25px;
   color: ${({ theme }) => theme.colors.text};
   font-weight: Bold;
   `;

const SummaryDiv = styled.div`
   font-weight: 500;
   color:${({ theme }) => theme.colors.chairTableBackground} ;
   padding-top: 25px;
   padding-bottom: 25px;
`;

const GridContainer = styled.main`
   display: grid;
   align-items: center;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   background-color:${({ theme }) => theme.colors.background};
  `;

const Grid = styled.div`
     display: grid;
     grid-template-columns: auto auto auto;
     grid-template-rows: auto auto auto;
     grid-gap: 5px 5px;
     `;

const ItemA = styled.div`
     grid-column: 1/2;
     grid-row: 1/span 2;
     padding: 30px 20px 30px 20px;
     align-self: end;
     border-radius: 8px;
     background-color:${({ theme }) => theme.colors.input.default}; 
    `;

const ItemB = styled.div`
     grid-column: 2/span 2;
     grid-row: 1/2;
     justify-self: start;
     width: 149px;
     border-radius: 8px;
     padding: 1rem 1rem .5rem 1rem;   
     background-color:${({ theme }) => theme.colors.input.default}; 
    `;
const ItemC = styled.div`
     grid-column: 2/3;
     grid-row: 2/3;
     border-radius: 8px;
     padding-left: 25px;
     padding-top: 12px;
     padding-right: 5px;
     background-color:${({ theme }) => theme.colors.input.default}; 
    `;
const ItemD = styled.div`
     grid-column: 3/4;
     grid-row: 2/3;
     justify-self: start;
     border-radius: 8px;
     padding: 1.25rem;   
     background-color:${({ theme }) => theme.colors.input.default}; 
    `;
const ItemE = styled.div`
     grid-column: 1/span 3;
     grid-row: 3/4;
     width: 205px;
     place-self: center;
     border-radius: 8px;
     background-color:${({ theme }) => theme.colors.input.default}; 
    `;


