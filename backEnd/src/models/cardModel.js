import Joi from 'joi'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
import { GET_DB } from '~/config/mongodb'
import { ObjectId } from 'mongodb'

const CARD_COLLECTION_NAME = 'cards'
const CARD_COLLECTION_SCHEMA = Joi.object({
  boardId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  columnId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),

  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().optional(),

  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})

const INVALID_UPDATE_FIELDS = ['_id', 'boardId', 'createdAt']

const validateBeforeCreate = async (data) => {
    return await CARD_COLLECTION_SCHEMA.validateAsync(data, {abortEarly: false})
}

const createNew = async (data) => {
    try {
        const validData = await validateBeforeCreate(data)
         const newCardToAdd ={
          ...validData,
          boardId: new ObjectId(validData.boardId),
          columnId: new ObjectId(validData.columnId)
        }
        const createdCARD = await GET_DB().collection(CARD_COLLECTION_NAME).insertOne(newCardToAdd)
        return createdCARD
    } catch (error) {
        throw new Error(error)
    }
}

const findOneById = async (id) => {
    try {
        const result = await GET_DB().collection(CARD_COLLECTION_NAME).findOne({
            _id: new ObjectId(id)
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const update = async (cardId, updateData) => {
    try {
        Object.keys(updateData).forEach(fieldName => {
            if(INVALID_UPDATE_FIELDS.includes(fieldName)){
                delete updateData[fieldName]
            }
        })

        // Doi voi nhung du lieu lien quan den ObjectId MongoDb thi phai dua ve lai nhu cu
        if(updateData.columnId) updateData.columnId = new ObjectId(updateData.columnId)


        const result = await GET_DB().collection(CARD_COLLECTION_NAME).findOneAndUpdate(
            { _id: new ObjectId(cardId)},
            {$set: updateData},
            {returnDocument: 'after'}
        )
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const deleteManyByColumnId = async (columnId) => {
    try {
        const result = await GET_DB().collection(CARD_COLLECTION_NAME).deleteMany({
            columnId: new ObjectId(columnId)
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const cardModel = {
  CARD_COLLECTION_NAME,
  CARD_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  update,
  deleteManyByColumnId
}