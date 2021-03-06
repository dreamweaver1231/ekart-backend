import { Router } from 'express';
import { middleware as query } from 'querymen';
import { middleware as body } from 'bodymen';
import { create, index, show, update, destroy } from './controller';
import { schema } from './model';

export Product, { schema } from './model';

const router = new Router();
const { name, description } = schema.tree;

/**
 * @api {post} /products Create product
 * @apiName CreateProduct
 * @apiGroup Product
 * @apiParam name Product's name.
 * @apiParam description Product's description.
 * @apiSuccess {Object} product Product's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product not found.
 */
router.post('/', body({ name, description }), create);

/**
 * @api {get} /products Retrieve products
 * @apiName RetrieveProducts
 * @apiGroup Product
 * @apiUse listParams
 * @apiSuccess {Object[]} products List of products.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index);

/**
 * @api {get} /products/:id Retrieve product
 * @apiName RetrieveProduct
 * @apiGroup Product
 * @apiSuccess {Object} product Product's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product not found.
 */
router.get('/:id', show);

/**
 * @api {put} /products/:id Update product
 * @apiName UpdateProduct
 * @apiGroup Product
 * @apiParam name Product's name.
 * @apiParam description Product's description.
 * @apiSuccess {Object} product Product's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Product not found.
 */
router.put('/:id', body({ name, description }), update);

/**
 * @api {delete} /products/:id Delete product
 * @apiName DeleteProduct
 * @apiGroup Product
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Product not found.
 */
router.delete('/:id', destroy);

export default router;
