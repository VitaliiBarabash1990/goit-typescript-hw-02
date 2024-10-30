import ImageCard from "../ImageCard/ImageCard";
import { GetValueImage, Images } from "../../types";
import s from "./ImageGallery.module.css";

type ImageGaleryProps = {
	photos: Images[];
	getValueImage: GetValueImage;
};

const ImageGallery = ({ photos, getValueImage }: ImageGaleryProps) => {
	return (
		<ul className={s.list}>
			{photos.map((photo) => (
				<li key={photo.id}>
					<ImageCard photo={photo} getValueImage={getValueImage} />
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
