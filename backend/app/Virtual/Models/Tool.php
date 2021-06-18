<?php

namespace App\Virtual\Models;

/**
 * @OA\Schema(
 *     title="Tool",
 *     description="Tool model",
 *     @OA\Xml(
 *         name="Tool"
 *     )
 * )
 */
class Tool
{

    /**
     * @OA\Property(
     *     title="ID",
     *     description="ID",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    private $id;

    /**
     * @OA\Property(
     *      title="Title",
     *      description="title of the new project",
     *      example="A nice project"
     * )
     *
     * @var string
     */
    public $title;

    /**
     * @OA\Property(
     *     title="link",
     *     description="Link of project",
     *     example="https://notion.so",
     * )
     *
     * @var string
     */
    public $link;

   /**
     * @OA\Property(
     *      title="Description",
     *      description="All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
     *      example="Notion"
     * )
     *
     * @var string
    */
    public $description;

    /**
     * @OA\Property(
     *     title="Tags",
     *     description="Tag's tool"
     * )
     *
     * @var \App\Virtual\Models\Tag[]
     */
    private $tags;
}
