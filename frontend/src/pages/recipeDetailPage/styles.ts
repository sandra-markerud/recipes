import {Colors} from '../../config';

export default {

    splitPanel: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        height: '100%',
    },

    ingredients: {
        backgroundColor: Colors.systemColors.warning.light,
        overflow: 'auto',
    },

    instructions: {
        backgroundColor: Colors.systemColors.info.light,
        overflow: 'auto',
    },

};