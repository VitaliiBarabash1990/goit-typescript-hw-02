import { FormEvent, useRef } from "react";
import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";

interface SearchBarProps {
	onSubmit: (searchTerm: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const searchValue = inputRef.current?.value.trim();

		if (!searchValue) {
			toast.error("Please fill out this field!");
			inputRef.current?.focus();
			return;
		}

		onSubmit(searchValue);
	};

	return (
		<header className={s.header}>
			<form onSubmit={handleSubmit} className={s.form}>
				<button className={s.btn} type="submit">
					<FaSearch size="16px" />
				</button>

				<input
					className={s.input}
					type="text"
					autoComplete="off"
					placeholder="What do you want to write?"
					name="search"
					ref={inputRef}
					autoFocus
				/>
			</form>
		</header>
	);
};
export default SearchBar;
