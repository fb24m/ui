import styles from './index.module.scss';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { WordpressService } from '../../services/Wordpress';
import { useParams } from 'react-router';
import { NotFoundError } from '../Error';
import { Alignment, Box, Icon, Title2 } from '@fb24m/ui/components';
import { formatDate } from '../../functions/formatDate';

export const PostCard = (): React.ReactElement => {
	const params = useParams();

	const { isLoading, isError, isSuccess, data, error } = useQuery(['post'], () => WordpressService.getPostBySlug(params.slug!));

	if (isLoading) return <>Подождите...</>
	else if (isError) { console.log(error); return <>Ошибка.</> }
	if (isSuccess && data.data[0]) {
		return (
			<div className="container">
				<Title2 className={styles.title}>{data.data[0].title.rendered}</Title2>
				<Box className={styles.labels}>
					<Box gap={4} align={Alignment.center}><Icon name='person' />fb24m</Box>
					<Box gap={4} align={Alignment.center}><Icon name='calendar_month' />
						{formatDate(data.data[0].date)}
					</Box>
				</Box>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: data.data[0].content.rendered }}></div>
			</div>
		)
	}
	else {
		return <NotFoundError />
	}
};