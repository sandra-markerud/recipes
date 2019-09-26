import {Colors} from '../../config';

export default {

    menu: {
        color: Colors.standardColors.anthracite,
        backgroundColor: Colors.standardColors.white,
        cursor: 'pointer',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)',
        position: 'absolute',
        right: '10px',
        bottom: '50px',
        zIndex: '1',

        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto',
    },

};