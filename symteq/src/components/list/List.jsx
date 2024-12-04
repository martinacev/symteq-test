import classes from "./List.module.css";

const List = ({name}) => {
    return (
        <div className={classes.container}>
             <p className={classes.items}>{name}</p>
        </div>
    )
}

List.defaultProps = {
    name: "Martin",
    
};

export default List;