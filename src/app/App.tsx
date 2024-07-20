import { Article } from '../components/article/Article';
import { ArticleParamsForm } from '../components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from '../constants/articleProps';
import styles from './App.module.scss';
import { CSSProperties, useState } from 'react';

export const App = () => {
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
		<main className={styles.main} style={formStates as CSSProperties}>
			<ArticleParamsForm setFormStates={setStates} />
			<Article />
		</main>
	);
};
