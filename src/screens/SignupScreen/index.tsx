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

const mapDispatch = ({user: {signup}}: Dispatch) => ({
  signup,
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = RootStackScreenProps<'Signup'> & StateProps & DispatchProps;

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
};

const SignupScreen: React.FC<Props> = ({navigation, signup}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<FormData>({reValidateMode: 'onChange'});

  const handleSignup = handleSubmit(data => {
    console.log('DATA', data);

    signup(data).then(
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
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Create your account.</Text>

        <Controller
          control={control}
          name="name"
          rules={{required: 'Name is required'}}
          render={({field: {onChange, value}}) => (
            <IconTextInput
              icon="person-outline"
              label="Name"
              error={errors.name?.message}
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Enter a valid email',
            },
          }}
          render={({field: {onChange, value}}) => (
            <IconTextInput
              icon="mail-outline"
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
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
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

        <Controller
          control={control}
          name="confirmPass"
          rules={{
            required: 'Confirm Password is required',
            validate: value =>
              value === watch('password') || 'Passwords do not match',
          }}
          render={({field: {onChange, value}}) => (
            <IconTextInput
              icon="lock-reset"
              label="Confirm Password"
              error={errors.confirmPass?.message}
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />

        <CustomButton
          text="Sign Up"
          onPress={handleSignup}
          style={styles.button}
        />

        <Text style={styles.signIn}>
          Already a user?{' '}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate('Login')}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default connect(mapState, mapDispatch)(SignupScreen);
