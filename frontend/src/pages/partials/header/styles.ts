import {Colors} from '../../../config';

export default {

    panel: {
        color: Colors.standardColors.white,
        backgroundColor: Colors.standardColors.anthracite,
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
    },

    columnLeft: {
        textAlign: 'left',
    },

    columnMiddle: {
        textAlign: 'center',
    },

    columnRight: {
        textAlign: 'right',
    },

    icon: {
        fontSize: '1.25em',
        paddingLeft: '1em',
        textAlign: 'right',
        '&:nth-of-type(1)': {
            padding: '0',
        },
    },

};