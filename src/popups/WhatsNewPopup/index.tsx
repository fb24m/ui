// import styles from './index.module.scss';
import React from 'react';

import { Popup, PopupFooter, Button, Box, Icon, Alignment, Title3 } from '@fb24m/ui/components';
import { PopupBody } from '@fb24m/ui/components/PopupBody';
import { useQuery } from '@tanstack/react-query';
import { WordpressService } from '../../services/Wordpress';

export interface PopupProps {
	bind: string
	togglePopup: Function
};

export const WhatsNewPopup = (props: PopupProps): React.ReactElement => {
	const { isLoading, isError, data } =
		useQuery({ queryKey: ['changelog'], queryFn: () => WordpressService.getGlobalFileBySlug('changelog') })

	if (isLoading) return <>Подождите...</>
	if (isError) return <>Ошибка.</>

	return (
		<Popup bind={props.bind}>
			<PopupBody>
				<Box justify={Alignment.center}>
					<Title3>Что нового</Title3>
				</Box>
				<Box direction="column" dangerouslySetInnerHTML={{ __html: data.data[0].content.rendered }}></Box>
			</PopupBody>
			<PopupFooter>
				<Box justify={Alignment.end}>
					<Button onClick={() => props.togglePopup()} icon={<Icon name='cancel' />} appearance='Secondary'>Закрыть</Button>
				</Box>
			</PopupFooter>
		</Popup >
	);
};