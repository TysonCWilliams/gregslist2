import BaseController from "../utils/BaseController";
import { carService } from "../services/CarService";

// NOTE do not use default
export class CarController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            let cars = await carService.getAll(req.query)
            res.send(cars)
        } catch (error) {
            next(error)
        }
    }


    async getOne(req, res, next) {
        try {
            res.send(await carService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            res.send(await carService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            res.send(await carService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await carService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
}