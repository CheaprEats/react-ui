import React                                          from 'react';
import styled, {css}                                  from 'styled-components';
import PropTypes                                      from 'prop-types';
import {PRIMARY_COLOUR, PRIMARY_FONT} from "../variables";
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'w3-css/w3.css';


const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
height:500px;
width:500px;
margin: 40px;
background-color: #0a0a5b;
color:white;
`;


const CircleContainer = styled.div`
padding: 15px;
float: right;
display: inline-block;
width: 130px;
height:130px;
`

const HeadingOneStyled = styled.h1`
    font-family: ${PRIMARY_FONT};
    width: 300px;
    margin-top: 30px;
    margin-left:30px;
    font-weight: "bold";
    display: inline-block;
`;
const HeadingThreeStyled = styled.h3`
    font-family: ${PRIMARY_FONT};
    width: 300px;
    margin-left:30px;
    margin-top:0px
    font-weight: "normal";
    display: inline-block;
`;

const style = {
    path: {
        stroke: PRIMARY_COLOUR,
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
        },
        // Customize the circle behind the path, i.e. the "total progress"
    trail: {
        // Trail color
        stroke: '#d6d6d6',
        },
        // Customize the text
    text: {
        // Text color
        fill: PRIMARY_COLOUR,
        // Text size
        fontSize: '16px',
        // Text font
        fontFamily: PRIMARY_FONT
        },
}


export const SimpleCard = ({
    percentage
}) => {
    return (
        
            <Card>
                <div class="w3-container w3-animate-top" style={{animationDuration: '5s'}}>
                <HeadingOneStyled>Hello</HeadingOneStyled>
                <CircleContainer>
                    <CircularProgressbar
                            percentage={percentage}
                            text={`${percentage} mins`}
                            styles={style}
                    />
                </CircleContainer>
                <HeadingThreeStyled>Here is some content</HeadingThreeStyled>
                </div>
                <div class="w3-container w3-animate-top" style={{animationDuration: '5s'}}>
                <HeadingOneStyled>Hello again</HeadingOneStyled>
                <HeadingThreeStyled>Some more content</HeadingThreeStyled>
                </div>
            </Card>
       
        
       
    );
}

SimpleCard.propTypes = {
    percentage: PropTypes.string
};
