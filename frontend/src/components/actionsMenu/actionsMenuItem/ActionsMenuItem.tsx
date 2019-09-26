import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {Link} from 'react-router-dom';

type ActionsMenuItemProps = WithSheet<typeof styles, {}> & {
    icon: IconProp
    text: string
    route: string
}

const ActionsMenuItem: React.FC<ActionsMenuItemProps> = ({icon, text, route, classes}) => {
    return (
        <Link to={route} className={classes.item}>
            <FontAwesomeIcon icon={icon}/><
            span className={classes.text}>{text}</span>
        </Link>
    );
};

export default withStyles(styles)(ActionsMenuItem);