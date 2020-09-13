export interface PostType {
	id: number;
	user: string;
	title?: string;
	content?: string;
	image?: string;
	likes: number;
	timestamp: string;
}
