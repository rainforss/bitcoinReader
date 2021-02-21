import express from "express";
import coinRecords from "../models/coinRecordModel.js";
import csvReader from "../utils/csvReader.js";
import cors from "cors";

const router = express.Router();

router.get("/", cors(), async (req, res) => {
  try {
    const records = await coinRecords.find({});
    if (records.length === 0) {
      res.status(204).json({
        message: "No record was found",
      });
    }
    res.json(records);
  } catch (error) {
    res.status(500).json({
      error: {
        message: "Internal server error, please try again later",
      },
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const allRows = csvReader(req.body);
    console.log(allRows[0]);
    res.json("success");
  } catch (error) {
    res.status(500).json({
      error: {
        message: "Internal server error, please try again later",
      },
    });
  }
});

export default router;
