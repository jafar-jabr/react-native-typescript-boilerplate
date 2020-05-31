import { StyleSheet } from 'react-native';
import Colors from '../themes/Colors';

const HomePageLtrStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.nearlyWhite,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#81C784',
    fontWeight: 'bold',
  },
  logo: {
    width: 96,
    height: 88,
  },
});

export default HomePageLtrStyle;
