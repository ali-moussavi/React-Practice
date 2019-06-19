import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="sam"
					timeAgo="today at 4:35"
					text="Nice blog post"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<CommentDetail author="ali" timeAgo="today at 3:25" text="great!" avatar={faker.image.avatar()} />
			<CommentDetail author="jane" timeAgo="today at 8:43" text="Like" avatar={faker.image.avatar()} />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
