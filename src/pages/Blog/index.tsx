import styles from './index.module.scss';
import React from 'react';

import { WordpressService } from '../../services/Wordpress';

import { Sidebar } from '../../screens/Sidebar';
import { Post } from './Post';
import { ErrorHandler } from '@fb24m/ui/components';

import { useQuery } from '@tanstack/react-query';

export const Blog = (): React.ReactElement => {
	// деструктуризация объекта с ссылками с ссылками на объекты
	const { isLoading, isError, isSuccess, data, error } = useQuery(['post'], () => WordpressService.getPosts());

	if (!isSuccess) return <ErrorHandler interfaces={[isLoading, isError, isSuccess]} error={error} />

	return (
		<div className={`container container-grid ${styles.container}`}>
			<div className="main">
				{/* использование ссылки с ссылкой в компоненте */}
				{data!.data.map((item) =>
					<Post key={item.id}
						title={item.title.rendered}
						excerpt={item.excerpt.rendered}
						image={''}
						id={0}
					/>
				)}
			</div>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
		</div>
	);
};