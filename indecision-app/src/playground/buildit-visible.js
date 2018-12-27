// let showDetails = false;

// const toggleVisibility = () => {
//     showDetails = !showDetails;
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility</h1>
//             <button onClick={toggleVisibility}>{showDetails ? 'Hide details' : 'Show details'}</button>
//             {showDetails && <p>Hey. These are some details you can now see!</p>}
//         </div>
//     );
//     ReactDOM.render(jsx, appRoot);
// };

// render();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggle() {
        this.setState((prevstate) => {
            return {
                visibility: !prevstate.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));