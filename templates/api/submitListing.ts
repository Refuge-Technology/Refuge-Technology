import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;

    // Simple validation
    if (!data.name || !data.governmentID || !data.proofOfResidence || !isValidUrl(data.videoLink)) {
      return res.status(422).json({ message: 'Invalid input.' });
    }

    // Add your MongoDB or other database logic here...

    // Add your email sending logic here...

    res.status(200).json({ message: 'Submission successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

function isValidUrl(string: string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}
