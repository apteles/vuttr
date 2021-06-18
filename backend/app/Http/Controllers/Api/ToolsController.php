<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ToolsResource;
use App\Models\Tool;
use Illuminate\Http\Request;

class ToolsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchTag = $request->get('tags_like');
        $searchGlobal = $request->get('q');
        $tools = null;

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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tools = Tool::find($id);
        return new ToolsResource($tools);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tool = Tool::findOrFail($id);
        $tool->delete();
        return response()->noContent();
    }
}
