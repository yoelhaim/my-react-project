import React from "react"
import '../App.css';
import { Link, NavLink } from "react-router-dom";
const NAv = ()=>{
	return(
		<div>
			<ul>
				<NavLink exact="true"   to="/"><li>home</li></NavLink>
				<NavLink to="/about"><li>about</li></NavLink>
				<NavLink to="/blog"><li>blog</li></NavLink>

			</ul>
		</div>
	)
}
export default NAv
