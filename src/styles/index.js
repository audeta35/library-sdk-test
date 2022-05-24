import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const bgColor = '#F9FBFE';
const accentColor = '#6379F4';

const styleIndex = {
  scrollableView: {
    flex: 1,
    height: deviceHeight,
    backgroundColor: bgColor,
  },
  scrollViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: bgColor,
  },
  descText: {
    padding: 16,
    textAlign: 'center',
    fontSize: 16,
  },
  headerText: {
    color: accentColor,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
  cardView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    padding: 20,
    marginVertical: 5,
  },
  cardBadge: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    flexDirection: 'row',
    marginVertical: 5,
  },
  keyBadge: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    marginVertical: 5,
  },
  keyButton: {
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonApproval: {
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerImage: {
    height: 80,
    width: 80,
    margin: 10,
  },
  headerSubText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  headerChildText: {
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  scannerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    padding: 32,
    color: accentColor,
  },
  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    borderRadius: 15,
  },
  keyHeader: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
    color: 'black',
  },
  detailTextContent: {
    color: 'gray',
    marginHorizontal: 16,
    marginVertical: 10
  },
  detailText: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 16,
  },
};
export default styleIndex;
