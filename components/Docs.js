import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
    Heading,
    Title,
    Subtitle,
    Caption,
    Text,
    Icon,
    Image,
    TextInput
} from '@shoutem/ui';

export class Docs extends Component {
    /*
    state = {
        des: ''
    };
    onSubmit = async () => {
        const des = this.state.des;
        const url = `http://localhost:3333/post?des=${des}`;
        try {
            let res = await fetch(url);
            let resJson = await res.json();
            return resJson;
        } catch (err) {
            console.err(err);
        }
    };
    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <Heading style={{ margin: 20, textAlign: 'center' }}>
                    NLP Demo
                </Heading>
                <Title style={{ padding: 10 }}>Enter your Description</Title>
                <TextInput
                    style={{
                        minHeight: 150,
                        height: 'auto',
                        borderWidth: 1,
                        borderRadius: 5
                    }}
                    value={this.state.des}
                    editable={true}
                    numberOfLines={5}
                    multiline={true}
                    onChangeText={txt => this.setState({ des: txt })}
                    onSubmitEditing={this.onSubmit}
                />
            </View>
        );
    }
    */
    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <Heading style={{ margin: 20, textAlign: 'center' }}>
                    Resources
                </Heading>
                <View style={{ padding: 10 }}>
                    <View
                        style={{
                            height: 170,
                            margin: 10,
                            backgroundColor: 'white'
                        }}
                    >
                        <Title styleName="md-gutter-bottom">
                            Talk with an Experienced Professional
                        </Title>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                marginTop: 15,
                                padding: 10
                            }}
                        >
                            <View style={{ flex: 0.8 }}>
                                <Subtitle style={{ fontSize: 20 }}>
                                    Launch a chat service
                                </Subtitle>
                            </View>
                            <View style={{ flex: 0.2 }}>
                                <Icon style={{ fontSize: 30 }} name="comment" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                marginTop: 15,
                                padding: 10
                            }}
                        >
                            <View style={{ flex: 0.8 }}>
                                <Subtitle style={{ fontSize: 20 }}>
                                    Make a call
                                </Subtitle>
                            </View>
                            <View style={{ flex: 0.2 }}>
                                <Icon style={{ fontSize: 30 }} name="call" />
                            </View>
                        </TouchableOpacity>

                        <Title styleName="lg-gutter-top">References</Title>
                        <Caption>http://www.scottishlaw.org.uk/</Caption>
                        <Caption>
                            https://www2.gov.scot/Topics/Justice/law/damages/company
                        </Caption>
                        <Caption>https://www.investopedia.com/uk/</Caption>
                    </View>
                </View>
            </View>
        );
    }
}

export default Docs;
