const express = require("express");
const { createProduct , getAllProducts, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const { deleteUser } = require("../controllers/userController");
// const { createProduct , getAllProducts, updateProduct, getProductDetails} = require("../controllers/productController");

const router = express.Router();

// router.route("/products").get(isAuthenticatedUser,authorizeRoles("admin"), getAllProducts); //just for testing 
router.route("/products").get(getAllProducts);
// router.route("/product/new").post(createProduct);
router.route("/admin/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);

router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct);
router.route("/admin/product/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);
// router.route("/admin/product/:id").get(getProductDetails);
// router.route.get(getProductDetails);
// router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser,createProductReview);

router.route("/reviews").get(getProductReviews);
router.route("/reviews").delete(isAuthenticatedUser,deleteReview);


module.exports = router;
// const express = require("express");
// const {
//   getAllProducts,
//   createProduct,
//   updateProduct,
//   deleteProduct,
//   getProductDetails,
//   createProductReview,
//   getProductReviews,
//   deleteReview,
//   getAdminProducts,
// } = require("../controllers/productController");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// const router = express.Router();

// router.route("/products").get(getAllProducts);

// router
//   .route("/admin/products")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

// router
//   .route("/admin/product/new")
//   .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// router
//   .route("/admin/product/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

// router.route("/product/:id").get(getProductDetails);

// router.route("/review").put(isAuthenticatedUser, createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);

// module.exports = router;