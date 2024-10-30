import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
	children: string;
	textAlign?: string;
	marginBottom?: string;
}
const ErrorMessage = ({
	children,
	textAlign = "",
	marginBottom = "0",
}: ErrorMessageProps) => {
	return (
		<p
			className={[
				s["text"],
				s[textAlign],
				s[`marginBottom${marginBottom}`],
			].join(" ")}
		>
			{children}
		</p>
	);
};

export default ErrorMessage;
