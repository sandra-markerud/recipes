import {Colors} from '../../config';

export default {

    '@global': {
        form: {
            height: '100%',
            overflow: 'auto',
        },
        textarea: {
            resize: 'none',
        },
    },

    formContainer: {
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gridTemplateRows: 'auto',
        gridGap: '10px',
        alignItems: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '10px',
        backgroundColor: Colors.standardColors.lightGray,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)',
        overflow: 'auto',
    },

    formLabel: {
        gridColumn: '1 / 2',
        fontSize: '0.75em',
        textAlign: 'right',
    },

    formElement: {
        gridColumn: '2 / 3',
        padding: '5px',
        lineHeight: '1.4',
        border: '1px solid ' + Colors.standardColors.anthracite,
    },

    '@media screen and (max-width: 600px)': {
        formLabel: {
            gridColumn: '1 / 3',
            textAlign: 'left',
        },
        formElement: {
            gridColumn: '1 / 3',
        }
    }

};