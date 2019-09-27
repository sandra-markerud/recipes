import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PageTemplate from '../pageTemplate/PageTemplate';

type NotFoundPageProps = WithSheet<typeof styles, {}>;

const NotFoundPage: React.FC<NotFoundPageProps> = ({classes}) => {
    return (
        <PageTemplate title={'404 - Fehler'}>
            <div className={classes.notFoundContent}>
                <div className={classes.notFoundMessage}>
                    <div>4<FontAwesomeIcon icon={'cookie-bite'}/>4</div>
                    <p>Page not found</p>
                </div>
            </div>
        </PageTemplate>
    );
};

export default withStyles(styles)(NotFoundPage);