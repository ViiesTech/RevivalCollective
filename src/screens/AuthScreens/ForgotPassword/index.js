import React, { useState } from 'react';
import AuthLayout from '../../../components/AuthLayout';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import styles from './styles';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <AuthLayout
      showBack
      title="Forgot Password"
      subtitle="Please enter your email to reset password"
      footer={
        <Button
          title="Continue"
          onPress={() => navigation.navigate('EnterOTP')}
        />
      }>
      <CustomInput
        label="Email/ Phone number"
        placeholder="Example@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
