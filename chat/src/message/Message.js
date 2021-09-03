import React from "react";
import { withRouter } from "react-router-dom";
import { postService } from "./../services/Post";
class Message extends React.Component {
  constructor(props) {
    super(props);
    const queryString = window.location.search;
    const url = new URLSearchParams(queryString);
    this.state = {
      nickName: url.get("nickname"),
      data: [],
      nickname: "",
      message: "",
      lastId: null,
    };
  }
  get() {
    postService
      .getData(this.state.lastId)
      .then((resp) => {
        const data = resp.data;
        this.setState({lastId: data[data.length - 1].id});
        const messages=this.state.data;
        for(let i =0;i<data.length;i++) {
            messages.push(data[i]);
        }
        this.setState({ data: messages });
      })
      .catch(() => {
        console.log("Lấy về thông tin lỗi");
      });
  }
  componentDidMount() {
    this.get();
  }
  submit(evt) {
    evt.preventDefault();
    postService
      .add(this.state)
      .then(() => {
        this.setState({
          nickname: "",
          message: "",
        });
this.get();
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
            {this.state.nickName + ":  đã join"}
            <ul>
              {this.state.data.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.nickname + ":"} {item.message}
                  </div>
                );
              })}
            </ul>
          </div>
          <input
            type="text"
            placeholder="nhập tin nhắn"
            onChange={(e) => {
              this.setState({
                nickname: this.state.nickName,
                message: e.target.value,
              });
            }}
            value={this.state.message}
          />
          <button>send</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Message);
