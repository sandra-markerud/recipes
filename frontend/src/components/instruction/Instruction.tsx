import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type InstructionProp = WithSheet<typeof styles, {}> & {
    text: string
}

const Instruction: React.FC<InstructionProp> = ({text, classes}) => {
    return (
        <div className={classes.panel}>
            <h3>Zubereitung</h3>
            <hr/>
            <br />
            <div className={classes.text}>{text}</div>
        </div>
    );
};

export default withStyles(styles)(Instruction);