const BootcampModel = require("./../mongo_db/models/Bootcamp");

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await BootcampModel.find();
    res
      .status(200)
      .json({
        success: true,
        message: "Show all bootcamps",
        count: bootcamps.length,
        data: bootcamps,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        message: "Bootcamp with that id does not exist",
      });
    }
    res.status(200).json({ success: true, message: "Success", data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const createdBootcamp = await BootcampModel.create(req.body);
    res.status(201).json({ success: true, data: createdBootcamp });
  } catch (error) {
    res.status(400).json({ success: false, data: {} });
  }
};
// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bodyData = req.body;
    const updatedBootcamp = await BootcampModel.findByIdAndUpdate(
      id,
      bodyData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedBootcamp) {
      return res
        .status(400)
        .json({ success: false, message: "bootcamp not found" });
    }
    res.status(200).json({
      success: true,
      message: `updated bootcamp ${req.params.id}`,
      data: updatedBootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedBootcamp = await BootcampModel.findByIdAndDelete(id);
    if (!deletedBootcamp) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid bootcamp id" });
    }
    res
      .status(200)
      .json({ success: true, message: `Deleted bootcamp ${req.params.id}` });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
