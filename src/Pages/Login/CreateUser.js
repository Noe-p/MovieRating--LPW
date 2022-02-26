import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { appStyles } from '../../../assets/styles';
import { Input, Submit } from '../../components';
import { emailValidation } from '../../service';

const CreateUser = () => {
  const navigation = useNavigation();

  const [isCorrect, setIsCorrect] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const addUsers = () => {
    if (
      email === '' &&
      password === '' &&
      firstName === '' &&
      lastName === '' &&
      confirmPassword === ''
    ) {
      setIsCorrect(1);
    } else if (!emailValidation(email)) {
      setIsCorrect(2);
    } else if (password !== confirmPassword) {
      setIsCorrect(3);
    } else {
      navigation.navigate('Login', {
        addedEmail: email,
        addedPassword: password,
        addedFirstName: firstName,
        addedLastName: lastName,
      });
    }
  };

  useEffect(() => {
    switch (isCorrect) {
      case 0:
        setErrorMessage('');
        break;
      case 1:
        setErrorMessage('Veuillez compléter tout le formulaire');
        break;
      case 2:
        setErrorMessage('Email incorrecte');
        break;
      case 3:
        setErrorMessage('Les mots de passes ne sont pas identiques');
        break;
    }
  });

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: 'white',
      }}
    >
      <View style={styles.container}>
        <Text style={appStyles.title1}>Créer un compte</Text>
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

          <Submit label={'Créer un compte'} onPress={addUsers} />
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
    marginTop: 50,
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

export default CreateUser;
