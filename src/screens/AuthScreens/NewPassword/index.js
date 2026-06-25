import React, { useState } from 'react';
import AuthLayout from '../../../components/AuthLayout';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';

const NewPassword = ({ navigation }) => {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <AuthLayout
      showBack
      title="Enter New Password"
      subtitle="Please enter your new password to reset password"
      footer={
        <Button
          title="Continue"
          onPress={() => navigation.navigate('Login')}
        />
      }>
      <CustomInput
        label="Old Password"
        placeholder="••••••••"
        value={oldPass}
        onChangeText={setOldPass}
        secureTextEntry
      />
      <CustomInput
        label="Password"
        placeholder="••••••••"
        value={newPass}
        onChangeText={setNewPass}
        secureTextEntry
      />
      <CustomInput
        label="Re-Enter Password"
        placeholder="••••••••"
        value={confirmPass}
        onChangeText={setConfirmPass}
        secureTextEntry
      />
    </AuthLayout>
  );
};

export default NewPassword;
