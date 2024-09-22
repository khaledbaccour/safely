import { View,StyleSheet,Text,Image} from 'react-native';

type headerProps = {
    title?: string;
    keyphrase: string;
    img?: any;
};

export function Header(
    { title, keyphrase,img }: headerProps
) {
    return (
        <View style={styles.container}>
            <Text style={styles.keyphrase}>{keyphrase}</Text>
            <View style={styles.cont1}>
                <Image source={img} style={{ width: 50, height: 50 }} />
                <Text style={styles.title}>{title}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        padding: 20,
        paddingHorizontal: 30,
        width: '100%',
    },
    cont1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        position: 'absolute',
        width: '100%',
        marginStart: 25
    },
    title: {
        fontSize: 30,
        fontFamily: 'QuanSlim',

    },
    keyphrase: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    }
});