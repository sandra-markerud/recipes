import {Colors} from '../../config';

export default {

    container: {
        display: 'grid',
       gridTemplateColumns: '100px auto auto auto',
        gridColumnGap: '10px',
        gridRowGap: '5px',
        alignItems: 'center',
        margin: 0,
        padding: 10,
        border: '1px solid ' + Colors.standardColors.anthracite,
    },

    addButton: {
        gridColumn: '1 / 3',
        padding: '5px',
        lineHeight: '1.4',
        border: '1px solid ' + Colors.standardColors.anthracite,
    },

};