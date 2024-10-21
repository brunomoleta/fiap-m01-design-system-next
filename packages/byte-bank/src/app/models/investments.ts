import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  stocks: { type: Number, default: 0 },
  funds: { type: Number, default: 0 },
  publicTreasure: { type: Number, default: 0 },
  privatePension: { type: Number, default: 0 },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

investmentSchema.virtual('totalAmount').get(function() {
  return this.stocks + this.funds + this.publicTreasure + this.privatePension;
})

export default mongoose.models.Investment || mongoose.model('Investment', investmentSchema);