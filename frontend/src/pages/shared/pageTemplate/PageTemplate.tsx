import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {Link} from 'react-router-dom';

type PageTemplateProps = WithSheet<typeof styles, {}> & {
    title: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({title, children, classes}) => {
    return (
        <div className={classes.page}>
            <header className={classes.header}>
                <Link to="/" className={classes.headerColumnLeft}>
                    <FontAwesomeIcon icon={'home'} className={classes.icon}/>
                </Link>
                <p className={classes.headerColumnMiddle}>{title}</p>
                <span className={classes.headerColumnRight}>
                    <FontAwesomeIcon icon={'search'} className={classes.icon}/>
                    <FontAwesomeIcon icon={['far', 'heart']} className={classes.icon}/>
                    <FontAwesomeIcon icon={'bars'} className={classes.icon}/>
                </span>
            </header>
            <div className={classes.content}>
                {children}
            </div>
            <footer className={classes.footer}>
                <p>Copyright Sandra Markerud</p>
            </footer>
        </div>
    );
};

export default withStyles(styles)(PageTemplate);