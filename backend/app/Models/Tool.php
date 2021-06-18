<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
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

    public static function searchByTag(string $term): Collection
    {
        return self::whereHas(
            'tags',
            fn ($query) => $query->where('name', 'LIKE', "%{$term}%")
        )->get();
    }

    public static function searchGlobal(string $term): Collection
    {
        return self::where(
            'title',
            'LIKE',
            "%{$term}%"
        )->orWhere(
            'description',
            'LIKE',
            "%{$term}%"
        )->orWhereHas(
            'tags',
            fn ($query) => $query->where('name', 'LIKE', "%{$term}%")
        )->get();
    }
}
