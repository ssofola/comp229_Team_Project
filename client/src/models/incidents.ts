import { Schema, model, Types} from "mongoose";
import User from './user';

interface IIncident{
    IncidentNo: string;
    Title: string;
    Description: string;
    Category: string;
    CreatedBy: Types.ObjectId;
    AssignedTo: Types.ObjectId;

}

const incidentSchema = new Schema<IIncident>({
    IncidentNo: {type: String, required:true},
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Category: {type: String, required: true},
    CreatedBy: {type: Schema.Types.ObjectId, required: true},
    AssignedTo: {type: Schema.Types.ObjectId,ref:User, required: true}
});
const Incident = model<IIncident>('Incident', incidentSchema);
export default Incident;