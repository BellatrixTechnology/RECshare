import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'

const component = ({ isVisible, }) => {
    return (<Modal isVisible={isVisible}
    >
        <View style={styles.loginModalContainer}>
            <ActivityIndicator size='large' color="#0000ff" />
        </View>
    </Modal>)
};
export default component;