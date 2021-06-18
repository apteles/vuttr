<?php

namespace App\Virtual;

/**
 * @OA\Schema(
 *      title="Store Tool request",
 *      description="Store Tool request body data",
 *      type="object",
 *      required={"title","link","description","tags"}
 * )
 */

class StoreToolRequest
{
    /**
     * @OA\Property(
     *      title="title",
     *      description="Name of the new tool",
     *      example="json-server"
     * )
     *
     * @var string
     */
    public $title;

     /**
     * @OA\Property(
     *      title="link",
     *      description="Link of the new tool",
     *      example="https://github.com/typicode/json-server"
     * )
     *
     * @var string
     */
    public $link;


    /**
     * @OA\Property(
     *      title="description",
     *      description="Description of the new tool",
     *      example="Fake REST API based on a json schema. Useful for mocking and creating APIs."
     * )
     *
     * @var string
     */
    public $description;

    /**
     * @OA\Property(
     *      title="tags",
     *      description="Tag name",
     *      example="rest"
     * )
     *
     * @var string[]
     */
    public $tags;
}
