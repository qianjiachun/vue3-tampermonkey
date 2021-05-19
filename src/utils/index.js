// 公共
export function getStrMiddle(str, before, after) {
    // 取中间文本
	let m = str.match(new RegExp(before + '(.*?)' + after));
	return m ? m[1] : false;
}