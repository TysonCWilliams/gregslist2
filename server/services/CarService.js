import { dbContext } from "../db/DbContext";
import { BadRequest } from '../utils/Errors'


class CarService {
    async delete(id) {
        // changes
        let car = await dbContext.Cars.findByIdAndDelete(id)
        if (!car) {
            throw new BadRequest("There is no car by that id")
        }
        return car
    }

    async edit(id, body) {
        return await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
    }

    async getOne(id) {
        let car = await dbContext.Cars.findById(id)
        if (!car) {
            throw new BadRequest("There is no car by that id")
        }
        return car
    }

    async create(body) {
        return await dbContext.Cars.create(body)
    }

    async getAll(query = {}) {
        let data = await dbContext.Cars.find(query)
        return data
    }
}


export const carService = new CarService()