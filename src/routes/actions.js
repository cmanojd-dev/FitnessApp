import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(routeName, params = {}) {
  if (navigationRef.isReady() && routeName) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}

export function pushScreen(routeName, params = {}) {
  if (navigationRef.isReady() && routeName) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
}

export function replaceScreen(routeName, params = {}) {
  if (navigationRef.isReady() && routeName) {
    navigationRef.dispatch(StackActions.replace(routeName, params));
  }
}

// export function resetStack(
//   routes: { name: string; params?: AppAnyType }[] | undefined = [
//     { name: RoutesConstants.LOGIN_OPTIONS_SELECTION },
//   ],
// ): void {
//   if (navigationRef.isReady()) {
//     navigationRef.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: routes,
//       }),
//     );
//   }
// }

export function popScreen(numberOfScreens = 1) {
  if (navigationRef.isReady()) {
    if (numberOfScreens > 1) {
      navigationRef.dispatch(StackActions.pop(numberOfScreens));
    } else {
      navigationRef.dispatch(CommonActions.goBack());
    }
  }
}
