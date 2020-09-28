import Responses from '../utils/response';

import db from '../models';
/**
 * CategoryController handles all categories related operations
 */
class CategoryController {
  /**
   * list - lists all categories
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object}
   */

  async list(req, res) {
    // const
    const categories = await db.Category.findAll({
      include: [
        {
          model: db.Item,
        },
      ],
    });
    Responses.handleSuccess(200, 'categories', res, categories);
  }

  /**
   * create-  create category
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object}
   */

  async create(req, res) {
    console.log(req.body);
    const category = { title: req.body.title, imgUrl: req.body.imgUrl, userId: req.body.userId };

    const createdCategory = await db.Category.create(category);

    return Responses.handleSuccess(200, 'created category successfully', res, createdCategory);
  }

  /**
   * getById- gets Category by ID
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object}
   */

  async getById(req, res) {
    const { id } = req.params;

    const category = await db.Category.findOne({
      where: { id: id },
    });

    if (!category) {
      return Responses.handleError(400, "Couldn't find that category", res);
    }

    return Responses.handleSuccess(200, 'Category by ID', category);
  }

  /**
   * update-  update category
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object}
   */

  async update(req, res) {
    const category = await db.Category.findOne({
      where: { id: id },
    });

    if (!category) {
      return Responses.handleError(400, "Couldn't find that category", res);
    }

    const categoryBody = { title: req.body.title, imgUrl: req.body.imgUrl, userid: 1 };

    const updatedCategory = await db.Category.update(categoryBody);

    return Responses.handleSuccess(200, 'Successfully updated that category', res, updatedCategory);
  }

  /**
   * delete-  delete category
   *
   *  @param {object} res
   *  @param {object} req
   * @returns {object}
   */

  async delete(req, res) {
    const category = await db.Category.findOne({
      where: { id: id },
    });

    if (!category) {
      return Responses.handleError(400, "Couldn't find that category", res);
    }

    const deletedCategory = await db.Category.update(category);

    if (!deletedCategory) {
      return Responses.handleError(400, "Couldn't delete that category", res);
    }

    Responses.handleSuccess(200, 'Welcome to items', res);
  }
}

export default new CategoryController();
