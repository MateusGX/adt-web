import database from '../../../utils/database';
export default async (req, res) => {

    const {
        query: { slug }
    } = req

    const { db } = await database();
    const response = await db.collection('history').findOne({ _id: slug}, { projection: { excerpt: 0, _id: 0 } });
    res.status(200).json(response)
}
