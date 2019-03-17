import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Heading, Title, Subtitle, Caption, Text, Icon } from '@shoutem/ui';

import {
    createMaterialTopTabNavigator,
    createAppContainer
} from 'react-navigation';

const Overview = ({ screenProps }) => {
    const { profile } = screenProps;
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
            <Descripton description={profile.description} />
            <Pitch pitch={profile.pitch} />
            <Interests interests={profile.interests} />
        </View>
    );
};

const Info = ({ screenProps }) => {
    const { profile } = screenProps;
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <BioInfo bioInfo={profile.bioInfo} />
        </View>
    );
};

const Contact = ({ screenProps }) => {
    const { profile } = screenProps;
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
            <View
                style={{
                    justifyContent: 'space-around',
                    height: 170,
                    margin: 10,
                    borderRadius: 10,
                    padding: 20,
                    backgroundColor: 'white'
                }}
            >
                <Title styleName="md-gutter-bottom">Email</Title>
                <Text styleName="md-gutter-bottom">
                    dannydevito@dannydevito.com
                </Text>
                <Title styleName="md-gutter-bottom">Phone</Title>
                <Text styleName="md-gutter-bottom">299792458</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Icon
                        style={{ fontSize: 40, marginRight: 10 }}
                        name="facebook"
                    />
                    <Icon
                        style={{ fontSize: 40, marginRight: 10 }}
                        name="tweet"
                    />
                    <Icon
                        style={{ fontSize: 40, marginRight: 10 }}
                        name="linkedin"
                    />
                    <Icon
                        style={{ fontSize: 40, marginRight: 10 }}
                        name="instagram"
                    />
                </View>
            </View>
        </View>
    );
};

const TabNav = createAppContainer(
    createMaterialTopTabNavigator(
        {
            Overview: Overview,
            Info: Info,
            Contact: Contact
        },
        {
            tabBarOptions: {
                upperCaseLabel: false,
                style: {
                    backgroundColor: 'transparent',
                    elevation: 0
                },
                labelStyle: {
                    color: 'black',
                    fontFamily: 'Rubik-Medium',
                    fontSize: 15
                },
                indicatorStyle: {
                    backgroundColor: 'black'
                }
            }
        }
    )
);

import profile1 from '../constants/Profile1';

export class Profile extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ marginTop: 30 }}>
                <View style={{ height: 280, alignItems: 'center' }}>
                    <ProfileImage uri={profile1.profileImage} />
                    <Details details={profile1.details} />
                </View>
                <View style={{ height: 800 }}>
                    <TabNav screenProps={{ profile: profile1 }} />
                </View>
            </ScrollView>
        );
    }
}

const ProfileImage = ({ uri }) => {
    const imageSize = 125;
    return (
        <Image
            style={{
                height: imageSize,
                width: imageSize,
                margin: 30,
                borderRadius: imageSize / 2
            }}
            source={{ uri }}
        />
    );
};

const Details = ({ details }) => (
    <View>
        <Heading style={{ fontSize: 25, textAlign: 'center' }}>
            {details.name}
        </Heading>
        <Subtitle style={{ fontSize: 15, textAlign: 'center' }}>
            {details.age}
        </Subtitle>
        <Caption style={{ fontSize: 15, textAlign: 'center' }}>
            {details.location}
        </Caption>
    </View>
);

const Descripton = ({ description }) => {
    return (
        <View
            style={{
                justifyContent: 'space-around',
                height: 170,
                margin: 10,
                borderRadius: 10,
                padding: 20,
                backgroundColor: 'white'
            }}
        >
            <Title styleName="md-gutter-bottom">About me</Title>
            <View>
                <Text styleName="md-gutter-bottom">{description}</Text>
            </View>
            <TouchableOpacity
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderWidth: 1,
                    marginTop: 15,
                    padding: 5,
                    marginLeft: 80,
                    marginRight: 80,
                    borderRadius: 20
                }}
            >
                <Subtitle>Read more</Subtitle>
            </TouchableOpacity>
        </View>
    );
};

