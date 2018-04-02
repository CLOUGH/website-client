export class Post {
  _id?: string;
  status: string;
  title: string;
  featuredImage: string;
  excerpt?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
