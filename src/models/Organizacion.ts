import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IOrganizacion {
    name: string;
    users: mongoose.Types.ObjectId | string;
}

export interface IOrganizacionModel extends IOrganizacion, Document {}

const OrganizacionSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        users: { type: Schema.Types.ObjectId, required: true, ref: 'Usuario' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IOrganizacionModel>('Organizacion', OrganizacionSchema);
