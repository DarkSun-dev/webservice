const Configuration = require('../model/configuration')

const factory = require('./../utils/factory')

exports.configActivity = factory.createOne(Configuration)
exports.getActivities = factory.getAll(Configuration)
exports.getActivity = factory.getOne(Configuration)
