import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import Header from '../../partials/header';
import Footer from '../../partials/footer';

type PageTemplateProps = WithSheet<typeof styles, {}> & {
    title: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({title, children, classes}) => {
    return (
        <div className={classes.page}>
            <Header title={title}/>
            <div className={classes.content}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default withStyles(styles)(PageTemplate);