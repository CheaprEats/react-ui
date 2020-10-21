import React from 'react';
import styled from 'styled-components';
import { AddUser } from '@styled-icons/entypo/AddUser';
import { flex } from '../Utils/Mixins';

const PROFILE_PICTURE_LIMIT = 3;
const PROFILE_INITIALS_START_INDEX = 2;
const PROFILE_INITIALS_END_INDEX = 5;
const REMAINING_PROFILES_INDEX = 5;
const MAX_PROFILES = 7;
const START_FROM_PROFILE_INDEX = 0;

export interface IProfile {
    image: string;
    initials: string;
    id: number;
}

export interface IFeaturedProfilesCardProps {
    profileData: IProfile[];
    alt: string;
    width?: number;
    height?: number;
}

export const FeaturedProfilesCard: React.FC<IFeaturedProfilesCardProps> = ({
    alt,
    profileData,
    width = 100,
    height = 100,
}): React.ReactElement => {
    const getProfileCircles = (): any => {
        const userProfilePicture = (profile: any): React.ReactElement => {
            return (
                <CircleImage background="none" key={profile.image}>
                    <img
                        src={profile.image}
                        alt={alt}
                        height={height}
                        width={width}
                    />
                </CircleImage>
            );
        };

        const userInitials = (profile: any): React.ReactElement => {
            return (
                <CircleImage background="orange">
                    <CircleContent>{profile.initials}</CircleContent>
                </CircleImage>
            );
        };

        const remainingUserProfiles = (): React.ReactElement => {
            const remaining_profiles_value = profileData.length - 5;

            return (
                <CircleImage background="grey">
                    <CircleContent>{remaining_profiles_value}</CircleContent>
                </CircleImage>
            );
        };

        const addUserIcon = (): React.ReactElement => {
            return (
                <CircleImage background="grey">
                    <Icon as={AddUser} />
                </CircleImage>
            );
        };

        return profileData
            .map(
                (profile, index): React.ReactElement => {
                    if (index < PROFILE_PICTURE_LIMIT) {
                        return userProfilePicture(profile);
                    }
                    if (
                        index > PROFILE_INITIALS_START_INDEX &&
                        index < PROFILE_INITIALS_END_INDEX
                    ) {
                        return userInitials(profile);
                    }
                    if (index === REMAINING_PROFILES_INDEX) {
                        return remainingUserProfiles();
                    }
                    return addUserIcon();
                },
            )
            .splice(START_FROM_PROFILE_INDEX, MAX_PROFILES);
    };

    return <Container>{getProfileCircles()}</Container>;
};

interface ICircleImageProps {
    background: string;
}

const CircleImage = styled.li<ICircleImageProps>`
    ${flex()}
    justify-content: center;
    align-items: center;
    border: solid white 3px;
    border-radius: 50%;
    object-fit: cover;
    overflow: auto;
    width: 100px;
    height: 100px;
    background: ${({ background }) => background || 'none'};

    :nth-child(1) {
        position: relative;
    }
    :nth-child(2) {
        margin-left: -2%;
    }
    :nth-child(3) {
        margin-left: -2%;
        z-index: -1;
    }
    :nth-child(4) {
        margin-left: -2%;
        z-index: -2;
    }
    :nth-child(n + 5) {
        margin-left: -2%;
        z-index: -3;
    }
`;

const CircleContent = styled.p`
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 24px;
`;

const Container = styled.ul`
    ${flex('row')}
    padding: 5px;
`;

const Icon = styled.svg`
    width: 35px;
    height: 35px;
`;
