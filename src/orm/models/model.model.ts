import { prop } from '@typegoose/typegoose';

class Model {
  @prop()
  name: string;
}

export default Model;