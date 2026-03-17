import { Request, Response } from "express"
import { employeeService } from "../services/employeeService"

export const employeeController = {
  getEmployees(req: Request, res: Response) {
    try {
      const employees = employeeService.getEmployees()
      res.json(employees)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  getDepartments(req: Request, res: Response) {
    try {
      const departments = employeeService.getDepartments()
      res.json(departments)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  createEmployee(req: Request, res: Response) {
    try {
      const result = employeeService.createEmployee(req.body)
      res.status(201).json(result)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }
}