"use client";

import i18n from "@/lib/i18n";
import type { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<I18nextProvider i18n={i18n}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</I18nextProvider>
	);
};

export default Providers;
