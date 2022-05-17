import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../config/colors';
import {SecondaryButton} from '../../components/buttons/SecondaryButton';
import {PrimaryButton} from '../../components/buttons/PrimaryButton';
import {PrimaryInput} from '../../components/forms/PrimaryInput';
import {SecondaryInput} from '../../components/forms/SecondaryInput';

export const SignUp = () => {
  const [userName, setuserName] = useState('alex');
  const [email, setEmail] = useState('alex040892@gmail.com');
  const [password, setPassword] = useState('1234567');

  return (
    <View style={styles.container}>
      <Image
        style={styles.vector1}
        source={require('../../../assets/images/vector1.png')}
      />
      <Image
        style={styles.vector2}
        source={require('../../../assets/images/vector2.png')}
      />
      <Image
        style={styles.vector3}
        source={require('../../../assets/images/vector3.png')}
      />
      <Image
        style={styles.vector4}
        source={require('../../../assets/images/vector4.png')}
      />

      <View style={styles.contentContainer}>
        <Image
          style={styles.back}
          source={require('../../../assets/images/back.png')}
        />
        <Text style={styles.heading}>Create your Account</Text>
        <View style={styles.btnWrapper}>
          <View style={styles.btnItemWrapper}>
            <SecondaryButton
              label={'CONTINUE WITH FACEBOOK'}
              background={colors.facebookBg}
              fontColor={colors.white}
              btnType="FACEBOOK"
            />
          </View>
          <View style={styles.btnItemWrapper}>
            <SecondaryButton
              label={'CONTINUE WITH GOOGLE'}
              background={colors.white}
              btnType="GOOGLE"
              fontColor={colors.heading}
            />
          </View>
        </View>
        <Text style={styles.or}>OR LOG IN WITH EMAIL</Text>
        <View style={styles.inputItem}>
          <PrimaryInput
            placeHolder={'User Name'}
            isValid={true}
            value={userName}
          />
        </View>
        <View style={styles.inputItem}>
          <PrimaryInput
            value={email}
            placeHolder={'Email Address'}
            isValid={true}
          />
        </View>
        <View style={styles.inputItem}>
          <SecondaryInput value={password} placeHolder={'Password'} />
        </View>
        <View style={styles.privacyPolicyCheckWrapper}>
          <TouchableOpacity style={styles.privacyPolicyLabelWrapper}>
            <Text style={styles.subTitle}>I have read the </Text>
            <Text style={styles.link}>privacy policy</Text>
          </TouchableOpacity>
          <Image
            style={styles.checkBox}
            source={require('../../../assets/images/checkbox.png')}
          />
        </View>
        <View style={styles.getStartedbtnItemWrapper}>
          <PrimaryButton label={'GET STARTED'} />
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    marginTop: -50,
  },
  vector1: {
    position: 'absolute',
    left: -10,
    top: -5,
  },
  vector2: {
    position: 'absolute',
    right: -6,
  },
  vector3: {
    position: 'absolute',
    top: 90,
  },
  vector4: {
    position: 'absolute',
    right: 0,
    top: 90,
  },
  contentContainer: {
    flex: 1,
    // marginTop: -10,
  },
  back: {
    marginTop: 50,
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    textAlign: 'center',
    color: colors.heading,
  },
  btnWrapper: {
    marginTop: 30,
  },
  btnItemWrapper: {
    marginBottom: 20,
  },
  or: {
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    textAlign: 'center',
    color: colors.gray,
  },
  inputItem: {
    marginBottom: 20,
  },
  checkBox: {
    width: 24,
    height: 24,
  },
  privacyPolicyCheckWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    fontWeight: '700',
    color: colors.gray,
  },
  link: {
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  privacyPolicyLabelWrapper: {
    flexDirection: 'row',
  },
  getStartedbtnItemWrapper: {
    marginTop: 20,
  },
});
