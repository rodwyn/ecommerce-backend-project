const express = require('express');
const path = require('path');

// OKTA SESSION VALUES
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');
const oidc = new ExpressOIDC({
	issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
	client_id: process.env.OKTA_CLIENT_ID,
	client_secret: process.env.OKTA_CLIENT_SECRET,
	redirect_uri: `${process.env.HOST_URL}/authorization-code/callback`,
	scope: 'openid profile'
});

// Routes
const productRouter = require('./routes/product');

const app = express();

app.use(session({
	secret: process.env.APP_SECRET,
	resave: true,
	saveUninitialized: false
}));
app.use(oidc.router);

// views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

// app.use('/', oidc.ensureAuthenticated());
// app.use('/product', oidc.ensureAuthenticated(), productRouter);
app.use('/product', productRouter)

app.get('/logout', (req, res) => {
	if (req.userContext) {
		const idToken = req.userContext.tokens.id_token
		const to = encodeURI(process.env.HOST_URL)
		const params = `id_token_hint=${idToken}&post_logout_redirect_uri=${to}`
		req.logout()
		res.redirect(`${process.env.OKTA_ORG_URL}/oauth2/default/v1/logout?${params}`)
	} else {
		res.redirect('/')
	}
})

app.get('/', (req, res) => {
	const { userinfo } = req.userContext || {}

	res.render('index', {
		userinfo,
		title: 'Dashboard',
		content: 'Dashboard'
	})
});

module.exports = app;
