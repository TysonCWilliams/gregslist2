import BaseController from "../utils/BaseController";
import { houseService } from "../services/HouseService";

// NOTE do not use default
export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            let houses = await houseService.getAll(req.query)
            res.send(houses)
        } catch (error) {
            next(error)
        }
    }


    async getOne(req, res, next) {
        try {
            res.send(await houseService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            res.send(await houseService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            res.send(await houseService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await houseService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
}