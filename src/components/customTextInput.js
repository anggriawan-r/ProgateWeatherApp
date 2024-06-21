import { View, StyleSheet, TextInput } from 'react-native';

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChange}
        placeholder={placeholder}
      >
        {text}
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#DDDDDD',
    padding: 10,
  },
});

export default CustomTextInput;
