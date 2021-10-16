interface PodcasterError extends Error {
	statusCode?: number;
	response?: Response;
}

export default PodcasterError;
