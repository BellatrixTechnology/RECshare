import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';


const Loading = ({ isVisible, }) => {
    return (<Modal isVisible={isVisible}
        backdropOpacity={0.70}
    >
        <View style={styles.loginModalContainer}>
            <ActivityIndicator size='large' />
        </View>
    </Modal>)
};
const AlertCancel = ({ isVisible, onBackdropPress, onBackButtonPress, onPressYes, onPressNo }) => {
    return (<Modal isVisible={isVisible}
        onBackdropPress={onBackdropPress} onBackButtonPress={onBackButtonPress} backdropOpacity={0.70}>
        <View style={styles.alertModalCancelContainer}>
            <View style={styles.cancelContainer}>
                <Text style={styles.headingText}>Are you sure?</Text>
                <View style={styles.mainOpacityView}>
                    <TouchableOpacity onPress={onPressNo}
                        style={styles.noButton} >
                        <Text style={styles.noText}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressYes}
                        style={styles.yesButton}>
                        <Text style={styles.yesText}>Yes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal >)
};


export { Loading, AlertCancel, }