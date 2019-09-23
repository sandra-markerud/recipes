import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type FooterProps = WithSheet<typeof styles, {}>

const Footer: React.FC<FooterProps> = ({classes}) => {
    return (
        <footer className={classes.panel}>
            <p>Copyright Sandra Markerud</p>
        </footer>
    );
};

export default withStyles(styles)(Footer);