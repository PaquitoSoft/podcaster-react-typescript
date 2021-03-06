type Props = {
	seconds: number;
}

function TimeFormatter({ seconds }: Props) {
	// Reference https://stackoverflow.com/a/25279340
	const date = new Date(0);
	date.setSeconds(seconds)
	const value = date.toISOString().substr(11, 8);

	return (
		<span>{value.startsWith('00') ? value.substring(3) : value}</span>
	)
}

export default TimeFormatter;
