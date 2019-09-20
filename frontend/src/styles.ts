import {Colors} from "./config";

export default {

    '@font-face': {
        fontFamily: 'ArchitectsDaughter',
        src: 'url("/fonts/ArchitectsDaughter.ttf") format("truetype")',
    },

    page: {
        color: Colors.standardColors.anthracite,
        font: {
            family: 'ArchitectsDaughter',
            weight: 'normal',
            size: '1em',
        }
    },

    content: {
        margin: '1em'
    }

};