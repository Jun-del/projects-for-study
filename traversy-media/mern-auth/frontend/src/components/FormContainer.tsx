import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const FormContainer = ({ children }: Props) => {
	return (
		<div className="flex justify-center items-center mt-0 md:mt-8 p-6 md:p-0">
			<div className="w-full md:w-1/3 border-2 rounded-md p-6">{children}</div>
		</div>
	);
};

export default FormContainer;
