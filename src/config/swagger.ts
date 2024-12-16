import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis: [
        './src/router.ts'
    ]
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions = {
    customCss : `
        .topbar-wrapper .link {
            content: url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg54jJWnLbjBuX4HFew4TooXr2e-7aidLPZTOHwyt427nrEHtndrX7N3Huj0VO4GtDlxT3n03q97rTpNY0lIdimn4ik3VbUrzqEnNgUZ45Em_4GrRyFvzWtSQeTdHa5TIzGHCLGfQMjah1R_pnQi-1-e66SRSeStJMg8OiqwPd4dTBbzA/s220/DIMENLOOP.png');
            max-width: 100px !important;
            border-radius: 100%;
            heigth: auto;
        }
    `,
    customSiteTitle: 'Documentación REST API Express / Typescript'
}
export default swaggerSpec;
export {
    swaggerUiOptions
}