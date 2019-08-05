// import React, { component } from "react";
// import Button from "react-bootstrap/Button";



class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>this is from header</h2>
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
    </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
