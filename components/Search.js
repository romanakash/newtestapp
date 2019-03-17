import React, { Component, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';

class Search extends Component {
    state = {
        searchTerm: ''
    };

    updateSearch = txt => {
        this.setState({ searchTerm: txt });
    };

    onSubmit = () => {};

    render() {
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
                </View>
            </View>
        );
    }
}

export default Search;
