import { NavigationActions } from 'react-navigation';

let _navigator;

const setTopLevelNavigator = (navigatorRef: any) => _navigator = navigatorRef;

const navigate = (routeName: string, params?: object) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export {
  navigate,
  setTopLevelNavigator,
};