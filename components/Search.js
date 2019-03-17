import React, { Component, useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
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

import { Ionicons } from '@expo/vector-icons';

import schemes from '../constants/Schemes';

class Search extends Component {
    state = {
        searchTerm: '',
        searchResults: schemes
    };

    updateSearch = txt => {
        this.setState({ searchTerm: txt });
    };

    onSubmit = () => {
        const { searchTerm, searchResults } = this.state;
        const lower = searchTerm.toLowerCase();
        const results = schemes.map(scheme =>
            scheme.name.toLowerCase().includes(lower[1])
        );
        this.setState({ searchResults: results });
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ marginTop: 20 }}>
                <View style={{ margin: 10 }}>
                    <SearchBar
                        platform="android"
                        placeholder="Search for schemes..."
                        value={this.state.searchTerm}
                        onChangeText={this.updateSearch}
                        onSubmitEditing={this.onSubmit}
                        style={{ fontSize: 30 }}
                        icon={{ name: 'search' }}
                        clearIcon={{ name: 'close' }}
                    />
                    <FlatList
                        data={this.state.searchResults}
                        keyExtractor={(item, index) => item.name}
                        renderItem={({ item }) => (
                            <SchemeCard
                                scheme={item}
                                onPress={() =>
                                    navigation.navigate('SchemeProfile', {
                                        scheme: item
                                    })
                                }
                            />
                        )}
                    />
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

export default Search;
