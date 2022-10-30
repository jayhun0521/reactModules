class App extends React.Component {
    state = {
        name: "DJ Shadow",
        age: 46
    }
    
    // handleClick = (e) => {
    //     // console.log(this.state);
    //     this.setState({
    //         name: "Samus",
    //         age: 30
    //     });
    //     console.log(this.state);
    // }

    // handleMouseOver = (e)=> {
    //     console.log(e.target, e.pageX);
    // }

    // handleCopy = (e) => {
    //     console.log("Get your own ideas!")
    // }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', this.state.name);
    }

    render(){
        return(
            <div className = "app-content">
                <h1>Hey Devs</h1>
                <p>My name is: {this.state.name} and I am { this.state.age} </p>
                {/* <button onClick = {this.handleClick}> Click Me</button>
                <button onMouseOver = {this.handleMouseOver}>Hover over me</button>
                <p onCopy = {this.handleCopy}>Look Ma, I can fly!</p> */}
                <form onSubmit={this.handleSubmit}>
                    <input type= "text" onChange={this.handleChange}/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))









