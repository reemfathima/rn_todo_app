import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';

import CustomButton from '../../components/CustomButton';
import IconTextInput from '../../components/IconTextInput';
import {RootStackScreenProps} from '../../navigation/types';
import {Dispatch, RootState} from '../../redux/store';
import {styles} from './styles';

const mapState = ({user}: RootState) => ({
  user,
});

const mapDispatch = ({user: {loginAsync}}: Dispatch) => ({
  loginAsync,
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = RootStackScreenProps<'Login'> & StateProps & DispatchProps;

type FormData = {
  email: string;
  password: string;
};

const LoginScreen: React.FC<Props> = ({navigation, loginAsync}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({reValidateMode: 'onChange'});

  const handleLogin = handleSubmit(data => {
    console.log('DATA', data);

    loginAsync(data).then(
      ({status}) =>
        status === 'success' &&
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTabs'}],
        }),
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Welcome back!</Text>

        <Controller
          control={control}
          name="email"
          rules={{required: 'Email is required'}}
          render={({field: {onChange, value}}) => (
            <IconTextInput
              icon="email-outline"
              label="Email"
              error={errors.email?.message}
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{required: 'Password is required'}}
          render={({field: {onChange, value}}) => (
            <IconTextInput
              icon="lock-outline"
              label="Password"
              error={errors.password?.message}
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />

        <CustomButton
          text="Login"
          onPress={handleLogin}
          style={styles.button}
        />

        <Text style={styles.signIn}>
          Don't have a account?{' '}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate('Signup')}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default connect(mapState, mapDispatch)(LoginScreen);
