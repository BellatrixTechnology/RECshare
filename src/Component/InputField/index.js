import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

const Component = ({
  placeholder,
  label,
  keyboardType,
  secureTextEntry,
  erroraddres,
  value,
  onChange,
  errorEmail,
  errorPassword,
  errConfirm,
  maxLength,
  errName,
  errUser,
  onBlur,
  containerStyle,
}) => {
  const EmailError = 'Enter Valid Email';
  const Password = 'The Value is too short, must be 8 digits';
  const newPassword = "Password doesn't match";
  const Name = 'Empty Field';

  return (
    <View style={styles.inputView}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.fieldInput}
        containerStyle={containerStyle}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChange}
        maxLength={maxLength}
        onBlur={onBlur}
      />
      {errorEmail && <Text style={styles.errorLabel}>{EmailError}</Text>}
      {errorPassword && <Text style={styles.errorLabel}>{Password}</Text>}
      {errConfirm && <Text style={styles.errorLabel}>{newPassword}</Text>}
      {errName && <Text style={styles.errorLabel}>{Name}</Text>}
      {errUser && <Text style={styles.errorLabel}>{Name}</Text>}
      {erroraddres && <Text style={styles.errorLabel}>{Name}</Text>}
    </View>
  );
};
export default Component;
