import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
	render(){
		const comments = this.props.comments.map((comment,index)=>{
			return <li key={index}>{comment}</li>
		});
		return (
				<ul>{comments}</ul>
		);
	}
};

class Todo extends React.Component {
	constructor(props){
		super(props);
		this.setParameter();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	setParameter(){
		this.state = {
			comments: [],
			inputValue: ''
		};
	}
	handleSubmit(e){
		e.preventDefault();
		const comment = this.state.inputValue;
		this.setState({
			comments: this.state.comments.concat(comment),
			inputValue: ''
		});
	}
	handleChange(e){
		this.setState({
			inputValue: e.target.value
		});
	}
	render(){
		return (
				<div>
					<form onSubmit={this.handleSubmit}>
						<input
								type="text"
								value={this.state.inputValue}
								onChange={this.handleChange}/>
						<input type="submit" value="add"/>
					</form>
					<TodoList comments={this.state.comments}/>
				</div>
		);
	}
};


ReactDOM.render(
		<Todo/>,
		document.getElementById('todoList')
);