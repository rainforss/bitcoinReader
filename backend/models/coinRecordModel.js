import mongoose from "mongoose";

const coinRecordSchema = mongoose.Schema({
  recordDate: {
    type: Date,
    required: true,
  },
  txVolume: {
    type: Number,
    required: false,
  },
  adjustedTxVolume: {
    type: Number,
    required: false,
  },
  txCount: {
    type: Number,
    required: false,
  },
  marketcap: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  exchangeVolume: {
    type: Number,
    required: false,
  },
  generatedCoins: {
    type: Number,
    required: false,
  },
  fees: {
    type: Number,
    required: false,
  },
  activeAddresses: {
    type: Number,
    required: false,
  },
  averageDifficulty: {
    type: Number,
    required: false,
  },
  paymentCount: {
    type: Number,
    required: false,
  },
  medianTxValue: {
    type: Number,
    required: false,
  },
  medianFee: {
    type: Number,
    required: false,
  },
  blockSize: {
    type: Number,
    required: false,
  },
  blockCount: {
    type: Number,
    required: false,
  },
});

const CoinRecord = mongoose.model("CoinRecord", coinRecordSchema);

export default CoinRecord;
