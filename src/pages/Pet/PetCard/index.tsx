// import styles from './index.module.scss';
import React from 'react';

import { Body1, Button, Card, Icon, Title3 } from '@fb24m/ui/components';

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
			<Button icon={<Icon name='open_in_new' />} appearance='Primary' as='a' href={`/pet/${props.slug}`}>Перейти</Button>
		</div>
	</Card>
)

