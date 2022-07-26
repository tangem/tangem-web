import GeneralIcon from "../../public/svg/help/general.svg";
import SecurityIcon from "../../public/svg/help/security.svg";
import SupportedAssetsIcon from "../../public/svg/help/supported-assets.svg";
import FundTransferIcon from "../../public/svg/help/fund-transfer.svg";
import AppFunctionalityIcon from "../../public/svg/help/app-functionality.svg";
import AcquisitionIcon from "../../public/svg/help/acquisition.svg";
import React from "react";

export const sectionsConfig = {
	5639392515485: {
		icon:  <GeneralIcon />,
		slug:  'general',
	},
	5713319369629:  {
		icon:  <SecurityIcon />,
		slug:  'security',
	},
	5713294009757:  {
		icon:  <SupportedAssetsIcon />,
		slug:  'supported-assets',
	},
	5713346162973: {
		icon:   <FundTransferIcon />,
		slug:  'fund-transfer',
	},
	5713320737437:  {
		icon:  <AppFunctionalityIcon />,
		slug:  'app-functionality',
	},
	5713345649181: {
		icon:   <AcquisitionIcon />,
		slug:  'acquisition',
	},
};


export const getCodeByLanguage = (language) => ['ru', 'by'].includes(language) ? 'ru' : 'en-us';
