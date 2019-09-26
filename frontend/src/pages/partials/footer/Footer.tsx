import * as React from 'react';
import {Component} from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ActionsMenu from '../../../components/actionsMenu/ActionsMenu';

type FooterProps = WithSheet<typeof styles, {}>

interface FooterState {
    menuOpen: boolean
}

class Footer extends Component<FooterProps, FooterState> {
    state: FooterState = {
        menuOpen: false,
    };

    changeStatus = () => {
        this.setState({
            menuOpen: (!this.state.menuOpen)
        });
    };

    render() {
        const classes = this.props.classes;
        return (
            <footer className={classes.panel}>
                <p>Copyright Sandra Markerud</p>
                {this.state.menuOpen && <ActionsMenu/>}
                <div className={classes.actionsMenu} onClick={this.changeStatus}>
                    {this.state.menuOpen ?
                        <FontAwesomeIcon icon={'angle-double-up'} size={'lg'}/> :
                        <FontAwesomeIcon icon={'angle-double-right'} size={'lg'}/>
                    } Aktionen
                </div>
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);