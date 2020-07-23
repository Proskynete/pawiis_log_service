const Log = require('../models/log.model');

const create = async (req, res) => {
	const { action_type, description, pet_id, owner_id, executor_id } = req.body;

	try {
		const newLog = new Log({
			action_type,
			description,
			pet_id,
			owner_id,
			executor_id,
			created_at: Date.now(),
			updated_at: Date.now(),
			last_login: Date.now(),
		});

		const savedLog = await newLog.save();

		res.status(201).json({
			log: savedLog,
		});
	} catch (error) {
		return res.status(500).json({
			status: 500,
			error,
			message: `Server Error`,
		});
	}
};

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
	create,
};
