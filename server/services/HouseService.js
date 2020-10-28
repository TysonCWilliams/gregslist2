import { dbContext } from "../db/DbContext";
import { BadRequest } from '../utils/Errors'


class HouseService {
    async delete(id) {
        // changes
        let house = await dbContext.Houses.findByIdAndDelete(id)
        if (!house) {
            throw new BadRequest("There is no house by that id")
        }
        return house
    }

    async edit(id, body) {
        return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
    }

    async getOne(id) {
        let house = await dbContext.Houses.findById(id)
        if (!house) {
            throw new BadRequest("There is no house by that id")
        }
        return house
    }

    async create(body) {
        return await dbContext.Houses.create(body)
    }

    async getAll(query = {}) {
        let data = await dbContext.Houses.find(query)
        return data
    }
}


export const houseService = new HouseService()