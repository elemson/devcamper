const Bootcamp = require("../models/Bootcamps");

//desc Get create new bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public

const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public

const getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//desc Get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public

const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//desc Update bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public

const updatetBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

const deletetBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    } else {
      res.status(200).json({ success: true, data: bootcamp });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updatetBootcamp,
  deletetBootcamp,
};
