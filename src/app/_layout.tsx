import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import {
    useFonts,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold
} from "@expo-google-fonts/open-sans"

import { Loading } from "@/components/loading"

export default function Layout(){
    const [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_600SemiBold,
        OpenSans_700Bold
    })

    if (!fontsLoaded){
        return <Loading/>
    }

    return (
    <SafeAreaView className="flex-1 bg-slate-900">
        <Slot />
    </SafeAreaView>
    )
}