import * as React from "react"
import * as ReactDOM from "react-dom"
let newCom = document.querySelector('#new');
export default class NewComponent extends React.Component<{ connect: boolean }> {
        state = { connect: false };
    connectingButton() {
        let oldCom = (document.querySelector('#old')) as HTMLElement;
        let buttons = (oldCom.getElementsByTagName('button')) as HTMLCollectionOf<HTMLButtonElement>;
        for (let i = 0; i < buttons.length;i++) {
            buttons[i].addEventListener('click', (event) => {
                const target = event.target as HTMLButtonElement;
                let tag = (document.getElementById("response") as HTMLElement).firstChild as HTMLElement;
                tag.textContent = target.textContent;
            }, false);
        }
    }
    connectinginfo() {
        let oldCom = ((document.querySelector('#old')) as HTMLElement).getElementsByTagName('div');
        for (let i = 0; i < oldCom.length; i++) {
            oldCom[i].innerHTML = "";
        }
        ((document.querySelector('#response')) as HTMLElement).innerHTML="hello";
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

ReactDOM.render(<NewComponent connect />, newCom);