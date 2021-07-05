import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
    marginRight: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  messagesContainer: {
    width: '100%',
    height: 300,
    borderWidth: StyleSheet.hairlineWidth,
  },
  messagesContainerHeader: {
    width: '100%',
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1e05a',
  },
  messagesContainerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  medicationItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
});
