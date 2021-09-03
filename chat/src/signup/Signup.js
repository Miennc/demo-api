import React from "react";
import { withRouter } from "react-router-dom";
import { postService } from "./../services/Post";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      pwd: "",
    };
  }
  submit(e) {
    e.preventDefault();
    postService
      .add(this.state)
      .then(() => {
        this.setState({
          nickname: "",
          pwd: "",
        });
      })
      .catch(() => {
        alert("Thêm thất bại");
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <div>
            <input
              type="text"
              placeholder="nickname"
              onChange={(e) => {
                this.setState({ nickname: e.target.value });
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="password"
              onChange={(e) => {
                this.setState({ pwd: e.target.value });
              }}
            />
          </div>
          <button>signup</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Signup);
