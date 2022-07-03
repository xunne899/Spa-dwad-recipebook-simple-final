import React from "react";
import axios from "axios";

export default class Listing extends React.Component {
  url = "https://8888-xunne899-dwadrecipeapi-byefmbidvc9.ws-us47.gitpod.io/";

  state = {
    data: []
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Recipes</h1>
          {this.state.data.map((r) => (
            <React.Fragment key={r._id}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{r.title}</h3>
                  <h4>Ingredients</h4>
                  <ul>
                    {r.ingredients.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    let response = await axios.get(this.url + "recipes");
    this.setState({
      data: response.data
    });
  }
}
