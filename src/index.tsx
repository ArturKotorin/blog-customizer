import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [formStates, setFormStates] = useState({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	});

	const setStates = (data: Record<string, OptionType>) => {
		setFormStates({
			'--font-family': data.selectFont.value,
			'--font-size': data.selectFontSize.value,
			'--font-color': data.selectFontColor.value,
			'--container-width': data.selectContentWidth.value,
			'--bg-color': data.selectBackgroundColor.value,
		});
	};

	return (
		<div className={clsx(styles.main)} style={formStates as CSSProperties}>
			<ArticleParamsForm setFormStates={setStates} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
