interface LoadMoreBtnProps {
	handleChangePage: () => void;
}

const LoadMoreBtn = ({ handleChangePage }: LoadMoreBtnProps) => {
	return <button onClick={handleChangePage}>Load more</button>;
};

export default LoadMoreBtn;
