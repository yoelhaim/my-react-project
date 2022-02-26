import React from "react";
import axios from 'axios'
import { Component } from "react";
class Blog extends Component{
	state={
		items:[],
		name: ''
	}
	componentDidMount(){
		axios.get("https://jsonplaceholder.typicode.com/users",{

		})
		.then((res)=>{
			this.setState({
				items: res.data
			})
			// const itemdata = res.data;
			//  this.items = itemdata.map((item)=>{
			// 	return(
			// 		<div>
			// 			<p>{item.username}</p>
			// 		</div>
			// 	)
			// })

		})
		.catch((err)=>{
			console.log(err)
		})

	}
	handls =(e)=>{
		e.preventDefault();
		this.setState({
			name: document.getElementById("us").value
		})
		console.log(document.getElementById("us").value)

	}
	render(){
		const users= this.state.items;
		const listUser = users.map((item)=>{
			return(
				<div className="userlist">
					<p><span>{item.name}</span> - <strong>{item.email}</strong></p>
				</div>
			)
		})
		return(
			<div>
				<form onSubmit={this.handls}>
					<input type="text" id="us"/>
					<button type="submit">add</button>
					</form>
					{this.state.name.toUpperCase()}
				<h1>blog</h1>
				{listUser}

			</div>
		)
	}
}
export default Blog
