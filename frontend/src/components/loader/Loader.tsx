import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type LoaderProps = WithSheet<typeof styles, {}>;

const Loader: React.FC<LoaderProps> = ({classes}) => {
    return (
        <FontAwesomeIcon icon={"spinner"} pulse className={classes.spinner}/>
    );
};

export default withStyles(styles)(Loader);