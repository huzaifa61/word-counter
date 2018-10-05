require('./text.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const Text = createClass({
	displayName : 'Text',
	getDefaultProps(){
		return {
			value :'',
			onChange : ()=>{}
		};
	},
	update(evt){
		this.props.onChange(evt.target.value);
	},
	render(){
		return <div className='Text'>
			<textarea
				value={this.props.value}
				onChange={this.update}
				ref={this.textarea} />
			<div>{this.props.value + '\n'}</div>
		</div>;
	}
});

module.exports = Text;