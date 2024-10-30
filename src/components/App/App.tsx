import "./App.css";
import { useEffect, useState } from "react";
import { getPhotos } from "../services/api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Images } from "../../types";

const App = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [photos, setPhotos] = useState<Images[]>([]);
	const [error, setError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [modalData, setModalData] = useState<Images | null>(null);

	const onSubmit = (value: string) => {
		if (value == searchValue) return;
		setPage(1);
		setPhotos([]);
		setSearchValue(value);
	};

	useEffect(() => {
		if (!searchValue) return;

		const getData = async () => {
			try {
				setError(false);
				setIsLoading(true);
				const data = await getPhotos(page, searchValue);
				setPhotos((prev) => [...prev, ...data.results]);
			} catch {
				setError(true);
			} finally {
				setIsLoading(false);
			}
		};
		getData();
	}, [page, searchValue]);

	const handleChangePage = () => {
		setPage((prev) => prev + 1);
	};

	const getValueImage = (image: Images) => {
		setModalData(image);
	};

	const closeModal = () => {
		setModalData(null);
	};

	return (
		<>
			<Toaster position="top-right" reverseOrder={false} />
			<SearchBar onSubmit={onSubmit} />

			{photos.length > 0 && (
				<ImageGallery photos={photos} getValueImage={getValueImage} />
			)}
			{isLoading && <Loader />}
			{error && (
				<ErrorMessage textAlign="center">
					Something went wrong! Try again!
				</ErrorMessage>
			)}
			{searchValue && !error && (
				<LoadMoreBtn handleChangePage={handleChangePage} />
			)}
			{modalData && <ImageModal image={modalData} onClose={closeModal} />}
		</>
	);
};

export default App;
