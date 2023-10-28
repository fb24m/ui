// import styles from './index.module.scss';
import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { WordpressService } from '../../services/Wordpress';
import { useParams } from 'react-router';
import { NotFoundError } from '../Error';

export const PetPage = (): React.ReactElement => {
	const params = useParams();

	const { isLoading, isError, isSuccess, data, error } = useQuery(['page'], () => WordpressService.getPageBySlug(params.page!));

	const hashLink = location.href.split('#')[1];

	if (isLoading) return <>Подождите...</>
	else if (isError) { console.log(error); return <>Ошибка.</> }
	if (isSuccess && data.data[0]) return (
		<iframe width='100%'
			style={{ height: 'calc(100vh - 110px)' }}
			frameBorder={0}
			src={`${data.data[0].acf.widget_url}#${hashLink ? hashLink : ''}`}
		></iframe>
	)
	else {
		return <NotFoundError />
	}
};