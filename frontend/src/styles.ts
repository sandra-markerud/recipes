import {Colors} from "./config";

export default {

    // TODO: Definition of multiple fonts fails due to typescript error: TS2344
    // TODO: Fonts need to be locally install for it to work, should not be necessary
    //
    // '@font-face': [
    //     {
    //         fontFamily: 'ArchitectsDaughter',
    //         src: 'url("/fonts/ArchitectsDaughter.ttf") format("truetype")',
    //     },
    //     {
    //         fontFamily: 'Blokletters-Potlood',
    //         src: 'url("/fonts/Blokletters-Potlood.ttf") format("truetype")',
    //     },
    //     {
    //         fontFamily: 'Blokletters-Viltstift',
    //         src: 'url("/fonts/Blokletters-Viltstift.ttf") format("truetype")',
    //     },
    //     {
    //         fontFamily: 'Blokletters-Balpen',
    //         src: 'url("/fonts/Blokletters-Balpen.ttf") format("truetype")',
    //     },
    // ],

    '@font-face': {
        fontFamily: 'Blokletters-Balpen',
        src: 'url("/fonts/Blokletters-Balpen.ttf") format("truetype")',
    },

    '@global': {
        body: {
            margin: 0,
            padding: 0,
            color: Colors.standardColors.anthracite,
            font: {
                family: 'Blokletters-Balpen',
                size: '1em',
            }
        },
    },

    content: {
        margin: '1em'
    }

};