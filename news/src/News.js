const News = (props) => {
    const style = {
        border: "3px solid red",
        padding: "10px",
        margin: "10px"
    }
    return (
        <div style={style}>
            <h1>{props.ad}</h1>
            <h3>{props.text}</h3>
        </div>
    )
}

export default News