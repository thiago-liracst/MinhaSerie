import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#9c0000',
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

    newSerieButton: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 8,
        marginTop: 40,
        marginRight: 8,
    },

    series: {
        flex: 1,
        backgroundColor: '#9c0000',
        padding: 15,
    },

    serie: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 24,
        marginBottom: 8,
        //flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 150,
    },

    serieTitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    deleteSerieButton: {
        backgroundColor: '#9c0000',
        padding: 10,
        borderRadius: 8,
    },

    deleteSerieButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    },

})