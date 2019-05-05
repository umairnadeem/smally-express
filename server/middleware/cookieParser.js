const parseCookies = (req, res, next) => {
    // var nameFilter = /.+?(?=\=)/;
    // var match = req.headers.cookie ? req.headers.cookie.match(nameFilter)[0] : null;
    // console.log(match);
	var arr = [];
	req.cookies = {};
	if (req.headers.cookie) {
		arr = req.headers.cookie.split('; ')
		for (let i = 0; i < arr.length; i++) {
			req.cookies[arr[i].split('=')[0]] = arr[i].split('=')[1];
		}
	}
	next();
};

module.exports = parseCookies;