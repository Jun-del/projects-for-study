import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const FormContainer = ({ children }: Props) => {
	return (
		<div id="container">
			<div className="flex content-center mt-5">
				<div className="xs:w-full md:w-1/2 sm:mx-auto md:mx-0">{children}</div>
			</div>
		</div>
	);
};

export default FormContainer;
