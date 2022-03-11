import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appStyles } from '../../../assets/styles';
import { Input, Submit } from '../../components';
import { emailValidation } from '../../service';

const ProfilTabs = (props) => {
  const [message, setMessage] = useState('');
  const [validMessage, setValidMessage] = useState(false);

  const [lastName, setLastName] = useState(props.user.lastName);
  const [firstName, setFirstName] = useState(props.user.firstName);
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);

  const updateUser = () => {
    setValidMessage(false);
    if (
      email === '' ||
      password === '' ||
      firstName === '' ||
      lastName === ''
    ) {
      setMessage('Veuillez compléter tout le formulaire');
    } else if (!emailValidation(email)) {
      setMessage('Email incorrecte');
    } else {
      setValidMessage(true);
      setMessage('Informations mises à jour');
      props.setUser({
        ...props.user,
        lastName: lastName,
        firstName: firstName,
        email: email,
        password: password,
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
          <Text style={[appStyles.title1, { width: '90%' }]}>
            Mettre à jour les informations
          </Text>
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
            keyboardType='email-address'
            placeholder='Saisissez votre email'
          />
          <Input
            secureTextEntry={true}
            label={'Mot de passe'}
            value={password}
            onChangeText={setPassword}
            placeholder='Saisissez votre mot de passe'
          />
          <Text
            style={[
              appStyles.text,
              { color: validMessage ? 'green' : '#D64045', marginTop: 15 },
            ]}
          >
            {message}
          </Text>
          <Submit label={'Modifier'} onPress={updateUser} />
        </View>
        <Pressable onPress={() => props.setLogin(false)}>
          <View style={styles.logoutContainer}>
            <Ionicons
              name='log-out-outline'
              style={{ marginRight: 5 }}
              size={20}
              color={'white'}
            />
            <Text style={styles.logout}>Déconnexion</Text>
          </View>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  logoutContainer: {
    marginTop: 30,
    backgroundColor: '#B80C09',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 50,
    borderRadius: 10,
  },
  logout: {
    color: 'white',
    marginLeft: 5,
  },
});

export default ProfilTabs;
