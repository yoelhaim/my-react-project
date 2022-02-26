import React from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'
function Posts(){


		const {id} = useParams();
		return(
			<div>
				<h1>Post {id}</h1>


			</div>
		)

}
export default Posts
