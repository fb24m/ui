import { useQuery } from '@tanstack/react-query';
import { WordpressService } from '../../services/Wordpress';
import { NotFoundError } from '../Error';
// import styles from './index.module.scss';
import React from 'react';

import { PetCard } from './PetCard';

export const Pet = (): React.ReactElement => {
	const { isLoading, isError, isSuccess, data, error } = useQuery(['page'], () => WordpressService.getPages());

	if (isLoading) return <>Подождите...</>
	else if (isError) { console.log(error); return <>Ошибка.</> }

	if (isSuccess && data.data[0]) return (
		<div className="container">
			{data.data.map((item) =>
				<PetCard title={item.title.rendered} content={item.content.rendered} slug={item.slug} />
			)}
		</div>
	)

	else return <NotFoundError />
};