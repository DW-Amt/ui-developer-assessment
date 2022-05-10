'use strict';
class NewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { connect: false };
    }
    connectingButton() {
        for (let i of oldCom.getElementsByTagName('button')) {
            i.addEventListener('click', (event) => {
                document.getElementById("response")
                    .firstChild.textContent = event.target.firstChild.textContent
            }, false);
        }
    }
    connectinginfo() {
        for (let i of oldCom.getElementsByTagName('div')) {
            i.innerHTML = "";
        }
    }
    render() {
        if (!this.state.connect) {
            return ( <button onClick={() => { this.connectingButton(); this.setState({ connect: true }); }}>
                connect
            </button>)
        }
        return (<div>
            <button onClick={this.connectinginfo}>
                reset
            </button>
            <p id='response'>hello</p>
        </div>
        );
    }
}
let newCom = document.querySelector('#new');
let oldCom = document.querySelector('#old');
ReactDOM.render(<NewComponent />, newCom);