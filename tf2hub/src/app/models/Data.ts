import { Tag } from "./Tag";
import { Link } from "./Link";
import { Image } from "./Image";


export class Data {
  title: string;
  subtitle: string;
  url?: string;
  tags: Tag[];
  description: string[];
  links: Link[];
  img?: Image;
}
