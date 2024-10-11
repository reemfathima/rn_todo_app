import {Dimensions, StyleSheet} from 'react-native';
import {FONT} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
  },
  categoriesList: {
    flexGrow: 0,
  },
  categoriesColWrapper: {
    paddingBottom: 15,
  },

  // SectionHeader styles
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONT.bold,
    fontSize: 20,
    color: '#333333',
    marginVertical: 10,
    paddingBottom: 5,
  },
  headerViewText: {
    fontFamily: FONT.medium,
    fontSize: 15,
    color: '#2196f3',
  },

  // CategoryItem styles
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#2196f3',
    elevation: 2,
    width: (Dimensions.get('screen').width - 70) / 3,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginTop: 5,
  },
});
