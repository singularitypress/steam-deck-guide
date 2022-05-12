export interface IPost {
  title: string;
  slug: string;
  content: string;
  section: string;
  og: {
    image: string;
    description: string;
  };
}
