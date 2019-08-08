class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.showHide = this.showHide.bind(this);
        this.state = {
            visible: true
        }
    };

    showHide() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.showHide}>
                    { this.state.visible ? "Hide" : "Show" }
                </button>
                {this.state.visible && <p>Now you can see me!</p>}
            </div>
        )
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


// const appDeets = {
//     title: "Build-It: Visibility Toggle",
//     isVisible: false
// }
//
// const showHide = () => {
//     appDeets.isVisible = !appDeets.isVisible;
//     render();
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>{appDeets.title}</h1>
//             <p></p>
//             <div>
//                 <button onClick={showHide}>
//                     {appDeets.isVisible ? "Hide" : "Show"}
//                 </button>
//             </div>
//             {appDeets.isVisible && (
//                 <p>Now you can see me!</p>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
//
// const appRoot = document.getElementById("app");
//
// render();
