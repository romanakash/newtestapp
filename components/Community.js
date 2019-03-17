import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import {
    Heading,
    Title,
    Subtitle,
    Caption,
    Text,
    Icon,
    Image
} from '@shoutem/ui';

import schemes from '../constants/Schemes';

const details1 = {
    name: 'Elon Musk',
    profileImage:
        'data:image/jpeg;base64,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',
    followers: '30,245'
};

const details2 = {
    name: 'Neil D. Tyson',
    profileImage:
        'https://pbs.twimg.com/profile_images/74188698/NeilTysonOriginsA-Crop.jpg',
    followers: '45,673'
};

export class Community extends Component {
    render() {
        const { navigation } = this.props;
        const scheme1 = schemes[0];
        return (
            <View style={{ marginTop: 20 }}>
                <ScrollView>
                    <Heading style={{ margin: 20, textAlign: 'center' }}>
                        Community
                    </Heading>
                    <Title
                        styleName="md-gutter-bottom"
                        style={{ marginLeft: 10 }}
                    >
                        Follow other Entrepreneurs like you
                    </Title>
                    <View
                        style={{
                            height: 200,
                            flexDirection: 'row',
                            backgroundColor: 'lightgray'
                        }}
                    >
                        <Prof details={details1} />
                        <Prof details={details2} />
                    </View>
                    <View style={{ height: 1200 }}>
                        <Title
                            styleName="md-gutter-top"
                            style={{ marginLeft: 10 }}
                        >
                            Activity
                        </Title>
                        <View style={{ marginTop: 10 }}>
                            <Subtitle style={{ marginLeft: 20, color: 'gray' }}>
                                People who you follow are interested in
                            </Subtitle>
                            <Scheme
                                scheme={scheme1}
                                onPress={() =>
                                    navigation.navigate('SchemeProfile', {
                                        scheme: scheme1
                                    })
                                }
                            />
                        </View>
                        <Title
                            styleName="md-gutter-top"
                            style={{ marginLeft: 10 }}
                        >
                            Articles
                        </Title>
                        <View style={{ height: 500, marginTop: 10 }}>
                            <Subtitle style={{ marginLeft: 20, color: 'gray' }}>
                                Based on your location and interests
                            </Subtitle>
                            <Scheme
                                scheme={schemeb}
                                onPress={() =>
                                    navigation.navigate('SchemeProfile', {
                                        scheme: schemeb
                                    })
                                }
                            />
                            <Scheme
                                scheme={schemec}
                                onPress={() =>
                                    navigation.navigate('SchemeProfile', {
                                        scheme: schemeb
                                    })
                                }
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const schemeb = {
    name: 'How does Brexit affect business funding?',
    coverImage:
        'https://images.unsplash.com/photo-1547661533-69ef56d742f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    location: 'United Kingdom'
};

const schemec = {
    name:
        'Scottish universities unite to provide funding Opportunites for entrepreneurs',
    coverImage:
        'https://images.unsplash.com/photo-1522173043602-c9fe6047c3e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    location: 'United Kingdom'
};

const Prof = ({ details }) => {
    const imageSize = 100;
    return (
        <TouchableOpacity
            style={{
                flex: 0.5,
                padding: 20,
                margin: 10,
                backgroundColor: 'white',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Image
                styleName="md-gutter-bottom"
                style={{
                    height: imageSize,
                    width: imageSize,
                    borderRadius: imageSize / 2
                }}
                source={{
                    uri: details.profileImage
                }}
            />
            <Title style={{ fontSize: 15, marginTop: 5 }}>{details.name}</Title>
            <Caption>{details.followers} followers</Caption>
        </TouchableOpacity>
    );
};

const Scheme = ({ scheme, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            margin: 20,
            borderWidth: 0.5,
            borderColor: 'rgba(0,0,0,0.1)',
            borderRadius: 5
        }}
    >
        <Image
            style={{ height: 150, width: '100%' }}
            source={{ uri: scheme.coverImage }}
        />
        <View style={{ padding: 10 }}>
            <Subtitle style={{ fontSize: 20 }}>{scheme.name}</Subtitle>
            <Caption style={{ fontSize: 15 }}>{scheme.location}</Caption>
        </View>
    </TouchableOpacity>
);

export default Community;
