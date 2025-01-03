<?php

// Read active
function checkFilterActive($object)
{
    $query = $object->filterActive();
    checkQuery($query, "Empty records. (filter active)");
    return $query;
}

// Read active search
function checkFilterActiveSearch($object)
{
    $query = $object->filterActiveSearch();
    checkQuery($query, "Empty records. (filter active search)");
    return $query;
}
function checkReadAllByCategoryId($object)
{
    $query = $object->readAllByCategoryId();
    checkQuery($query, "Empty records. (filter active search)");
    return $query;
}
