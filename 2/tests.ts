import { RedisConnectionRelation } from '@raducualexandrumircea/redis-connection';

var obj: RedisConnectionRelation = new RedisConnectionRelation(['localhost:6379'], 'rel', ':');
var var1 = {
	a: 'bere',
	b: 'test',
	d: 'test',
	c: [
		1,
		2,
		3,
		1,
		{
			d: 'c',
			e: [5, 6, 7],
		},
	],
	f: [8, 9],
};

async function test() {
	await obj.createList('var1', 10, true);
	await obj.set('var1', [], var1, 11, true);
	console.log(await obj.get('var1', []));
	await obj.set('var1', ['a'], ['bere1']);
	console.log(await obj.redisObj.hgetall('var1'));
	//console.log(await obj.redisObj.lrange('rel:4e72e165-d443-42a9-be9c-48d3f57746ec', 0, 100));
	await obj.set('var1', ['a', '0'], 'bere2');
	console.log(await obj.redisObj.hgetall('var1'));
	await obj.set('var1', ['a'], ['ana are mere']);
	console.log(await obj.redisObj.hgetall('var1'));
	await obj.delete('var1', ['a']);
	console.log(await obj.redisObj.hgetall('var1'));
	await obj.deleteByValue('var1', [], 'test', true);
	await obj.deleteByValue('var1', ['c'], 1, true);
	//await obj.delete('var1', []);
	//console.log(await obj.redisObj.hgetall('var1'));
	await obj.push('var1', ['c'], { g: ['45', 56] });
	console.log(await obj.get('var1', ['c']));
	await obj.set('var1', ['c', 3], 54);
	console.log(await obj.get('var1', []));
	console.log(await obj.get('var1', ['c', 3]));
	//await obj.delete('var1', []);
}

async function test1() {
	await obj.createHash('var2', 10);
	console.log('1', await obj.get('var2', []));
	await obj.set('var2', ['sessionId'], '575623fgdb25dvsd');
	console.log('2', await obj.get('var2', []));
	await obj.set('var2', ['socket'], {});
	console.log('3', await obj.get('var2', []));
	await obj.set('var2', ['socket', 'socketId'], 'fsg56gfdb');
	console.log('4', await obj.get('var2', []));
	await obj.set('var2', ['socket', 'rooms'], []);
	console.log('5', await obj.get('var2', []));
	await obj.push('var2', ['socket', 'rooms'], 'room1');
	console.log('6', await obj.get('var2', []));
	await obj.push('var2', ['socket', 'rooms'], 'room2');
	console.log('7', await obj.get('var2', []));
	console.log('7', await obj.checkKey('var2', []));
	console.log('7', await obj.checkKey('var2', ['socket']));
	console.log('7', await obj.checkKey('var2', ['socket', 'rooms']));
	console.log('7', await obj.checkKey('var2', ['socket', 'rooms', 1]));
	console.log('7', await obj.checkKey('var2', ['socket', 'rooms', 2]));
	await obj.delete('var2', ['socket', 'rooms', 0]);
	console.log('8', await obj.get('var2', ['socket', 'rooms', 1]));
	console.log('expired', await obj.checkIfVariableExpired('var2'));
	//await obj.delete('var2', []);
}

async function test2() {
	await obj.createList('var3', 15);
	console.log('1', await obj.get('var3', []));
	await obj.push('var3', [], { a: 'b' });
	console.log('2', await obj.get('var3', [0]));
	await obj.set('var3', [0, 'b'], 56);
	console.log('3', await obj.get('var3', []));
	console.log('6', await obj.getLength('var3', [0]));
	await obj.delete('var3', [0, 'b']);
	console.log('3', await obj.get('var3', []));
	await obj.set('var3', [0], 67);
	console.log('4', await obj.get('var3', []));
	await obj.push('var3', [], 69);
	console.log('5', await obj.get('var3', []));
	console.log('6', await obj.getLength('var3', []));
	var arr = ['69', 67];
	await Promise.all(
		arr.map((val, index, arr) => {
			console.log(val);
			return obj.deleteByValue('var3', [], val);
		})
	);
	console.log('6', await obj.get('var3', []));
	console.log('6', await obj.getLength('var3', []));
	console.log('expired', await obj.checkIfVariableExpired('var3'));
	//await obj.delete('var3', []);
}

async function test3() {
	obj.redisObj.multi({ pipeline: false });
	obj.redisObj.set('test', 134);
	obj.redisObj.get('test');
	obj.redisObj.exec;
}

test();
test1();
test2();
//test3();
