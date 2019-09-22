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
    },

    content: {
        backgroundColor: Colors.standardColors.white,
        overflow: 'auto',
        padding: '15px',
    },

    footer: {
        color: Colors.standardColors.white,
        backgroundColor: Colors.standardColors.anthracite,
    },

};