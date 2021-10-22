import './error-message.css';

type Props = {
	error: Error
};

function ErrorMessage({ error }: Props) {
	return (
		<dialog open className="error-message">
			<div>{error.message}</div>
		</dialog>
	);
}

export default ErrorMessage;
