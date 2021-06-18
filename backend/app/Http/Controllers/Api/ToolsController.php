<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ToolsResource;
use App\Models\Tag;
use App\Models\Tool;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ToolsController extends Controller
{
    /**
     * @OA\Info(
     *      version="1.0.0",
     *      title="VUTTR (Very Useful Tools to Remember) API Documentation",
     *      description="Documentation generated as a requirement",
     *      @OA\Contact(
     *          email="andre.telestp@gmail.com"
     *      ),
     *      @OA\License(
     *          name="Apache 2.0",
     *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
     *      )
     * )
     *
     * @OA\Server(
     *      url=L5_SWAGGER_CONST_HOST,
     *      description="VUTTR API Server"
     * )
     *
     * @OA\Tag(
     *     name="Tools",
     *     description="API Endpoints of Tools"
     * )
     *
    * @OA\Get(
    *     path="/api/tools",
    *     operationId="indexTool",
    *     tags={"Tools"},
    *     @OA\Response(response="200", description="Display a listing of tools."),
    *      @OA\Parameter(
    *          name="q",
    *          description="Search for global terms",
    *          required=false,
    *          in="query",
    *          @OA\Schema(
    *              type="string"
    *          )
    *      ),
    *      @OA\Parameter(
    *          name="tag",
    *          description="Search for specific tag",
    *          required=false,
    *          in="query",
    *          @OA\Schema(
    *              type="string"
    *          )
    *      ),
    * )
    */
    public function index(Request $request)
    {
        $searchTag = $request->get('tag');
        $searchGlobal = $request->get('q');

        if ($searchTag) {
            $tools = Tool::searchByTag($searchTag);

            return ToolsResource::collection($tools);
        }

        if ($searchGlobal) {
            $tools = Tool::searchGlobal($searchGlobal);

            return ToolsResource::collection($tools);
        }

        $tools = Tool::all();
        return ToolsResource::collection($tools);
    }


    /**
     * @OA\Post(
     *      path="/api/tools",
     *      operationId="storeTool",
     *      tags={"Tools"},
     *      summary="Store new tool",
     *      description="Returns tool data",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/StoreToolRequest")
     *      ),
     *      @OA\Response(
     *          response=201,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Tool")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      )
     * )
     */
    public function store(Request $request)
    {
        $rules = [
            'title' => 'required|max:50|unique:tools',
            'link' => 'required',
            'description' => 'required',
            'tags' => 'required|array'
        ];

        $dataFromRequest = $this->validate($request, $rules);

        return DB::transaction(function () use ($dataFromRequest, $request) {
            $tagIds = $request->get('tags');
            $tagIds = array_map(fn($tag) => Tag::firstOrCreate(['name' => $tag])->id, $tagIds);
            $tool = Tool::create($dataFromRequest);
            $tool->tags()->sync($tagIds);
            return new ToolsResource($tool);
        });
    }

    /**
     * @OA\Get(
     *      path="/api/tools/{tool}",
     *      operationId="getToolById",
     *      tags={"Tools"},
     *      summary="Get tool information",
     *      description="Returns tool data",
     *      @OA\Parameter(
     *          name="tool",
     *          description="Project id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Tool")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     * )
     */
    public function show($id)
    {
        $tools = Tool::find($id);
        return new ToolsResource($tools);
    }

    /**
    * @OA\Delete(
    *      path="/api/tools/{tool}",
    *      operationId="toolsProject",
    *      tags={"Tools"},
    *      summary="Delete existing tool",
    *      description="Deletes a record and returns no content",
    *      @OA\Parameter(
    *          name="tool",
    *          description="Project id",
    *          required=true,
    *          in="path",
    *          @OA\Schema(
    *              type="integer"
    *          )
    *      ),
    *      @OA\Response(
    *          response=204,
    *          description="Successful operation",
    *          @OA\JsonContent()
    *       ),
    *      @OA\Response(
    *          response=404,
    *          description="Resource Not Found"
    *      )
    * )
    */
    public function destroy($id)
    {
        $tool = Tool::findOrFail($id);
        $tool->delete();
        return response()->noContent();
    }
}
