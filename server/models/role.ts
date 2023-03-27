import { Schema, model} from "mongoose";

interface IRole{
    name: string;
    description: string;
}

const roleSchema = new Schema<IRole>({
    name: {type: String, required: true},
    description: {type: String, required: true}
});
const Roles = model<IRole>('Role',roleSchema);
export default Roles;