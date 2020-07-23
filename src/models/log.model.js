const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionEnum = ['vaccine', 'disease', 'remedy'];

const LogSchema = Schema(
	{
		action_type: { type: String, enum: actionEnum, required: true },
		description: { type: String, required: true },
		pet_id: { type: Schema.ObjectId, ref: 'Pet', required: true },
		owner_id: { type: Schema.ObjectId, ref: 'User', required: true },
		executor_id: { type: Schema.ObjectId, ref: 'User', required: true },
		created_at: { type: Date },
		updated_at: { type: Date },
		last_login: { type: Date },
	},
	{
		collection: 'Log',
	}
);

module.exports = mongoose.model('Log', LogSchema);
