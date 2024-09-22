import { router } from "expo-router";

const onMsgPress = ( message: string,
    username: string,
    pic: any) => {
        router.navigate(
            {
                pathname: "/(tabs)/(chat)/conversation",
                params: {
                    username: username,
                    pic: pic,
                }
            }
        )
}
export default onMsgPress;