const Pitch = ({ pitch }) => {
    return (
        <View
            style={{
                justifyContent: 'space-around',
                height: 170,
                margin: 10,
                borderRadius: 10,
                padding: 20,
                backgroundColor: 'white'
            }}
        >
            <Title styleName="md-gutter-bottom">Idea</Title>
            <View>
                <Text styleName="md-gutter-bottom">{pitch}</Text>
            </View>
            <TouchableOpacity
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderWidth: 1,
                    marginTop: 15,
                    padding: 5,
                    marginLeft: 80,
                    marginRight: 80,
                    borderRadius: 20
                }}
            >
                <Subtitle>Read more</Subtitle>
            </TouchableOpacity>
        </View>
    );
};

const Interests = ({ interests }) => {
    return (
        <View
            style={{
                justifyContent: 'space-around',
                height: 120,
                margin: 10,
                borderRadius: 10,
                padding: 20,
                backgroundColor: 'white'
            }}
        >
            <Title styleName="sm-gutter-bottom">Interests</Title>
            <View style={{ flexDirection: 'row' }}>
                {interests.map(i => (
                    <View
                        key={i}
                        style={{
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            padding: 5,
                            marginRight: 10,
                            borderRadius: 20,
                            backgroundColor: 'lightgray'
                        }}
                    >
                        <Text style={{ color: 'gray' }}>{i}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const Experience = ({ experience }) => {
    return (
        <View
            style={{
                justifyContent: 'space-around',
                height: 170,
                margin: 10,
                borderRadius: 10,
                padding: 20,
                backgroundColor: 'white'
            }}
        >
            <Title styleName="md-gutter-bottom">Work Experience</Title>
            <View>
                <Subtitle>
                    {experience.position} at {experience.company}
                </Subtitle>
                <Text>{experience.years}</Text>
            </View>
            <TouchableOpacity
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderWidth: 1,
                    marginTop: 15,
                    padding: 5,
                    marginLeft: 80,
                    marginRight: 80,
                    borderRadius: 20
                }}
            >
                <Subtitle>View All</Subtitle>
            </TouchableOpacity>
        </View>
    );
};

const Education = ({ education }) => {
    return (
        <View
            style={{
                justifyContent: 'space-around',
                height: 170,
                margin: 10,
                borderRadius: 10,
                padding: 20,
                backgroundColor: 'white'
            }}
        >
            <Title styleName="md-gutter-bottom">Education</Title>
            <View>
                <Subtitle>{education.name}</Subtitle>
                <Text>{education.instituition}</Text>
                <Caption>{education.years}</Caption>
            </View>
            <TouchableOpacity
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderWidth: 1,
                    marginTop: 15,
                    padding: 5,
                    marginLeft: 80,
                    marginRight: 80,
                    borderRadius: 20
                }}
            >
                <Subtitle>View All</Subtitle>
            </TouchableOpacity>
        </View>
    );
};

const BioInfo = ({ bioInfo }) => {
    return (
        <View
            style={{
                justifyContent: 'space-around',
                height: 270,
                margin: 10,
                borderRadius: 10,
                padding: 20,
                backgroundColor: 'white'
            }}
        >
            <Title styleName="md-gutter-bottom">Other Info</Title>
            <View>
                <Subtitle>Gender</Subtitle>
                <Text>{bioInfo.gender}</Text>
                <Subtitle>Country of Origin</Subtitle>
                <Text>{bioInfo.coo}</Text>
                <Subtitle>Ethnicity</Subtitle>
                <Text>{bioInfo.ethnicity}</Text>
                <Subtitle>Religion</Subtitle>
                <Text>{bioInfo.religion}</Text>
            </View>
            <TouchableOpacity
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderWidth: 1,
                    marginTop: 15,
                    padding: 5,
                    marginLeft: 80,
                    marginRight: 80,
                    borderRadius: 20
                }}
            >
                <Subtitle>View All</Subtitle>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
