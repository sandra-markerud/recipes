import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import ActionsMenuItem from './actionsMenuItem/ActionsMenuItem';

type ActionsMenuProps = WithSheet<typeof styles, {}>

const ActionsMenu: React.FC<ActionsMenuProps> = ({classes}) => {
    return (
        <div className={classes.menu}>
            <ActionsMenuItem icon={['far', 'plus-square']} text={'Neues Rezept'} route={'/rezept/neu'}/>
        </div>
    );
};

export default withStyles(styles)(ActionsMenu);