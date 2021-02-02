import database from '../../utils/database';

export default async (req, res) => {
  const { db } = await database();
  const response = await db.collection('history').find({}, { projection: { title: 1, excerpt: 1 } }).toArray();
  res.status(200).json(response)
}
