import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import Colors from '../../constants/colors';


export default function Title({children}) {
  return (
    <Text style={styles.title}>
        {children}
    </Text>
  )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 42
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12
    }
})