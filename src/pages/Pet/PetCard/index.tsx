// import styles from './index.module.scss';
import React from 'react';

import { Body1, Button, Card, Title3 } from '../../../components';

export interface PetCardProps {
	title: string
	content: string
	slug: string
}

export const PetCard = (props: PetCardProps): React.ReactElement => (
	<Card size={'normal'}>
		<Title3 dangerouslySetInnerHTML={{ __html: props.title }}></Title3>
		<Body1 dangerouslySetInnerHTML={{ __html: props.content }}></Body1>
		<div className="buttons">
			<Button appearance='Primary' as='a' href={`/pet/${props.slug}`}>Перейти</Button>
		</div>
	</Card>
)