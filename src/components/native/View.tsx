import { StyleSheet, Text, View } from "react-native"

type BoxProps = {
  color: string
  text: string
}

const ColoredBox: React.FC<BoxProps> = ({ color, text }) => {
  return (
    <View style={[styles.box, { backgroundColor : color }]}>
      <Text style={styles.boxText} >{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 8,
  },
  boxText: {
    fontSize: 16,
    color: '#FFF'
  }
})

export default ColoredBox