import { Request, Response } from "express"
import { employeeService } from "../services/employeeService"

export const employeeController = {
  async getEmployees(req: Request, res: Response) {
    try {
      const employees = await employeeService.getEmployees()
      res.json(employees)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  async getDepartments(req: Request, res: Response) {
    try {
      const departments = await employeeService.getDepartments()
      res.json(departments)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  async createEmployee(req: Request, res: Response) {
    try {
      const employees = await employeeService.createEmployee(req.body)
      res.status(201).json(employees)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }
}