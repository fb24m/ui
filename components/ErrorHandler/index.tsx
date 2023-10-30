import React from 'react';

interface ErrorHandlerProps {
	interfaces: boolean[]
	error: unknown
}

export const ErrorHandler = (props: ErrorHandlerProps): React.ReactElement => {

	if (props.interfaces[0]) {
		return <div className="container">Подождите...</div>
	}

	if (props.interfaces[1]) {
		console.log(props.error);
		return <div className="container">Ошибка. Подробности в консоли</div>
	}

	if (!props.interfaces[2]) {
		return <div className="container">Неизвестная ошибка</div>
	}

	return (
		<></>
	);
};