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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchTag = $request->get('tags_like');
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
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
