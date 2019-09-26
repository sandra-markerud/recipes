import {Colors} from '../../../config';

export default {

    item: {
        fontSize: '1.5em',
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridColumnGap: '10px',
        '&:hover': {
            textDecoration: 'underline',
        },
        borderBottom: '1px solid ' + Colors.standardColors.lightGray,
    },

    text: {
        textAlign: 'left',
    },

};