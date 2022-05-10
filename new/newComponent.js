'use strict';
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    componentDidMount() {
        setTimeout(this.connectingButton, 5)
    }
    connectingButton() {
        for (let i of oldCom.getElementsByTagName('button')) {
            console.log('componentDidMount() lifecycle');
            i.addEventListener('click', (event) => {
                document.getElementById("response")
                    .firstChild.textContent = event.target.firstChild.textContent
            }, false);
        }
    }
    connectinginfo() {
        for (let i of oldCom.getElementsByTagName('div'))
            i.innerHTML = "";
        for (let j of newCom.getElementsByTagName('div'))
            j.innerHTML = "";
    }
    render() {
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
ReactDOM.render(<LikeButton />, newCom);