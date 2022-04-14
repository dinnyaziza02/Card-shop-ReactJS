import React from "react";
class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            angka : 1
        }
    }
    state = {
        angka : 0
    }

    plus = () => {
        this.setState ({angka : this.state.angka + 1})
    }
    minus = () => {
        this.setState ({angka : this.state.angka - 1})
    }
  render() {
    return (
      <div>
          <h2>Card Shop Blisk</h2>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://khyrastore.com/wp-content/uploads/2020/10/Scarlett-Whitening-Hand-Body-Lotion-Charming-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.judul}</h5>
            <h5>{this.props.harga}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div>
                <h4>
                    <button onClick = {this.plus}> + </button> {this.state.angka}
                    <button onClick = {this.minus}>-</button>
                </h4>
            </div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
