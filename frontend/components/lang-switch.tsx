"use client";

import { useTranslation } from "react-i18next";
import { Button } from "./ui";

export default function LangSwitch() {
	const { i18n } = useTranslation();

	const handleChangeLang = (value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<Button
			size="icon"
			onClick={() => handleChangeLang(i18n.language === "en" ? "zh" : "en")}
		>
			{i18n.language === "en" ? "中" : "EN"}
		</Button>
	);
}
