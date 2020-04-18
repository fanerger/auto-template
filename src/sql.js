
const mysql = require('mysql');

/**
 * 查询数据库表字段
 */
function queryDbColumns(dbName, tableName, callBack) {
	const connection = mysql.createConnection({
		host: '',
		port: '3306',
		user: 'root',
		password: '',
	});
	console.log('连接数据库...');
	connection.connect();
	// 查询表结构
	const sql = `select column_name, column_comment from information_schema.columns where table_schema ='${dbName}'  and table_name = '${tableName}' ;`;
	console.log('查询表结构...');
	connection.query(sql, function (err, columns) {
		if (err) {
			console.log('select error-', err.message);
			return;
		}
		handleTableItem(columns, callBack);
	});
	connection.end();
}

/**
 * 根据数据库字段 生成列表模板
 */
function handleTableItem(columns, callBack) {
	if (!Array.isArray(columns)) {
		console.log('表名错误')
		return
	}
	if (!columns.length) {
		console.log('表名错误')
		return
	}
	let columnString = ''
	columns.forEach(item => {
		columnString += `<el-table-column prop='${item.COLUMN_NAME}' label='${item.COLUMN_COMMENT || item.COLUMN_NAME}' />\n`
	})
	callBack(columnString)
}

module.exports = { queryDbColumns: queryDbColumns }
