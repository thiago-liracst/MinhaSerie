import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9c0000',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        color: '#FFF',
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 8,
    },

    backButton: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 8,
        marginTop: 40,
        marginRight: 8,
        width: 80,
        alignItems: 'center',
    },

    backButtonText: {
        fontSize: 15,
    },

    newSerieBox: {
        backgroundColor: '#f5f5f5',
        padding: 24,
        borderRadius: 8,
        marginTop: 24,
        marginLeft: 8,
        marginRight: 8,
        height: 400,
    },

    labelName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 8
    },

    input: {
        backgroundColor: '#808080',
        borderRadius: 5,
        padding: 10,
        marginTop: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },

    newSerieButton: {
        backgroundColor: '#9c0000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },

    newSerieButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
})
