import React, { Component }  from "react";

class Items extends Component{
	constructor()
{
	super();
	console.log("constrator");
} // first method run

componentDidMount()
{
	console.log("componentDidMount") // after  upload
}
componentDidUpdate(ProvProps, ProvState)
{
	console.log(ProvProps);
	console.log(ProvState)
}
	state = {
		val :'',
	}
	changeVal = (value)=>{
		// this.setState({
		// 	// val : value.target.value
		// })
	}
	handelSubmit = (value)=>{
		value.preventDefault()

		// this.setState({


		// })
	}
	render()
	{
		console.log("render")
		// const age = this.props.page;
		// const {age , name} = this.props;
		const data = this.props.items
		const items = data.map((item)=>{
			if(item.age > 24)
			{
				return(
					<div className="item" key={item.id}>
						<h1>{item.id === 1 || item.id === 2? item.id : "hacked"} - <span>{item.name}</span> - <strong>{item.age}</strong></h1>
					</div>
				)
			}
		})
		return(
			<div>
				{/* <p>{items.length}</p> */}
				<h2>{items}</h2>
				{/* <h1>{Math.floor(Math.random()* 1000)}</h1> */}
				<form onSubmit={this.handelSubmit}>
					<input type="text" onChange={this.changeVal}/>
					<p> {this.state.val}</p>
					<button type="submit"> login</button>
				</form>

			</div>
		)
	}
}
export default Items
