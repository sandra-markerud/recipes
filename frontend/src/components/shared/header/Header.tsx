import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type HeaderProps = WithSheet<typeof styles, {}>

const Header: React.FC<HeaderProps> = ({classes}) => {
    return (
        <header className={classes.headline}>
            <h1>Willkommen in der Rezeptdatenbank der Familie Markerud</h1>
        </header>
    );
};

export default withStyles(styles)(Header);