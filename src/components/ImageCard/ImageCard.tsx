import s from "./ImageCard.module.css";
import { GetValueImage, Images } from "../../types";

interface ImageCardProps {
	photo: Images;
	getValueImage: GetValueImage;
}

const ImageCard = ({ photo, getValueImage }: ImageCardProps) => {
	return (
		<div className={s.item} onClick={() => getValueImage(photo)}>
			<img src={photo.urls.small} alt={photo.alt_description} />
		</div>
	);
};

export default ImageCard;
