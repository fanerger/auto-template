/**
 * 根据数据库表自动生成vue列表模板
 * cmd: node app db=数据库名 table=数据表名 fileName=生成文件名称(默认为test.vue)
 */
const fs = require('fs-extra');
const path = require('path');
const sql = require('./src/sql');

// 生成模板的目录
const TEMPLATE_DIR = './template/';
// 默认生成模板页名test.vue
let fileName = 'test';

/**
 * 处理命令行参数 
 */
function bootstrap() {
	const cmdParams = process.argv.slice(2);
	let params = {}
	for (let i = 0; i < cmdParams.length; i++) {
		const arr = cmdParams[i].split('=')
		if (arr.length !== 2) {
			console.log('命令行参数传入错误')
			break
		}
		params[arr[0]] = arr[1]
	}
	if (!params.db) {
		console.log('库名不能为空')
		return
	}
	if (!params.table) {
		console.log('表名不能为空')
		return
	}
	if (params.fileName) {
		fileName = params.fileName
	}
	sql.queryDbColumns(params.db, params.table, (columnString) => {
		handleFile(columnString)
	})
}

/**
 * 处理文件
 */
function handleFile(columnString) {
	// 清空目标目录
	let targetDirPath = path.join(__dirname, TEMPLATE_DIR);
	fs.emptyDirSync(targetDirPath)
	// 读取模板文件，并修改内容
	let template = fs.readFileSync(path.join(__dirname, './src/template.vue'), 'utf8');
	let content = template.replace(/tableColumns/g, columnString); // target file content
	writeVueFile(content)
}

/**
 * 最后一步 写文件
 */
function writeVueFile(content) {
	// 目标文件夹和目标文件的路径
	let targetFilePath = path.join(__dirname, TEMPLATE_DIR, fileName + '.vue');
	if (!fs.existsSync(targetFilePath)) {
		fs.writeFile(targetFilePath, content, (err) => {
			if (err) throw err;
			console.log('模板生成成功！-->' + targetFilePath);
		});
	} else {
		console.error('existsSync error!');
	}
}

// 执行
bootstrap();
