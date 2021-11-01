import { useI18n } from "../../app/application-providers/i18n-provider/i18n-provider";

type Props = {
	name: string;
	params?: any;
};

function Translation({ name, params }: Props) {
	const { getText } = useI18n();

	return <>{getText(name, { params })}</>;
};

export default Translation;
