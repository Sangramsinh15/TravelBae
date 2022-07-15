const planTrip = require("../../models/planTripModel/index");

/**
 * This function does all the operations on planTrip collection
 * @param {*} req : The request passsed as a parameter to the function planTripDB
 * @returns : The function returns the planTrip model
 */

exports.createPlanTrip = function (req, res) {
  console.log("Creating");
  const insertPlanTripData = new planTrip();
  const {
    plan_id,
    plan_name,
    emailid,
    city,
    country,
    start_date,
    end_date,
    is_completed,
    travel_partner,
    recommended_itineraries,
    accommodation,
  } = req.body;

  console.log(req.body);

  (insertPlanTripData.plan_id = plan_id),
    (insertPlanTripData.plan_name = plan_name),
    (insertPlanTripData.emailid = emailid),
    (insertPlanTripData.city = city),
    (insertPlanTripData.country = country),
    (insertPlanTripData.start_date = start_date),
    (insertPlanTripData.end_date = end_date),
    (insertPlanTripData.is_completed = is_completed),
    (insertPlanTripData.travel_partner = travel_partner),
    (insertPlanTripData.recommended_itineraries = recommended_itineraries),
    (insertPlanTripData.accommodation = accommodation),
    insertPlanTripData.save(function (err, planTrip) {
      if (err) {
        res.send(err);
      }
      res.json(planTrip);
    });
};

exports.fetchAllPlanTrips = function (req, res) {
  planTrip.find({}, function (err, planTrips) {
    if (err) {
      res.send(err);
    }
    res.json(planTrips);
  });
};

exports.findPlanTripByUserID = function (req, res) {
  let { emailid } = req.body;
  if (emailid === undefined) {
    emailid = req.params.id;
  }
  planTrip.find({ emailid }, function (err, planTrip) {
    if (err) {
      res.send(err);
    }
    res.json(planTrip);
  });
};

exports.deletePlanTripByID = function (req, res) {
  const { plan_id } = req.body;
  planTrip.findOneAndDelete({ plan_id }, function (err, planTrip) {
    if (err) {
      res.send(err);
    }
    res.json(planTrip);
  });
};