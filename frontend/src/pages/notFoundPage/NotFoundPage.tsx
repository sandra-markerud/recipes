import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PageTemplate from '../pageTemplate/PageTemplate';

type NotFoundPageProps = WithSheet<typeof styles, {}>;

const NotFoundContent: React.FC<NotFoundPageProps> = ({classes}) => {
    return (
        <div className={classes.notFoundContent}>
            <div className={classes.notFoundMessage}>
                <div>4<FontAwesomeIcon icon={'cookie-bite'}/>4</div>
                <p>Page not found</p>
            </div>
        </div>
    );
};

const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
    return (
        <PageTemplate title={'404 - Fehler'}>
            <NotFoundContent {...props} />
        </PageTemplate>
    );
};

export default withStyles(styles)(NotFoundPage);