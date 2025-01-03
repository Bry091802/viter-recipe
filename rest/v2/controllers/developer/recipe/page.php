<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Recipe.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$recipe = new Recipe($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $recipe->recipe_start = $_GET['start'];
        $recipe->recipe_total = 5;
        checkLimitId($recipe->recipe_start, $recipe->recipe_total);
        $query = checkReadLimit($recipe);
        $total_result = checkReadAll($recipe);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $recipe->recipe_total,
            $recipe->recipe_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();