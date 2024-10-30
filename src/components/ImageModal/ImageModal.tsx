import { Images } from "../../types";
import s from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

type ImageModalProps = {
	image: Images | null;
	onClose: () => void;
};

const ImageModal = ({ image, onClose }: ImageModalProps) => {
	if (!image) return null;
	return (
		<Modal isOpen={!!image} onRequestClose={onClose} style={customStyles}>
			<div className={s.wrap}>
				<img
					className={s.img}
					src={image.urls.regular}
					alt={image.alt_description}
				/>
			</div>
		</Modal>
	);
};

export default ImageModal;
