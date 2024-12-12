<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
// use needed classes
require '../../models/level/Level.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$level = new Level($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $level->level_start = $_GET['start'];
        $level->level_total = 15;
        checkLimitId($level->level_start, $level->level_total);
        $query = checkReadLimit($level);
        $total_result = checkReadAll($level);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $level->level_total,
            $level->level_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();