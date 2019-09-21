import {Colors} from "../../../config";

export default {

    recipeTile: {
        // border: {
        //     style: 'solid',
        //     color: Colors.standardColors.anthracite,
        //     width: '1px',
        // },
        width: '250px',
        margin: '1%',
        padding: '10px',
        textAlign: 'center',
        '&:nth-of-type(odd)': {
            background: Colors.standardColors.lightGray,
        },
        '&:nth-of-type(even)': {
            background: Colors.standardColors.lightGray,
        },
        boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)',

    },

};