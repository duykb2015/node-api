const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getCategory() {
    const rows = await db.query(
        `SELECT * FROM menu`
    );
    const data = helper.emptyOrRows(rows);

    return data
}

async function deleteCategory(id) {
    const rows = await db.query(
        `DELETE FROM menu WHERE id = ${id}`
    )
    const data = helper.emptyOrRows(rows);

    return data
}

async function getProduct() {
    const rows = await db.query(
        `SELECT * FROM product_items`
    );
    const data = helper.emptyOrRows(rows);
    return data
}

module.exports = {
    getCategory,
    getProduct,
    deleteCategory
}