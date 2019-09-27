import {Colors} from './config';

export default {

    '@global': {
        body: {
            minWidth: '320px',
            margin: 0,
            padding: 0,
            color: Colors.standardColors.anthracite,
            font: {
                family: 'Blokletters-Balpen',
                size: '1em',
            },
            lineHeight: '1.4',
        },

        a: {
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'pointer',
        },

        p: {
            margin: '0',
        }
    },

};