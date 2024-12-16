import { connectDB } from "../server"
import db from "../config/db"

// Agruoa pruebas unitarias
describe('Primer test', () => {
    it('Debe revisar que 1 + 1 sean 2', () => {
        expect(1+1).toBe(2)
    })

    it('Debe revisar que 1 + 1 no sean 3', () => {
        expect(1+1).not.toBe(3)
    })
})

/*

describe('GET /api', () => {
    it('should send back a json response', async () => {
        const res = await request(server).get('/api');
        
        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/)
        expect(res.body.msg).toBe('Desde API')

        // Evitar falsos positivod
        expect(res.status).not.toBe(404)
        expect(res.body.msg).not.toBe('desde api')
    } )
})

*/

jest.mock('../config/db.ts')

describe('connectDB', () => {
    it('should handle database connection error', async () => {
        
        // Crear un ambiente y pasar comportamiento esperado
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('Hubo un error al conectar a la BD'))

        const consoleSpy = jest.spyOn(console, 'log')

        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un error al conectar a la BD')
        )
    })
})
