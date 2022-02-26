import React from "react";
import axios from 'axios'
import { Component } from "react";
class Blog extends Component{
	state={
		items:[]
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
				<h1>blog</h1>
				{listUser}

			</div>
		)
	}
}
export default Blog
