<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Question.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$question = new Question($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $question->question_start = $_GET['start'];
        $question->question_total = 15;
        checkLimitId($question->question_start, $question->question_total);
        $query = checkReadLimit($question);
        $total_result = checkReadAll($question);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $question->question_total,
            $question->question_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();