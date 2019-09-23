import {Colors} from '../../../config';

export default {

    page: {
        display: 'grid',
        gridTemplateRows: '40px auto 40px',
        height: '100vh',
    },

    header: {
        color: Colors.standardColors.white,
        backgroundColor: Colors.standardColors.anthracite,
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: '150px auto 150px',
    },

    headerColumnLeft: {
        textAlign: 'left',
    },
    headerColumnMiddle: {
        textAlign: 'center',
    },
    headerColumnRight: {
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

    content: {
        backgroundColor: Colors.standardColors.white,
        overflow: 'auto',
        padding: '10px',
    },

    footer: {
        color: Colors.standardColors.white,
        backgroundColor: Colors.standardColors.anthracite,
        textAlign: 'center',
        padding: '10px',
    },

};