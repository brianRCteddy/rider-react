import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
	return (
		<div className="ui containter comments">
			<CommentDetail
				author="Yema"
				timeStamp="Today at 4:43PM"
				comment="Kanina pa kita hinihintay"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Meg"
				timeStamp="Today at 11:43AM"
				comment="Panindigan"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Ube"
				timeStamp="Today at 6:43PM"
				comment="Wait mo ko diyan Yema"
				avatar={faker.image.avatar()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
