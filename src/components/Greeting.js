const Greeting = (props) => {
    // const message = "Hola a todos";
    console.log(props);
    return(
        <div>
            <u>Hola {props.firstName}</u>
        </div>
    )
}
export default Greeting;