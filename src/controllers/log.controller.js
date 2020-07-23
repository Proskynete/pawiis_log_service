const Log = require('../models/log.model');

const get = async (req, res) => {
	const { pet_id } = req.params;
	try {
		const logs = await Log.findOne({ pet_id });

		if (!logs) {
			return res.status(404).json({
				status: 404,
				message: `Pet's log not found`,
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
