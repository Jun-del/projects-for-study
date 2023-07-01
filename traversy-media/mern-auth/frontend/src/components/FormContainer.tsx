import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const FormContainer = ({ children }: Props) => {
	return (
		<div className="flex justify-center items-center mt-10">
			<div className="w-full md:w-1/3 border-2 rounded-md p-8">{children}</div>
		</div>
	);
};

export default FormContainer;
