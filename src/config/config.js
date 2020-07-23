module.exports = {
	port: process.env.PORT || 5002,
	db: process.env.MONGODB || 'mongodb://localhost/pawii_log_service',
	SECRET_TOKEN: 'ULx{ecGK[[h`qK3x',
	saltRounds: 10,
};
