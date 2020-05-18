import React, { useState } from 'react';
import styled from 'styled-components';
import { InfoCircle } from 'styled-icons/fa-solid/InfoCircle';
import { Wrench } from 'styled-icons/fa-solid/Wrench';
import { Book } from 'styled-icons/fa-solid/Book';
import { QuestionCircle } from 'styled-icons/fa-solid/QuestionCircle';
import { MainInterface, ResponsiveInterface } from '../../Utils/BaseStyles';
import { Mixins } from '../../Utils';
import { Heading, Paragraph } from '../../Text';
import { SettingsCard } from '../SettingsCard';
import { Button } from '../../Inputs/Button';
import { Modal } from '../Modal';
import { Copyright } from '../Copyright';

export interface InfoProps
    extends React.HTMLAttributes<HTMLDivElement>,
        MainInterface,
        ResponsiveInterface {
    faqName: string;
    faqLink: string;
    version: string | number;
}

export const InfoCard: React.FC<InfoProps> = ({
    faqName,
    faqLink,
    version,
}) => {
    const state = useState(false);
    return (
        <SettingsCard heading="Additional Information" icon={InfoCircle}>
            <Buttons>
                <Button
                    margin="5px"
                    icon={Book}
                    onClick={() =>
                        window.open(
                            'https://legal.cheapreats.com/privacy-policy.html',
                            '_blank',
                        )
                    }
                >
                    Privacy Policy
                </Button>
                <Button
                    margin="5px"
                    icon={Wrench}
                    onClick={() => state[1](true)}
                >
                    Technical Support
                </Button>
                <Button
                    margin="5px"
                    icon={QuestionCircle}
                    onClick={() => window.open(faqLink, '_blank')}
                >
                    {faqName}
                </Button>
            </Buttons>
            <Copyright margin="auto 0 0" version={version} />

            <Modal padding="25px 35px" state={state} width="small">
                <Heading type="h3" margin="0 0 10px" bold>
                    Technical Support
                </Heading>
                <Paragraph bold>
                    {'For non-emergency inquiries, shoot us an email at '}
                    <a href="mailto:support@cheapreats.com">
                        support@cheapreats.com
                    </a>
                    .
                </Paragraph>
                <Paragraph margin="15px 0" bold>
                    {'If you require immediate assistance, please call/text: '}
                    <a href="tel:13063411035">+1 (306) 341-1035</a>
                </Paragraph>
                <Button onClick={() => state[1](false)}>Close</Button>
            </Modal>
        </SettingsCard>
    );
};
const Buttons = styled.div`
    ${Mixins.flex()}
    margin: 0 -5px 10px;
    flex-wrap: wrap;
`;
