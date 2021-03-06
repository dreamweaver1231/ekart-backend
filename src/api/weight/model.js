import mongoose, { Schema } from 'mongoose';

const weightSchema = new Schema(
  {
    unit: {
      type: String,
      default: 'g',
      enum: ['g', 'kg', 'lb', 'oz'],
    },
    value: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

weightSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      unit: this.unit,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
        ...view,
      }
      : view;
  },
};

const model = mongoose.model('Weight', weightSchema);

export const schema = model.schema;
export default model;
