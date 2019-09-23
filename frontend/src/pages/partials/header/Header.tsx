import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type HeaderProps = WithSheet<typeof styles, {}> & {
    title: string
}

const Header: React.FC<HeaderProps> = ({title, classes}) => {
    return (
        <header className={classes.panel}>
            <Link to="/" className={classes.columnLeft}>
                <FontAwesomeIcon icon={'home'} className={classes.icon}/>
            </Link>
            <p className={classes.columnMiddle}>{title}</p>
            <span className={classes.columnRight}>
                    <FontAwesomeIcon icon={'search'} className={classes.icon}/>
                    <FontAwesomeIcon icon={'heart'} className={classes.icon}/>
                    <FontAwesomeIcon icon={'bars'} className={classes.icon}/>
                </span>
        </header>
    );
};

export default withStyles(styles)(Header);