import express from 'express';
import next from 'next';
import { resolve } from 'path';
import { config } from 'dotenv';

config();

declare namespace Express {
	export interface Request {
		rawBody?: string;
	}
}

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

app.prepare().then(() => {
const server = express();

server.use(express.static(process.env.STATIC_DIR || ''));
server.use(
	express.json({
		verify: function (req, res, buf) {
			if (req.url && req.url.startsWith('/webhook')) {
				(req as any).rawBody = buf.toString();
			}
		},
	})
);

server.get('/', (req, res) => {
	const path = resolve(process.env.STATIC_DIR + '/index.html');
	res.sendFile(path);
});

  server.get('/config', (req, res) => {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  });

  server.post('/create-verification-session', async (req, res) => {
    try {
      const verificationSession = await stripe.identity.verificationSessions.create({
        type: 'document',
        metadata: {
          user_id: '{{USER_ID}}',
        },
        options: {
          document: {
            allowed_types: ['driving_license', 'passport', 'id_card'],
            require_id_number: true,
            require_live_capture: true,
            require_matching_selfie: true,
          },
        },
      });

      res.send({
        client_secret: verificationSession.client_secret,
      });
} catch (e) {
	console.log(e);
	return res.status(400).send({
		error: {
			message: (e as Error).message,
		},
	});
}
  });

  server.post('/webhook', async (req, res) => {
    let data, eventType;


if (process.env.STRIPE_WEBHOOK_SECRET) {
    // ...
} else {
    data = req.body.data;
    eventType = req.body.type;
}

    switch (eventType) {
      case 'identity.verification_session.verified': {
        const verificationSession = data.object;
        break;
      }
      case 'identity.verification_session.requires_input': {
        const verificationSession = data.object;

        console.log('Verification check failed: ' + verificationSession.last_error.reason);

        switch (verificationSession.last_error.code) {
          case 'document_unverified_other': {
            break;
          }
          case 'document_expired': {
            break;
          }
          case 'document_type_not_supported': {
            break;
          }
          default: {
            // ...
          }
        }
      }
    }
    res.sendStatus(200);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(4242, () => {
    console.log('Node server listening at http://localhost:4242');
  });
});
