'use strict';

const mysql = require('../config/mysql')();

exports = module.exports = Query;

/**
 * Create a query
 * @param {String} table name of table
 */
function Query(table) {
	this.table = table;
	return this;
}


Query.prototype.findOne = function (conditions = {1: 1}, cb) {
	const conditionKeys = [];
	const conditionValues = [];

	for (let i in conditions) {
		conditionKeys.push(`${i} = ?`);
	}

	for (let i in conditions) {
		conditionValues.push(conditions[i]);
	}

	this.SQL = `SELECT * FROM ${this.table} WHERE ${conditionKeys.join(' AND ')}`;

	return new Promise((resolve, reject) => {
		mysql.query(this.SQL, conditionValues, (err, results) => {
			if (err) reject(err);
			resolve(results);
		});
	});
	
};
