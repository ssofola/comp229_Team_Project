import { Schema, model, Types} from "mongoose";
import Roles from "./role";

interface IUser {
    fullName: string;
    username: string;
    email: string;
    password: string;
    role: Types.ObjectId;
}

const userSchema = new Schema<IUser>({
    fullName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Schema.Types.ObjectId, ref: Roles, required: true}
});
const User = model<IUser>('User',userSchema);
export default User;