export interface Images {
	id: string;
	urls: {
		small: string;
		regular: string;
	};
	alt_description?: string;
}

export interface FetchImagesResponse {
	results: Images[];
}

export type GetValueImage = (image: Images) => void;
