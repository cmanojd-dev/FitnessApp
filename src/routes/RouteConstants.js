export const RoutesConstants = {
  COMMENT_SCREEN: 'COMMENT_SCREEN',
  REPLY_SCREEN: 'REPLY_SCREEN',
};

//   export const hideSplashScreenTimer = 1000;
//   export const fetchUILabelsAndMenusTimer = 1000;

//   export const BACK = 'back';
//   export const PLUS = 'plus';
//   export const SEARCH = 'search';
//   export const NOTIFICATION = 'Notification';
//   export const SHARE = 'Share';
//   export const THUMBNAIL = 'appLogo';
//   export const CLOSE = 'close';
//   export const SETTING = 'Setting';

//   export const navigationActionHandles: {
//     [key: string]: {
//       title?: string;
//       navBarColor?: string | null;
//       headerIcons?: { left?: string[]; right?: string[] };
//       reply?: boolean;
//       tabBarVisible?: boolean;
//       isTabBar?: boolean;
//     };
//   } = {
//     [RoutesConstants.DYNAMIC_MODULAR_PAGE]: {
//       title: '',
//       headerIcons: { left: [THUMBNAIL], right: [SEARCH, NOTIFICATION] },
//       isTabBar: true,
//     },
//     [RoutesConstants.REPLY_SCREEN]: { reply: true, headerIcons: { left: [BACK], right: [SEARCH] } },
//     [RoutesConstants.COMMENT_SCREEN]: {
//       reply: false,
//       headerIcons: { left: [BACK], right: [SEARCH] },
//     },
//     [RoutesConstants.COMMUNITY_DETAIL]: {
//       title: '',
//       headerIcons: { left: [BACK], right: [SEARCH, NOTIFICATION] },
//     },
//     [RoutesConstants.COMMUNITY_CREATE_POST]: {
//       title: 'Create Post',
//       headerIcons: { left: [], right: [CLOSE] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.CREATE_COMMUNITY]: {
//       title: '',
//       headerIcons: { left: [BACK], right: [SEARCH, NOTIFICATION] },
//     },
//     [RoutesConstants.SETTINGS]: { title: 'Settings', headerIcons: { left: [BACK], right: [] } },
//     [RoutesConstants.CHANGE_PASSWORD]: {
//       title: `Don't remember current password`,
//       headerIcons: { left: [BACK], right: [] },
//     },
//     [RoutesConstants.MY_SUBSCRIPTIONS]: {
//       title: 'Subscription',
//       headerIcons: { left: [BACK], right: [] },
//     },
//     [RoutesConstants.MY_DONATIONS]: {
//       title: 'Donation History',
//       headerIcons: { left: [BACK], right: [] },
//     },
//     [RoutesConstants.UPDATE_PASSWORD_EMAIL]: {
//       title: `Don't remember current password`,
//       headerIcons: { left: [BACK], right: [] },
//     },
//     [RoutesConstants.MY_LIBRARY]: {
//       title: 'My Library',
//       headerIcons: { left: [BACK], right: [PLUS] },
//     },
//     [RoutesConstants.NOTIFICATION]: {
//       title: 'Notifications',
//       headerIcons: { left: [BACK], right: [SETTING] },
//     },
//     [RoutesConstants.NOTIFICATION_PREFERENCES]: {
//       title: 'Notification Preferences',
//       headerIcons: { left: [BACK], right: [] },
//     },
//     [RoutesConstants.PLAYLIST_DETAILS]: { title: '', headerIcons: { left: [BACK] } },
//     [RoutesConstants.FORGOT_PASSWORD]: { title: 'Login', headerIcons: { left: [BACK], right: [] } },
//     [RoutesConstants.RESET_PASSWORD]: { title: '', headerIcons: { left: [BACK], right: [] } },
//     [RoutesConstants.VERIFY_EMAIL]: { title: '', headerIcons: { left: [], right: [] } },
//     [RoutesConstants.VERIFY_PHONE]: { title: '', headerIcons: { left: [], right: [] } },
//     [RoutesConstants.VERIFY_OTP]: { title: '', headerIcons: { left: [], right: [] } },
//     [RoutesConstants.PRAYER_SCREEN]: { title: '', headerIcons: { left: [], right: [CLOSE] } },
//     [RoutesConstants.SUBSCRIPTION_LIST]: {
//       title: 'My Subscriptions',
//       headerIcons: { left: [BACK], right: [] },
//     },
//     [RoutesConstants.PAGE_VIEW_ALL]: {
//       title: '',
//       headerIcons: { left: [BACK] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.CREATE_ACCOUNT]: {
//       title: 'Create Account',
//       headerIcons: { left: [BACK], right: [] },
//     },
//     [RoutesConstants.LOGIN]: {
//       title: 'Login',
//       headerIcons: { left: [BACK], right: [] },
//     },
//     [RoutesConstants.FORM_DETAIL]: {
//       title: '',
//       headerIcons: { left: [BACK], right: [SEARCH, NOTIFICATION] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.DYNAMIC_LANDING_PAGE]: {
//       title: '',
//       headerIcons: { left: [BACK], right: [SEARCH, NOTIFICATION] },
//     },
//     [RoutesConstants.AUDIO_PLAYER_CONTROL]: { tabBarVisible: false },
//     [RoutesConstants.ARTICLE_DETAILS]: {
//       title: '',
//       headerIcons: { left: [BACK], right: [SEARCH, NOTIFICATION, SHARE] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.SEARCH]: {
//       title: '',
//       headerIcons: { left: [], right: [CLOSE] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.BIBLICAL_CHAPTER_VIEWS]: {
//       title: 'Biblical Views',
//       headerIcons: { left: [BACK], right: [SEARCH, NOTIFICATION] },
//     },

//     [RoutesConstants.PORTRAIT_PLAYER]: { title: '', tabBarVisible: false },
//     [RoutesConstants.DONATION_CARD_DETAILS]: {
//       title: 'Donate',
//       headerIcons: { left: [BACK] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.DONATION_COMPLETED]: {
//       title: '',
//       headerIcons: { left: [BACK] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.SPIRITUAL_PROFILE]: {
//       title: '',
//       headerIcons: { left: [BACK] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.BIOMETRIC_LOGIN]: {
//       title: 'Logout',
//       headerIcons: { left: [BACK] },
//       tabBarVisible: false,
//     },
//     [RoutesConstants.ABOUT]: { title: 'About', headerIcons: { left: [BACK] }, tabBarVisible: false },
//     [RoutesConstants.MORE]: { title: 'More', headerIcons: { left: [] } },
//     [RoutesConstants.PRAYER_PAGE]: { title: 'Prayer', headerIcons: { left: [BACK] } },
//     [RoutesConstants.DISCOVER_PAGE]: {
//       title: 'Discover',
//       headerIcons: { left: [], right: [] },
//     },
//     [RoutesConstants.SEARCH_SCREEN]: {
//       title: 'Discover',
//       headerIcons: { left: [BACK], right: [] },
//     },
//   };

//   export const preventHardwareBackPressRoutes = [RoutesConstants.VERIFY_OTP];
