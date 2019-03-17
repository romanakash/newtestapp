import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Heading, Subtitle, Caption } from '@shoutem/ui';

import schemes from '../constants/Schemes';

export class Home extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ marginTop: 20 }}>
                <View
                    style={{ justifyContent: 'center', alignContent: 'center' }}
                >
                    <ScrollView>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 20
                            }}
                        >
                            <Heading>Home</Heading>
                        </View>
                        {schemes.map(s => (
                            <SchemeCard
                                key={s.name}
                                scheme={s}
                                onPress={() =>
                                    navigation.navigate('SchemeProfile', {
                                        scheme: s
                                    })
                                }
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const SchemeCard = ({ scheme, onPress }) => {
    return (
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
};

export default Home;
