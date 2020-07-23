const Log = require('../models/log.model');

const get = async (req, res) => {
	const { pet_id } = req.query;
	try {
		const logs = await Log.findOne({ pet_id });

		if (!logs) {
			return res.json({
				message: `Pet's log not found`,
				logs: [],
			});
		}

		res.status(200).json({
			status: 200,
			logs,
		});
	} catch (error) {
		return res.status(500).json({
			status: 500,
			error,
			message: `Server Error`,
		});
	}
};

module.exports = {
	get,
};
