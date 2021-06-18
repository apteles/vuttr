<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    use HasFactory;

    protected $fillable = ['title','link','description'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
