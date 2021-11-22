const express = require("express");

var locations = require("../models/locations.model");
const Hotels = locations.Hotels;
const Restaurants = locations.Restaurants;
const Attractions = locations.Attractions;

const router = express.Router();

//--------------------------------- HYDERABAD DATA --------------------------

// -------------------------------- HOTELS ----------------------------------
// POST --- Hotels
router.post("/Hyderabad/Hotels", async (req, res) => {
  const hotels = await Hotels.create(req.body);
  return res.status(200).send(hotels);
});

// GET --- Hotels
router.get("/Hyderabad/Hotels", async (req, res) => {
  const hotels = await Hotels.find({ ranking_geo: "Hyderabad" }).lean().exec();
  return res.status(200).send(hotels);
});

// GET --- Specific Hotel with ID
router.get("/Hyderabad/Hotels/:id", async (req, res) => {
  const hotels = await Hotels.findById(req.params.id).lean().exec();
  return res.status(200).send(hotels);
});

// --------------------------------- Restaurants ------------------------------
// POST --- Restaurants
router.post("/Hyderabad/Restaurants", async (req, res) => {
  const restaurants = await Restaurants.create(req.body);
  return res.status(200).send(restaurants);
});

// GET --- Restaurants
router.get("/Hyderabad/Restaurants", async (req, res) => {
  const restaurants = await Restaurants.find({ ranking_geo: "Hyderabad" })
    .lean()
    .exec();
  return res.status(200).send(restaurants);
});

// GET --- Specific Restaurant with ID
router.get("/Hyderabad/Restaurants/:id", async (req, res) => {
  const restaurants = await Restaurants.find(req.params.id).lean().exec();
  return res.status(200).send(restaurants);
});

// --------------------------------- Attractions ------------------------------
// POST --- Attractions
router.post("/Hyderabad/Attractions", async (req, res) => {
  const attractions = await Attractions.create(req.body);
  return res.status(200).send(attractions);
});

// GET --- Attractions
router.get("/Hyderabad/Attractions", async (req, res) => {
  const attractions = await Attractions.find({ ranking_geo: "Hyderabad" })
    .lean()
    .exec();
  return res.status(200).send(attractions);
});

// GET --- Specific Attraction with ID
router.get("/Hyderabad/Attrasctions/:id", async (req, res) => {
  const attractions = await Hotels.findById(req.params.id).lean().exec();
  return res.status(200).send(attractions);
});

// -------------------------- MUMBAI Data -----------------------------

// -------------------------------- HOTELS ----------------------------------
// POST --- Hotels --------
router.post("/Mumbai/Hotels", async (req, res) => {
  const mumbaiHotels = await Hotels.create(req.body);
  return res.status(200).send(mumbaiHotels);
});

// GET --- Hotels --------
router.get("/Mumbai/Hotels", async (req, res) => {
  const mumbaiHotels = await Hotels.find({ ranking_geo: "Mumbai" })
    .lean()
    .exec();
  return res.status(200).send(mumbaiHotels);
});

// GET --- Specific Hotel with ID --------------------------------------------
router.get("/Mumbai/Hotels/:id", async (req, res) => {
  const mumbaiHotels = await Hotels.findById(req.params.id).lean().exec();
  return res.status(200).send(mumbaiHotels);
});

// --------------------------------- Restaurants ------------------------------
// POST --- Restaurants
router.post("/Mumbai/Restaurants", async (req, res) => {
  const mumbaiRestaurants = await Restaurants.create(req.body);
  return res.status(200).send(mumbaiRestaurants);
});

// GET --- Restaurants of Mumbai
router.get("/Mumbai/Restaurants", async (req, res) => {
  const mumbaiRestaurants = await Restaurants.find({ ranking_geo: "Mumbai" })
    .lean()
    .exec();
  return res.status(200).send(mumbaiRestaurants);
});

// GET --- Specific Restaurant with ID
router.get("/Mumbai/Restaurants/:id", async (req, res) => {
  const mumbaiRestaurants = await Restaurants.find(req.params.id).lean().exec();
  return res.status(200).send(mumbaiRestaurants);
});

// --------------------------------- Attractions ---------------------------------
// POST --- Attractions
router.post("/Mumbai/Attractions", async (req, res) => {
  const mumbaiAttractions = await Attractions.create(req.body);
  return res.status(200).send(mumbaiAttractions);
});

// GET --- Attractions
router.get("/Mumbai/Attractions", async (req, res) => {
  const mumbaiAttractions = await Attractions.find({ ranking_geo: "Mumbai" })
    .lean()
    .exec();
  return res.status(200).send(mumbaiAttractions);
});

// GET --- Specific Attractions of Mumbai
router.get("/Mumbai/Attractions/:id", async (req, res) => {
  const mumbaiAttractions = await Restaurants.find(req.params.id).lean().exec();
  return res.status(200).send(mumbaiAttractions);
});

// -------------------------- BENGALURU Data -----------------------------

// -------------------------------- HOTELS ----------------------------------
// POST --- Hotels
router.post("/Bengaluru/Hotels", async (req, res) => {
  const bengaluruHotels = await Hotels.create(req.body);
  return res.status(200).send(bengaluruHotels);
});

// GET --- Hotels
router.get("/Bengaluru/Hotels", async (req, res) => {
  const bengaluruHotels = await Hotels.find({ ranking_geo: "Bengaluru" })
    .lean()
    .exec();
  return res.status(200).send(bengaluruHotels);
});

// GET --- Specific Hotel with ID --------------------------------------------
router.get("/Bengaluru/Hotels/:id", async (req, res) => {
  // const bengaluruHotels = await Hotels.findById(req.params.id).lean().exec();
  // return res.status(200).send(bengaluruHotels);
  const my_id = req.params.id;
  const temp = await Hotels.find({ location_id: "608386" }).lean().exec();
  res.send({ data: temp });
});

// --------------------------------- Restaurants ------------------------------
// POST --- Restaurants
router.post("/Bengaluru/Restaurants", async (req, res) => {
  const bengaluruRestaurants = await Restaurants.create(req.body);
  return res.status(200).send(bengaluruRestaurants);
});

// GET --- Restaurants
router.get("/Bengaluru/Restaurants", async (req, res) => {
  const bangaluruRestaurants = await Restaurants.find({
    ranking_geo: "Bengaluru",
  })
    .lean()
    .exec();
  return res.status(200).send(bangaluruRestaurants);
});

// GET --- Specific Restaurant with ID
router.get("/Bengaluru/Restaurants/:id", async (req, res) => {
  const bangaluruRestaurants = await Hotels.findById(req.params.id)
    .lean()
    .exec();
  return res.status(200).send(bangaluruRestaurants);
});

// --------------------------------- Attractions ---------------------------------
// POST --- Attractions -------
router.post("/Bengaluru/Attractions", async (req, res) => {
  const bengaluruAttractions = await Attractions.create(req.body);
  return res.status(200).send(bengaluruAttractions);
});

// GET --- Attractions -------
router.get("/Bengaluru/Attractions", async (req, res) => {
  const bengaluruAttractions = await Attractions.find({
    ranking_geo: "Bengaluru",
  })
    .lean()
    .exec();
  return res.status(200).send(bengaluruAttractions);
});

// GET --- Specific Attractions with ID-------
router.get("/Bengaluru/Attractions/:id", async (req, res) => {
  const bengaluruAttractions = await Attractions.find(req.params.id)
    .lean()
    .exec();
  return res.status(200).send(bengaluruAttractions);
});

module.exports = router;
