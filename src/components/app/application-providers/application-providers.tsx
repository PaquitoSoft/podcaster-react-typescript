import { ThemeProvider, useTheme } from "./theme-provider/theme-provider";
import { GenericErrorProvider, useGenericError } from "./generic-error-provider/generic-error-provider";
import { LoaderProvider, useLoader } from "./loader-provider/loader-provider";

type Props = {
	children: JSX.Element | JSX.Element[];
};

const ApplicationProviders = ({ children }: Props) => {
	return (
		<ThemeProvider>
			<LoaderProvider>
				<GenericErrorProvider>
					{children}				
				</GenericErrorProvider>
			</LoaderProvider>
		</ThemeProvider>
	)
}

export default ApplicationProviders;

export {
	useTheme,
	useLoader,
	useGenericError
};
