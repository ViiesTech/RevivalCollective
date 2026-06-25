import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AuthLayout from '../../../components/AuthLayout';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import { AppColors } from '../../../config/Colors';
import { responsiveFontSize } from '../../../globalFunctions/Resposive_Dimensions';
import styles from './styles';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <AuthLayout
      title="Create Account"
      titleAlign="center"
      titleSize={3.4}
      scrollable
      footer={
        <View style={styles.bottomRow}>
          <Text style={styles.bottomMuted}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.7}>
            <Text style={styles.bottomLink}>Login</Text>
          </TouchableOpacity>
        </View>
      }>
      <CustomInput
        label="Email"
        placeholder="jacob.jones64@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomInput
        label="Password"
        placeholder="••••••••••••"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomInput
        label="Confirm Password"
        placeholder="••••••••••••"
        value={confirmPass}
        onChangeText={setConfirmPass}
        secureTextEntry
      />

      <Button title="Sign Up" onPress={() => {}} style={styles.signUpBtn} />

      <TouchableOpacity
        style={styles.termsRow}
        onPress={() => setAgreed(a => !a)}
        activeOpacity={0.7}>
        <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
          {agreed && (
            <FeatherIcon
              name="check"
              size={responsiveFontSize(1.5)}
              color={AppColors.darkBg}
            />
          )}
        </View>
        <Text style={styles.terms}>
          By signing up, you agree to Terms of Use and Privacy Policy. By
          providing your email, you consent to receive communications from
          Revival Collective. You can opt out anytime.
        </Text>
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Register;
