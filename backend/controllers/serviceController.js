const Service = require("../models/serviceModels");
const asyncHandler = require("express-async-handler");
//Desc Get all services
//@route get /api/services
//@access private

const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find();
  res.status(200).json(services);
});

//Desc Create New Service
//@route post /api/services
//@access private

const createService = asyncHandler(async (req, res) => {
  console.log("request body is ", req.body);
  const { service, category, contact } = req.body;

  try {
    if (!service || !category || !contact) {
      res.status(400).json({ error: "All fields are mandatory" });
      return;
    }

    const serviceProp = await Service.create({
      service,
      category,
      contact: { ...contact },
    });
    res.status(201).json(serviceProp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Desc get service
//@route get /api/services/:id
//@access private

const getService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(service);
});

//Desc put service
//@route put /api/services/:id
//@access public

const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("service not found");
  }

  const updateService = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateService);
});

//Desc delete service
//@route DELETE /api/service/:id
//@access private

const deleteService = asyncHandler(async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      res.status(404);
      throw new Error("Service not found");
    }

    await service.deleteOne();
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
};
