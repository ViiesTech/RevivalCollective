import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AuthLayout from '../../../components/AuthLayout';
import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';
import SvgIcon from '../../../components/SvgIcon';
import { AppColors } from '../../../config/Colors';
import { AppIcons } from '../../../config/Icons';
import { responsiveFontSize } from '../../../globalFunctions/Resposive_Dimensions';
import styles from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <AuthLayout
      title="Login Account"
      titleAlign="center"
      titleSize={3.4}
      scrollable
      footer={
        <View style={styles.bottomRow}>
          <Text style={styles.bottomMuted}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            activeOpacity={0.7}
          >
            <Text style={styles.bottomLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      }
    >
      <CustomInput
        label="Email/ Phone number"
        placeholder="Example@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomInput
        label="Password"
        placeholder="••••••••"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Remember Me + Forgot Password */}
      <View style={styles.rememberForgotRow}>
        <TouchableOpacity
          style={styles.rememberRow}
          onPress={() => setRemember(r => !r)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, remember && styles.checkboxChecked]}>
            {remember && (
              <FeatherIcon
                name="check"
                size={responsiveFontSize(1.5)}
                color={AppColors.darkBg}
              />
            )}
          </View>
          <Text style={styles.rememberText}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          activeOpacity={0.7}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Login"
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] }),
          )
        }
        style={styles.loginBtn}
      />

      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>Or Sign In with:</Text>
        <View style={styles.dividerLine} />
      </View>

      <Button
        title="Continue with Google"
        variant="social"
        onPress={() => {}}
        leftIcon={
          <SvgIcon
            icon={AppIcons.google}
            width={responsiveFontSize(2.3)}
            height={responsiveFontSize(2.3)}
          />
        }
        textColor={AppColors.googleTxt}
        style={[styles.socialBtn, { backgroundColor: AppColors.white }]}
      />

      <Button
        title="Continue with Apple"
        variant="social"
        onPress={() => {}}
        leftIcon={
          <FontAwesome
            name="apple"
            size={responsiveFontSize(2.7)}
            color={AppColors.white}
          />
        }
        textColor={AppColors.white}
        style={styles.socialBtn}
      />
    </AuthLayout>
  );
};

export default Login;
