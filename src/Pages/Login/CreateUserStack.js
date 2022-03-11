import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appStyles } from '../../../assets/styles';
import { Input, Submit } from '../../components';
import { emailValidation } from '../../service';

const CreateUserStack = () => {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Inscription' });

  const [errorMessage, setErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const addUsers = () => {
    if (
      email === '' ||
      password === '' ||
      firstName === '' ||
      lastName === '' ||
      confirmPassword === ''
    ) {
      setErrorMessage('Veuillez compléter tout le formulaire');
    } else if (!emailValidation(email)) {
      setErrorMessage('Email incorrecte');
    } else if (password !== confirmPassword) {
      setErrorMessage('Les mots de passes ne sont pas identiques');
    } else {
      navigation.navigate('Login', {
        addedEmail: email,
        addedPassword: password,
        addedFirstName: firstName,
        addedLastName: lastName,
      });
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: 'white',
      }}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            label={'Nom'}
            value={lastName}
            onChangeText={setLastName}
            placeholder='Saisissez votre nom'
          />
          <Input
            label={'Prénom'}
            value={firstName}
            onChangeText={setFirstName}
            placeholder='Saisissez votre prénom'
          />
          <Input
            label={'Email'}
            value={email}
            onChangeText={setEmail}
            placeholder='Saisissez votre email'
            keyboardType='email-address'
          />
          <Input
            secureTextEntry={true}
            label={'Mot de passe'}
            value={password}
            onChangeText={setPassword}
            placeholder='Saisissez votre mot de passe'
          />
          <Input
            secureTextEntry={true}
            label={'Confirmer le mot de passe'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder='Confirmer votre mot de passe'
          />
          <Text style={[styles.errorMessage, appStyles.text]}>
            {errorMessage}
          </Text>

          <Submit label={'Continuer'} onPress={addUsers} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    marginTop: 20,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  errorMessage: {
    marginTop: 15,
    color: '#D64045',
  },
  signInMessage: {
    marginTop: 20,
    color: 'grey',
    fontSize: 17,
  },
});

export default CreateUserStack;
