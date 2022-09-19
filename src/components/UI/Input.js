import classes from '../UI/Input.module.css';

const Input = props => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id} >{props.label}</label>
        {/* adding spread operator to make sure we add any attributes we need, makes it highly configurable.
        Can get rid of id attribute too if we want*/}
        <input id={props.input.id}  {...props.input}/>
      </div>
    );
}

export default Input;