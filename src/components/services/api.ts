import axios from "axios";

export interface Images {
	id: string;
	urls: {
		small: string;
		regular: string;
	};
	alt_description: string;
}

export interface FetchImagesResponse {
	results: Images[];
}

export const getPhotos = async (
	page = 0,
	query = ""
): Promise<FetchImagesResponse> => {
	const { data } = await axios.get<FetchImagesResponse>(
		"https://api.unsplash.com/search/photos",
		{
			params: {
				client_id: "L5Ia53AUYAj2l8V6VKKnmYTv-N-2mMkTWk45bWBo7Es",
				query: query,
				page: page,
				per_page: 12,
			},
		}
	);

	return data;
};
