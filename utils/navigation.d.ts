import { NavigationProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
export type RootStackParamList = {
    Home: undefined;
    Detail: {
        id: number;
        title: string;
        star: number
    };
};
export type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type RootProps = NavigationProp<RootStackParamList>
export type RootDrawerParamList = {
    HomeLayout: undefined;
    About: undefined
};