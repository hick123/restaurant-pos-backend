import Responses from '../utils/response';

import db from '../models';
/**
 * ItemController handles all sales related operations
 */
class ItemController {
  /**
   * getItems-  gets all menu items
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object} orders from database
   */

  async list(req, res) {
    const items = await db.Item.findAll({
      include: [
        {
          model: db.Category,
        },
      ],
    });
    Responses.handleSuccess(200, 'Items', res, items);
  }

  /**
   * create-  create Item
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object}
   */

  async create(req, res) {
    console.log(req.body, req.file);
    const hostUrl = req.protocol + '://' + req.get('host');

    const imgUrl = hostUrl + '/' + req.file.filename;

    const item = {
      title: req.body.title,
      imgUrl: imgUrl,
      price: req.body.price,
      categoryId: req.body.categoryId,
    };

    const createdItem = await db.Item.create(item);

    return Responses.handleSuccess(200, 'created item successfully', res, createdItem);
  }

  /**
   * getById- gets item by ID
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object}
   */

  async getById(req, res) {
    const { id } = req.params;

    const item = await db.Item.findOne({
      where: { id: id },
      include: [
        {
          model: db.Category,
        },
      ],
    });

    if (!item) {
      return Responses.handleError(400, "Couldn't find that category", res);
    }

    return Responses.handleSuccess(200, 'Category by ID', res, item);
  }

  /**
   * delete-  delete item
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object}
   */

  async delete(req, res) {
    const { id } = req.params;

    const item = await db.Item.findOne({
      where: { id: id },
    });

    if (!item) {
      return Responses.handleError(400, "Couldn't find that item", res);
    }

    const deletedItem = await db.Item.destroy({ where: { id: id } });

    if (!deletedItem) {
      return Responses.handleError(400, "Couldn't delete that Item", res);
    }

    return Responses.handleSuccess(200, 'Successfully deleted that item', res);
  }
}

export default new ItemController();
