module.exports = function (sequelize, DataTypes) {
	var Message = sequelize.define(
		'Message',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			subject: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			message: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
		},
		{
			freezeTableName: true,
			// timestamps: false,
		}
	);
	return Message;
};
