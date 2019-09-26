import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type ActionsMenuItemProps = WithSheet<typeof styles, {}> & {
    icon: IconProp
    text: string
}

const ActionsMenuItem: React.FC<ActionsMenuItemProps> = ({icon, text, classes}) => {
    return (
        <div className={classes.item}>
            <FontAwesomeIcon icon={icon}/><
            span className={classes.text}>{text}</span>
        </div>
    );
};

export default withStyles(styles)(ActionsMenuItem);