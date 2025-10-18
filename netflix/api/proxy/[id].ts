import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (!id) {
    return res.status(400).json({ error: 'Video ID is required' });
  }

  try {
    const videoUrl = `https://image.tmdb.org/t/p/original/${id}`;
    const response = await fetch(videoUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch video: ${response.statusText}`);
    }

    // Forward the response headers
    res.setHeader('Content-Type', response.headers.get('content-type') || 'video/mp4');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    
    // Stream the video data
    const data = await response.arrayBuffer();
    res.send(Buffer.from(data));
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch video' });
  }
}
