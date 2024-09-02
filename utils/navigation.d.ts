export type ScreenNames = ["Home", "Detail"]
export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type StackNavigation = NavigationProp<RootStackParamList>;