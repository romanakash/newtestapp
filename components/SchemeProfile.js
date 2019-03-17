import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Heading, Title, Subtitle, Caption, Text, Icon } from '@shoutem/ui';

import schemes from '../constants/Schemes';

export class SchemeProfile extends Component {
    render() {
        let scheme;
        const { navigation } = this.props;
        if (navigation.params) {
            scheme = this.props.navigation.params.scheme;
        } else {
            scheme = schemes[0];
        }
        return (
            <View style={{ flex: 1, marginTop: 20 }}>
                <ScrollView style={{ flex: 0.9 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                            style={{ padding: 10 }}
                            name="md-arrow-back"
                            size={30}
                        />
                    </TouchableOpacity>
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={{ uri: scheme.coverImage }}
                    />
                    <View style={{ padding: 20 }}>
                        <Heading styleName="lg-gutter-bottom">
                            {scheme.name}
                        </Heading>
                        <Text>{scheme.description}</Text>
                        <Title styleName="md-gutter-top">Funding</Title>
                        <Text>{scheme.funding}</Text>
                        <Title styleName="md-gutter-top">Focusing on</Title>
                        <Subtitle>Gender</Subtitle>
                        <Text>{scheme.targets.gender}</Text>
                        <Subtitle>Language</Subtitle>
                        <Text>{scheme.targets.language}</Text>
                        <Subtitle>Age</Subtitle>
                        <Text>{scheme.targets.age}</Text>
                        <Subtitle>Country of origin</Subtitle>
                        <Text styleName="md-gutter-bottom">
                            {scheme.targets.coo}
                        </Text>
                    </View>
                </ScrollView>
                <View style={{ flex: 0.05, justifyContent: 'flex-end' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'lightgreen',
                            alignItems: 'center'
                        }}
                    >
                        <Caption style={{ fontSize: 20, padding: 10 }}>
                            Apply Now
                        </Caption>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SchemeProfile;
