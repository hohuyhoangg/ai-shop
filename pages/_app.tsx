/* eslint-disable */
// @ts-ignore
import {useEffect} from 'react';
// @ts-ignore
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import 'nprogress/nprogress.css';
import '../styles/styles.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'animate.css';

import '@fontsource/fira-sans/900.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'boundless-checkout-react/dist/index.css';

import '@fortawesome/fontawesome-free/css/svg-with-js.css';

// @ts-ignore
import {AppProps} from 'next/app';
import RouterListener from '../components/RouterListener';
import LoadingLine from '../components/LoadingLine';

function MyApp({Component, pageProps}: AppProps) {
	useEffect(() => {
		const katalonTrafficAgent = document.createElement('script');
		katalonTrafficAgent.async = true;
		katalonTrafficAgent.defer = true;
		katalonTrafficAgent.src = 'https://static.qa.katalon.com/libs/traffic-agent/v1/traffic-agent.min.js';
		katalonTrafficAgent.id = 'katalonTrafficAgent';

		document.head.appendChild(katalonTrafficAgent);

		document.getElementById('katalonTrafficAgent').addEventListener('load', () => {
			window.startTrafficAgent('KA-596-3');
		});
	}, []);
	return (
		<Provider store={store}>
			<RouterListener />
			<LoadingLine />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
