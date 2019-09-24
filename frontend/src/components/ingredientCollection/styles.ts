import {Colors} from '../../config';

export default {

    ingredientCollection: {
        padding: '0',
    },

    ingredientContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridColumnGap: '10px',
        borderBottom: '1px solid ' + Colors.standardColors.lightGray,
        padding: '1em 0',
    },

    quantity: {
        textAlign: 'right',
        fontWeight: 'bold',
    },

    food: {
        textAlign: 'left',
    },

};