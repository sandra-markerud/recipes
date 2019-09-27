import {Colors} from '../../config';

export default {

    centeredForm: {
        maxWidth: '900px',
        maxHeight: '100%',
        margin: '20px auto',
        padding: '10px',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)',
        backgroundColor: Colors.standardColors.lightGray,

        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gridGap: '10px',
        alignItems: 'center',
        //
        // '& textarea': {
        //     resize: 'vertical',
        // }
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

    '@global': {
        textarea: {
            resize: 'none',
            maxHeight: '100%',
        },
    },


    '@media screen and (max-width: 600px)': {
        formLabel: {
            gridColumn: '1 / 3',
        },
        formElement: {
            gridColumn: '1 / 3',
        }
    }

};