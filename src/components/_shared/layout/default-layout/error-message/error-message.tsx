import './error-message.css';

type Props = {
	error: Error,
	onClose: () => void
};

function ErrorMessage({ error, onClose }: Props) {
	return (
		<dialog open className="error-message" onClick={onClose}>
			<div>{error.message}</div>
		</dialog>
	);
}

export default ErrorMessage;
